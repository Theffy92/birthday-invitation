import SectionTitle from "./SectionTitle"
import { formatDate } from "../../utils/dateFormat"
import { getInvitationWording } from "../../utils/invitationWording"

function RSVPSection({
  guests,
  onGuestToggle,
  declineLabel,
  onDecline,
  isSingleGuest,
  rsvpDeadline,
  disabled,
}) {
  const wording = getInvitationWording(guests.length)
  return (
    <section className="space-y-4">
      <SectionTitle>rsvp</SectionTitle>
      <p className="rounded-full border border-fuchsia-500/70 px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-wide text-fuchsia-300">
        {wording.confirmationDeadline} {formatDate(rsvpDeadline)} 
      </p>

      <div className="rounded-2xl border border-fuchsia-500/80 bg-violet-950/50 p-4 shadow-[0_0_40px_rgba(236,72,153,0.25)]">
        {isSingleGuest ? (
          <>
            <p className="text-sm font-semibold text-violet-100">
              ¿Venís?
            </p>

            <div className="mt-3 space-y-3">
              <button
                type="button"
                disabled={disabled}
                onClick={onDecline}
                className="
                  w-full cursor-pointer rounded-full 
                  border border-rose-400/50 
                  bg-rose-950/30 
                  px-4 py-3 
                  text-sm font-semibold text-rose-200 
                  transition-all duration-200 
                  hover:border-rose-400 
                  hover:bg-rose-500/20 
                  hover:text-rose-100 hover:shadow-[0_0_18px_rgba(251,113,133,0.25)] 
                  active:scale-[0.98] 
                  active:border-rose-300 
                  active:bg-rose-500/30 
                  active:text-white
                  disabled:cursor-not-allowed
                  disabled:border-violer-400/20
                  disabled:bg-violet-950/20
                  disabled:text-violet-300/40
                  disabled:shadow-none
                  disabled:hover:border-violet-400/20
                  disabled:hover:bg-violet-950/20
                  disabled:hover:text-violet-300/40
                "
              >
                {declineLabel}
              </button>

              <label className="flex cursor-pointer items-center justify-between rounded-lg border border-violet-500/40 bg-violet-950/60 px-3 py-2 text-sm text-violet-50 transition-all duration-200 hover:border-fuchsia-400/70 hover:bg-violet-900/70 active:scale-[0.99] active:border-fuchsia-400 active:bg-violet-900 has-[input:disabled]:cursor-not-allowed has-[input:disabled]:opacity-50">
                <span>Sí</span>

                <input
                  type="checkbox"
                  checked={guests[0]?.attending === true}
                  onChange={() => onGuestToggle(guests[0].id)}
                  disabled={disabled}
                  className="h-4 w-4 accent-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </label>
            </div>
          </>
        ) : (
          <>
            <p className="text-sm font-semibold text-violet-100">
              ¿Quiénes vienen?
            </p>

            <div className="mt-3 space-y-3">
              <button
                type="button"
                onClick={onDecline}
                disabled={disabled}
                className="
                  w-full cursor-pointer rounded-full 
                  border border-rose-400/50 
                  bg-rose-950/30 
                  px-4 py-3 
                  text-sm font-semibold text-rose-200 
                  transition-all duration-200 
                  hover:border-rose-400 
                  hover:bg-rose-500/20 
                  hover:text-rose-100 hover:shadow-[0_0_18px_rgba(251,113,133,0.25)] 
                  active:scale-[0.98] 
                  active:border-rose-300 
                  active:bg-rose-500/30 
                  active:text-white
                  disabled:cursor-not-allowed
                  disabled:border-violer-400/20
                  disabled:bg-violet-950/20
                  disabled:text-violet-300/40
                  disabled:shadow-none
                  disabled:hover:border-violet-400/20
                  disabled:hover:bg-violet-950/20
                  disabled:hover:text-violet-300/40
                "
              >
                {declineLabel}
              </button>

              {guests.map((guest) => (
                <label
                  key={guest.id}
                  className="flex cursor-pointer items-center justify-between rounded-lg border border-violet-500/40 bg-violet-950/60 px-3 py-2 text-sm text-violet-50 transition-all duration-200 hover:border-fuchsia-400/70 hover:bg-violet-900/70 active:scale-[0.99] active:border-fuchsia-400 active:bg-violet-900 has-[input:disabled]:cursor-not-allowed has-[input:disabled]:opacity-50"
                >
                  <span>{guest.name}</span>

                  <input
                    type="checkbox"
                    checked={guest.attending === true}
                    onChange={() => onGuestToggle(guest.id)}
                    disabled={disabled}
                    className="h-4 w-4 accent-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </label>
              ))}
            </div>
          </>
        )}

        <p className="mt-3 text-center text-[11px] text-violet-300/80">
          Podés volver a este enlace para actualizar tu respuesta en cualquier momento.
        </p>
      </div>
    </section>
  )
}

export default RSVPSection