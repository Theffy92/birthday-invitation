import SectionTitle from "./SectionTitle"

function EventDetailsSection({ details, rsvpDeadline }) {
  return (
    <section className="space-y-4">
      <SectionTitle>the details</SectionTitle>

      <div className="grid gap-4 rounded-2xl border border-violet-500/70 bg-violet-950/40 p-4 shadow-[0_0_35px_rgba(147,51,234,0.25)] sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-violet-500/20">
        {details.map((detail) => (
          <article key={detail.label} className="px-3 py-1 text-center sm:text-left">
            <p className="text-[11px] uppercase tracking-[0.16em] text-violet-300">{detail.label}</p>
            <p className="mt-2 text-sm font-semibold uppercase leading-snug text-violet-50">{detail.value}</p>
          </article>
        ))}
      </div>

      <p className="rounded-full border border-fuchsia-500/70 px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-wide text-fuchsia-300">
        {rsvpDeadline} - veni a festejar!
      </p>
    </section>
  )
}

export default EventDetailsSection
