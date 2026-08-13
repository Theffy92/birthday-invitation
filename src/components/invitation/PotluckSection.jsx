function PotluckSection({ contribution }) {
  return (
    <section className="grid gap-4 sm:grid-cols-2">
      <article className="-rotate-1 rounded-sm bg-amber-50 p-5 text-zinc-900 shadow-[0_12px_30px_rgba(10,2,20,0.7)]">
        <p className="text-2xl font-semibold italic text-violet-700">{contribution.title}</p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-700">{contribution.description}</p>
        <p className="mt-4 text-xs font-semibold italic text-fuchsia-600">{contribution.idea}</p>
      </article>

      <article className="rounded-2xl border border-violet-500/80 bg-violet-950/40 p-4 shadow-[0_0_28px_rgba(147,51,234,0.2)]">
        <p className="text-sm font-semibold text-violet-100">{contribution.prompt}</p>
        <div className="mt-3 rounded-xl border border-violet-500/40 bg-violet-950/60 p-3 text-sm text-violet-300/80">
          {contribution.placeholder}
        </div>
      </article>
    </section>
  )
}

export default PotluckSection
