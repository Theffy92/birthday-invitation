function SectionTitle({ children }) {
  return (
    <h2 className="flex items-center justify-center gap-2 text-center text-sm font-bold uppercase tracking-[0.18em] text-violet-100">
      <span className="text-fuchsia-400">*</span>
      {children}
      <span className="text-fuchsia-400">*</span>
    </h2>
  )
}

export default SectionTitle
