import SectionTitle from "./SectionTitle"
import { formatDate } from "../../utils/dateFormat"

function RSVPSection({
  guests,
  onGuestToggle,
  declineLabel,
  onDecline,
  isSingleGuest,
  rsvpDeadline,
}) {
  return (
    <section className="space-y-4">
      <SectionTitle>rsvp</SectionTitle>
      <p className="rounded-full border border-fuchsia-500/70 px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-wide text-fuchsia-300">
        Confirmar asistencia para el {formatDate(rsvpDeadline)} 
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
                onClick={onDecline}
                className="w-full rounded-full border border-rose-400/50 bg-rose-950/30 px-4 py-3 text-sm font-semibold text-rose-200"
              >
                {declineLabel}
              </button>

              <label className="flex items-center justify-between rounded-lg border border-violet-500/40 bg-violet-950/60 px-3 py-2 text-sm text-violet-50">
                <span>Sí</span>

                <input
                  type="checkbox"
                  checked={guests[0]?.attending === true}
                  onChange={() => onGuestToggle(guests[0].id)}
                  className="h-4 w-4 accent-fuchsia-500"
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
                className="w-full rounded-full border border-rose-400/50 bg-rose-950/30 px-4 py-3 text-sm font-semibold text-rose-200"
              >
                {declineLabel}
              </button>

              {guests.map((guest) => (
                <label
                  key={guest.id}
                  className="flex items-center justify-between rounded-lg border border-violet-500/40 bg-violet-950/60 px-3 py-2 text-sm text-violet-50"
                >
                  <span>{guest.name}</span>

                  <input
                    type="checkbox"
                    checked={guest.attending === true}
                    onChange={() => onGuestToggle(guest.id)}
                    className="h-4 w-4 accent-fuchsia-500"
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