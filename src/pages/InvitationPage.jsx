import ConfirmationCard from "../components/invitation/ConfirmationCard"
import EventDetailsSection from "../components/invitation/EventDetailsSection"
import HeroSection from "../components/invitation/HeroSection"
import PotluckSection from "../components/invitation/PotluckSection"
import RSVPSection from "../components/invitation/RSVPSection"
import { mockInvitationData } from "../data/mockInvitationData"

function InvitationPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#05020d] px-4 py-8 text-white sm:px-6 sm:py-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-700/30 blur-[90px]" />
        <div className="absolute bottom-10 right-0 h-56 w-56 rounded-full bg-fuchsia-700/20 blur-[110px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-4xl justify-center">
        <article className="w-full max-w-3xl space-y-9 rounded-[28px] border border-violet-500/40 bg-[#0a0618]/85 p-4 shadow-[0_0_40px_rgba(124,58,237,0.2)] backdrop-blur md:p-8">
          <HeroSection
            celebrant={mockInvitationData.celebrant}
            inviteesLine={mockInvitationData.inviteesLine}
            hero={mockInvitationData.hero}
          />
          <EventDetailsSection
            details={mockInvitationData.eventDetails}
            rsvpDeadline={mockInvitationData.rsvpDeadline}
          />
          <PotluckSection contribution={mockInvitationData.contribution} />
          <RSVPSection guests={mockInvitationData.guests} />
          <ConfirmationCard confirmation={mockInvitationData.confirmation} />
        </article>
      </div>
    </main>
  )
}

export default InvitationPage