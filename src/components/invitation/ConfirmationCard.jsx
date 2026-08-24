import { getInvitationWording } from "../../utils/invitationWording"
function ConfirmationCard({ guests, contribution, onEdit}) {
  const guestNames = guests.map((guest) => guest.name).join(", ")
  const wording = getInvitationWording(guests.length)

  return (
    <section className="rounded-2xl border border-emerald-400/60 bg-emerald-950/45 p-4 text-emerald-100 shadow-[0_0_32px_rgba(16,185,129,0.25)]">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
        Confirmado
      </p>
      <p className="mt-2 text-base font-semibold">
        {guests.length === 1
          ? `${guestNames} asiste a la fiesta`
          : `${guestNames} asisten a la fiesta`}
      </p>

      {contribution && (
        <p className="mt-3 text-sm text-emerald-100/90">
          
          {guests.length === 1
            ? wording.contributionCofirmation + ": " + `${contribution}`
            : wording.contributionCofirmation + ": " + `${contribution}`
          } 
        </p>
      )}

      <button 
        type="button" 
        onClick={onEdit}
        className="mt-4 text-sm font-semibold text-emerald-200 underline"
      >
        Actualizar información
      </button>
    </section>
  )
}

export default ConfirmationCard
