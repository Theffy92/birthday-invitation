export const mockInvitationData = {
  celebrant: "Theffy",
  inviteesLine: "Bonnie, Damon & Penny",
  hero: {
    title: "Cumple de Theffy",
    subtitle: "Nos vemos en Corrientes!",
    note: "The Scrapbook Edition",
    description:
      "Voy a estar celebrando mi cumple N° 24(+10) 👀 en Corrientes.",
    postcardTitle: "Ni idea qué poner acá",
    postcardDate: "19 de Septiembre de 2026",
  },
  eventDetails: [
    {
      label: "Date",
      value: "Sábado, 19 de Septiembre, 2026",
    },
    {
      label: "Time",
      value: "21:00",
    },
    {
      label: "Location",
      value: "Calle Falsa 123, Corrientes, Argentina",
    },
  ],
  rsvpDeadline: "Por favor, confirmá tu asistencia antes del 13 de septiembre.",
  contribution: {
    title: "A la canasta",
    description:
      "La celebración será a la canasta. Traé algo rico para de beber y comer para compartir y pasar una noche tranqui juntos.",
    idea: "Tip: La bebida es mucho muy importante (ej: Alcohol o coca para el Fernet), picadas, ensaladas o postres.",
    prompt: "¿Qué tienen pensado traer?",
    placeholder: "Ej: empanadas, ensalada, torta, bebidas...",
  },
  guests: [
    {id: "guest-1", name: "Bonnie", attending: true },
    {id: "guest-2", name: "Damon", attending: true },
    {id: "guest-3", name: "Penny", attending: false },
  ],
  confirmation: {
    title: "Confirmado",
    summary: "Bonnie & Damon asisten a la fiesta",
    contribution: "Traen: Empanadas & Fernet",
  },
}
