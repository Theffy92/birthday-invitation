import SectionTitle from "./SectionTitle"

function RSVPSection({ guests, onGuestToggle, declineLabel, onDecline, isSingleGuest }) {
  return (
    <section className="space-y-4">
      <SectionTitle>rsvp</SectionTitle>

      <div className="rounded-2xl border border-fuchsia-500/80 bg-violet-950/50 p-4 shadow-[0_0_40px_rgba(236,72,153,0.25)]">
        <p className="text-sm font-semibold text-violet-100">¿Quiénes vienen?</p>

        <div className="mt-3 space-y-3">
          <button
            type="button"
            onClick={onDecline}
            className="w-full rounded-full border border-rose-400/50 bg-rose-950/30 px-4 py-3 text-sm font-semibold text-rose-200"
          >
            {declineLabel}
          </button>
          {!isSingleGuest && (
            <>
              <p className="mt-4 text-sm font-semibold text-violet-100">
                ¿Quiénes vienen?
              </p>

            <div className="mt-3 space-y-3">
            {guests.map((guest) => (
              <label
                key={guest.id}
                className="flex items-center justify-between rounded-lg border border-violet-500/40 bg-violet-950/60 px-3 py-2 text-sm text-violet-50"
              >
                  <span>{guest.name}</span>

                  <input
                    type="checkbox"
                    checked={guest.attending}
                    onChange={() => onGuestToggle(guest.id)}
                    className="h-4 w-4 accent-fuchsia-500"
                  />
                </label>
              ))}
            </div>
          </>
        )}
        </div>

        <p className="mt-3 text-center text-[11px] text-violet-300/80">
          Podés volver a este enlace para actualizar tu respuesta en cualquier momento.
        </p>
      </div>
    </section>
  )
}

export default RSVPSection
