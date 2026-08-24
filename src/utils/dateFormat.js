function formatDate(dateString) {
    if (!dateString) return ""

    const normalizedDate = String(dateString).slice(0, 10)
    const [year, month, day] = normalizedDate.split("-")

    if (!year || !month || !day) return ""

    return `${day}/${month}/${year}`
}

function formatDateWithWeekday(dateString) {
    if (!dateString) return ""

    const normalizedDate = String(dateString).slice(0, 10)
    const [year, month, day] = normalizedDate.split("-")

    if (!year || !month || !day) return ""

    const weekday = new Intl.DateTimeFormat("es-AR", {
        weekday: "long",
        timeZone: "UTC",
    }).format(new Date(`${normalizedDate}T00:00:00Z`))

    return `${weekday.charAt(0).toUpperCase()}${weekday.slice(1)} ${day}/${month}/${year}`
}

export { formatDate, formatDateWithWeekday }