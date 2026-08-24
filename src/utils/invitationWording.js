export function getInvitationWording(guestCount) {
    const isSingleGuest = guestCount === 1

    return {
        invitationHeader: isSingleGuest
            ? "Te invito a celebrar"
            : "Les invito a celebrar",

        contributionPrompt: isSingleGuest
            ? "¿Qué tenés pensado traer?"
            : "¿Qué tienen pensado traer?",

        declineLabel: isSingleGuest
            ? "No podré asistir"
            : "No podremos asistir",

        declineMessage: isSingleGuest
            ? "Muchas gracias por avisar, y lamento que no puedas venir. 😔"
            : "Muchas gracias por avisar, y lamento que no puedan venir. 😔",
        
        potluckLabel: isSingleGuest
            ? "Confirmá tu asistencia para poder completar esta sección"
            : "Confirmá al menos una persona para poder completar esta sección",

        confirmLabel: "Confirmar asistencia",
        confirmationDeadline: isSingleGuest
            ? "Tenés tiempo para confirmar hasta el"
            : "Tienen tiempo para confirmar hasta el",
        contributionCofirmation: isSingleGuest
            ? "Trae"
            : "Traen",
    }
}