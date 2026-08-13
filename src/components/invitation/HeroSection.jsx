function HeroSection({ celebrant, inviteesLine, hero }) {
  return (
    <section className="space-y-8">
      <header className="space-y-5 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-violet-300/90">hey &lt;3</p>
        <div className="space-y-1 text-xs text-violet-200/80">
          <p>{inviteesLine}</p>
          <p>you&apos;re invited to</p>
        </div>
        <div className="mx-auto max-w-xl border-y border-violet-500/60 py-5">
          <h1 className="text-3xl font-black uppercase tracking-wide text-violet-100 drop-shadow-[0_0_16px_rgba(217,70,239,0.6)] sm:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-3 text-3xl font-semibold italic text-fuchsia-400 drop-shadow-[0_0_14px_rgba(236,72,153,0.8)] sm:text-5xl">
            {hero.subtitle}
          </p>
        </div>
      </header>

      <div className="grid gap-5 sm:grid-cols-[1.15fr_1fr] sm:items-center">
        <div className="mx-auto w-full max-w-sm -rotate-2 rounded-sm bg-zinc-100 p-3 text-zinc-900 shadow-[0_12px_30px_rgba(10,2,20,0.7)]">
          <div className="h-44 rounded-xs bg-gradient-to-br from-amber-700 via-orange-500 to-fuchsia-700" />
          <p className="mt-2 text-center text-sm font-medium">
            {hero.postcardTitle} * {hero.postcardDate}
          </p>
        </div>
        <div className="space-y-2 text-center sm:text-left">
          <p className="text-lg font-semibold italic text-cyan-300">{hero.note}</p>
          <p className="text-sm leading-relaxed text-violet-100/80">{hero.description}</p>
        </div>
      </div>

      <p className="text-center text-xl text-fuchsia-400 drop-shadow-[0_0_18px_rgba(232,121,249,0.9)]">&lt;3</p>
      <p className="sr-only">Birthday invitation for {celebrant}</p>
    </section>
  )
}

export default HeroSection
