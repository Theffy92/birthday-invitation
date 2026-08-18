import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import ConfirmationCard from "../components/invitation/ConfirmationCard"
import EventDetailsSection from "../components/invitation/EventDetailsSection"
import HeroSection from "../components/invitation/HeroSection"
import PotluckSection from "../components/invitation/PotluckSection"
import RSVPSection from "../components/invitation/RSVPSection"
import DeclineModal from "../components/invitation/DeclineModal"
import { mockInvitationData } from "../data/mockInvitationData"
import { getInvitationWording } from '../utils/invitationWording'

function InvitationPage({ token }) {
  const [invitationData, setInvitationData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState(null)

  const [isSaving, setIsSaving] = useState(false)
  const [saveError, setSaveError] = useState(null)

  const [guests, setGuests] = useState([])
  const [contribution, setContribution] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showDeclineModal, setShowDeclineModal] = useState(false)

  const wording = getInvitationWording(guests.length)
  const isSingleGuest = guests.length === 1

  function handleGuestToggle(guestId) {
    setGuests((currentGuests) => {
      const updatedGuests = currentGuests.map((guest) =>
        guest.id === guestId
          ? { ...guest, attending: !guest.attending }
          : guest
      )

      const hasAttendingGuests = updatedGuests.some(
        (guest) => guest.attending
      )

      if (!hasAttendingGuests) {
        setContribution("")
      }

      return updatedGuests
    })
  }

  async function handleSubmit() {
    const hasAttendingGuests = guests.some(
      (guest) => guest.attending === true
    )

    if (!hasAttendingGuests || !contribution.trim()) {
      return
    }

    setIsSaving(true)
    setSaveError(null)

    const guestResponses = guests.map((guest) => ({
      id: guest.id,
      attending: guest.attending === true,
    }))

    const { error } = await supabase.rpc(
      "save_invitation_response",
      {
        invitation_token: token,
        guest_responses: guestResponses,
        contribution_text: contribution.trim(),
      }
    )

    setIsSaving(false)

    if (error) {
      console.error("Failed to save response:", error)
      setSaveError(
        "No pudimos guardar tu respuesta. Intentá nuevamente."
      )
      return
    }

    setIsSubmitted(true)
  }

  async function handleDecline() {
    const declinedGuests = guests.map((guest) => ({
      ...guest,
      attending: false,
    }))

    setIsSaving(true)
    setSaveError(null)

    const guestResponses = declinedGuests.map((guest) => ({
      id: guest.id,
      attending: false,
    }))

    const { error } = await supabase.rpc(
      "save_invitation_response",
      {
        invitation_token: token,
        guest_responses: guestResponses,
        contribution_text: null,
      }
    )

    setIsSaving(false)

    if (error) {
      console.error("Failed to save decline:", error)
      setSaveError(
        "No pudimos guardar tu respuesta. Intentá nuevamente."
      )
      return
    }

    setGuests(declinedGuests)
    setContribution("")
    setIsSubmitted(false)
    setShowDeclineModal(true)
  }

  function handleEdit() {
    setIsSubmitted(false)
    setSaveError(null)
  }

  useEffect(() => {
    async function loadInvitation() {
      if (!token) {
        setLoadError("No se proporcionó un token de invitación.")
        setIsLoading(false)
        return
      }

      const { data, error } = await supabase.rpc(
        "get_invitation_by_token",
        {
          invitation_token: token,
        }
      )

      if (error) {
        console.error("Error al cargar la invitación:", error)
        setLoadError("Ocurrió un error al cargar la invitación.")
        setIsLoading(false)
        return
      }

      if (!data) {
        setLoadError("No se encontró la invitación.")
        setIsLoading(false)
        return
      }

      setInvitationData(data)
      setGuests(data.guests)

      if (data.response) {
        setContribution(data.response.contribution ?? "")

        const hasResponded = data.guests.some(
          (guest) => guest.attending === true
        )

        const hasAttendingGuests = data.guests.some(
          (guest) => guest.attending === true
        )

        setIsSubmitted(hasResponded && hasAttendingGuests)
      }
      setIsLoading(false)
    }

    loadInvitation()
  }, [token])

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#05020d] text-white">
        <p>Cargando invitación...</p>
      </main>
    )
  }

  if (loadError) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#05020d] px-6 text-center text-white">
        <p>{loadError}</p>
      </main>
    )
  }

  const pageData = {
    celebrant: invitationData.event.celebrant,
    inviteesLine: invitationData.invitation.display_name,

    hero: {
      title: invitationData.event.title,
      subtitle: invitationData.event.subtitle ?? "",
      description: invitationData.event.description ?? "",
      note: mockInvitationData.hero.note,
      postcardTitle: mockInvitationData.hero.postcardTitle,
      postcardDate: mockInvitationData.hero.postcardDate,
    },

    eventDetails: [
      {
        label: "Fecha",
        value: invitationData.event.event_date,
      },
      {
        label: "Hora",
        value: invitationData.event.event_time,
      },
      {
        label: "Lugar",
        value: invitationData.event.address,
      },
    ],

    rsvpDeadline: invitationData.event.rsvp_deadline,

    contribution: {
      ...mockInvitationData.contribution,
      title: invitationData.event.contribution_title,
      description:
        invitationData.event.contribution_description ?? "",
    },
  }

  const attendingGuests = guests.filter(
    (guest) => guest.attending === true
  )

  const hasAttendingGuests = attendingGuests.length > 0
  const hasContribution = contribution.trim().length > 0

  // The normal confirmation button is only valid when
  // someone is attending AND they entered a contribution.
  // Declining is handled separately by the decline button.
  const canSubmit = hasAttendingGuests && hasContribution

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#05020d] px-4 py-8 text-white sm:px-6 sm:py-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-700/30 blur-[90px]" />
        <div className="absolute bottom-10 right-0 h-56 w-56 rounded-full bg-fuchsia-700/20 blur-[110px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-4xl justify-center">
        <article className="w-full max-w-3xl space-y-9 rounded-[28px] border border-violet-500/40 bg-[#0a0618]/85 p-4 shadow-[0_0_40px_rgba(124,58,237,0.2)] backdrop-blur md:p-8">
          <HeroSection
            celebrant={pageData.celebrant}
            inviteesLine={pageData.inviteesLine}
            hero={pageData.hero}
          />

          <EventDetailsSection
            details={pageData.eventDetails}
            rsvpDeadline={pageData.rsvpDeadline}
          />

          <RSVPSection
            guests={guests}
            isSingleGuest={isSingleGuest}
            declineLabel={wording.declineLabel}
            onDecline={handleDecline}
            onGuestToggle={handleGuestToggle}
          />

          <PotluckSection
            contribution={pageData.contribution}
            prompt={wording.contributionPrompt}
            value={contribution}
            onChange={setContribution}
            disabled={!hasAttendingGuests}
          />

          {!isSubmitted && (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canSubmit || isSaving}
              className="mt-5 w-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_24px_rgba(232,121,249,0.65)] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
            >
              {isSaving ? "Guardando..." : "Confirmar asistencia"}
            </button>
          )}

          {saveError && (
            <p className="mt-3 text-center text-sm text-rose-300">
              {saveError}
            </p>
          )}

          {isSubmitted && (
            <ConfirmationCard
              guests={attendingGuests}
              contribution={contribution}
              onEdit={handleEdit}
            />
          )}
        </article>
      </div>

      {showDeclineModal && (
        <DeclineModal
          message={wording.declineMessage}
          onClose={() => setShowDeclineModal(false)}
        />
      )}
    </main>
  )
}

export default InvitationPage