function formatDate(dateString) {
    if (!dateString) return ""

    const normalizedDate = String(dateString).slice(0, 10)
    const [year, month, day] = normalizedDate.split("-")

    if (!year || !month || !day) return ""

    return `${day}/${month}/${year}`
}

export { formatDate }