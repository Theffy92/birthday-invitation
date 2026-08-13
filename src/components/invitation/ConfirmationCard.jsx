function ConfirmationCard({ confirmation }) {
  return (
    <section className="rounded-2xl border border-emerald-400/60 bg-emerald-950/45 p-4 text-emerald-100 shadow-[0_0_32px_rgba(16,185,129,0.25)]">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
        {confirmation.title}
      </p>
      <p className="mt-2 text-base font-semibold">{confirmation.summary}</p>
      <p className="mt-3 text-sm text-emerald-100/90">{confirmation.contribution}</p>
      <button type="button" className="mt-4 text-sm font-semibold text-emerald-200 underline">
        Actualizar RSVP / Añadir invitado
      </button>
    </section>
  )
}

export default ConfirmationCard
