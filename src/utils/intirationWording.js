export function getInvitationWording(guestCount) {
    const isSingleGuest = guestCount === 1

    return {
        contributionPrompt: isSingleGuest
            ? "¿Qué tenés pensado traer?"
            : "¿Qué tienen pensado traer?",

        declineLabel: isSingleGuest
            ? "No podré asistir"
            : "No podremos asistir",

        declineMessage: isSingleGuest
            ? "Muchas gracias por avisar, y lamento que no puedas venir."
            : "Muchas gracias por avisar, y lamento que no puedan venir.",

        confirmLabel: "Confirmar asistencia",
    }
}