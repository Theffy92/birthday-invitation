import { getInvitationWording } from "../../utils/invitationWording"
import theffyImage from "../../assets/theffy.jpeg"
import argentinaFlag from "../../assets/decorations/argentina-flag.webp"
import purpleTape from "../../assets/decorations/purple_tape.webp"
import sparkles from "../../assets/decorations/y2k_sparkles.webp"
import heart from "../../assets/decorations/y2k_heart.webp"

function HeroSection({ celebrant, inviteesLine, hero, guestCount }) {
  const invitationWording = getInvitationWording(guestCount)
  return (
    <section className="relative space-y-8">
      <div className="pointer-events-none absolute -left-2 -top-4 z-20 rotate-[-8deg] sm:-left-5 sm:-top-6"
            aria-hidden="true"
      >
        <div className="bg-zinc-100 p-1.5 shadow-[0_8px_20px_rgba(0,0,0,0.45)] sm:p-2">
          <img 
            src={argentinaFlag} 
            alt="" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="block w-16 sm:w-24" 
          />
          <img
            src={purpleTape}
            alt=""
            className="absolute -left-5 -top-3 w-16 rotate-[-18deg] opacity-80"
          />
        </div>
      </div>
      <img 
        src={sparkles}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        className="pointer-events-none absolute right-2 top-24 z-10 w-14 opacity-80 sm:right-8 sm:top-28 sm:w-20"
      />

      <header className="space-y-5 text-center">
        <div className="space-y-1 text-xs text-violet-200/80">
          <p>{inviteesLine}</p>
          <p>{invitationWording.invitationHeader}</p>
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
        <div className="relative mx-auto w-full max-w-sm -rotate-2 rounded-sm bg-zinc-100 p-3 text-zinc-900 shadow-[0_12px_30px_rgba(10,2,20,0.7)]">
          <img 
            src={purpleTape}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-5 -top-4 z-20 w-20 rotate-12 opacity-75 sm:w-24"
          />
          <img
            src={theffyImage}
            alt={`Photo of ${celebrant}`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-44 w-full rounded-xs object-cover"
          />
          <p className="mt-2 text-center text-sm font-medium">
            {hero.postcardTitle} * {hero.postcardDate}
          </p>
          <img
            src={heart}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-4 right-3 z-10 w-10 rotate-12 opacity-90 sm:hidden"
          />
        </div>
        <div className="relative space-y-2 text-center sm:text-left">
          <img 
            src={heart}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 -top-9 hidden w-14 rotate-12 opacity-90 sm:block"
          />
          <p className="text-lg font-semibold italic text-cyan-300">{hero.note}</p>
          <p className="text-sm leading-relaxed text-violet-100/80">{hero.description}</p>
        </div>
      </div>

      {/* <p className="text-center text-xl text-fuchsia-400 drop-shadow-[0_0_18px_rgba(232,121,249,0.9)]">&lt;3</p> */}
      <p className="sr-only">Birthday invitation for {celebrant}</p>
    </section>
  )
}

export default HeroSection
