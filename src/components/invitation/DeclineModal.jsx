function DeclineModal({ message, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
            <div className="w-full max-w-sm rounded-2xl border border-violet-400/40 bg-[#0a0618] p-6 text-center shadow-[0_0_40px_rgba(124,58,237,0.35)]">
                <p className="text-base leading-relaxed text-violet-100">
                    {message}
                </p>

                <button
                    type="button"
                    onClick={onClose}
                    className="mt-5 rounded-full border border-violet-400/60 px-5 py-2 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/10"
                >
                    Cerrar
                </button>
            </div>
        </div>
    )
}

export default DeclineModal