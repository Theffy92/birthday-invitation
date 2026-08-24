function DeclineStatusCard({ isSingleGuest, onEdit}) {
    return (
        <section className="rounded-2xl border border-rose-400/50 bg-rose-950/30 p-4 text-rose-100 shadow-[0_0_28px_rgba(251,113,133,0.15)]">
            <p className="text-sm font-semibold uppercase tracking-wide text-rose-300">
                Respuesta registrada
            </p>

            <p className="mt-2 text-base font-semibold">
                {isSingleGuest
                    ? "Ya nos avisaste que no vas a poder asistir."
                    : "Ya nos avisaron que no van a poder asistir."}
            </p>

            <p className="mt-2 text-sm text-rose-100/70">
                {isSingleGuest
                    ? "Si cambian tus planes, podés actualizar la información."
                    : "Si cambian sus planes, pueden actualizar la información."
                }
            </p>

            <button
                type="button"
                onClick={onEdit}
                className="mt-4 text-sm font-semibold text-rose-200 underline transition hover:text-white"
            >
                Actualizar información
            </button>
        </section>
    )
}

export default DeclineStatusCard