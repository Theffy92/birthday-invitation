function ConfirmationCard({ guests, contribution, onEdit }) {
  const guestNames = guests.map((guest) => guest.name).join(", ")

  return (
    <section className="rounded-2xl border border-emerald-400/60 bg-emerald-950/45 p-4 text-emerald-100 shadow-[0_0_32px_rgba(16,185,129,0.25)]">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
        Confirmado
      </p>
      <p className="mt-2 text-base font-semibold">
        {guests.length > 1
          ? `${guestNames} asisten a la fiesta`
          : guests.length === 1
            ? `${guestNames} asiste a la fiesta`
            : "Nadie del grupo podrá asistir"
        }
      </p>
      {contribution && (
        <p className="mt-3 text-sm text-emerald-100/90">
          Traen: {contribution}
        </p>
      )}

      <button 
        type="button" 
        onClick={onEdit}
        className="mt-4 text-sm font-semibold text-emerald-200 underline"
      >
        Actualizar confirmación 
      </button>
    </section>
  )
}

export default ConfirmationCard
