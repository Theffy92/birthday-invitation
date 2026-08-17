# Birthday Invitation Database Schema

## Goal

Support one birthday event with multiple personalized invitations.

Each invitation may include one or more invited guests. For the current project, most invitations will have between 1 and 8 guests.

Each invited guest can independently confirm whether they are attending.

If at least one guest is attending, the invited party must provide what they plan to bring for the "a la canasta" celebration.

Each invitation will eventually be accessed through a unique, hard-to-guess URL token.

---

## Relationships

Event
  └── has many Invitations
        ├── has many Guests
        └── has one Response

Example:

Birthday Event
  ├── Invitation A
  │     ├── Kat
  │     ├── Tomás
  │     └── Penny
  │
  ├── Invitation B
  │     └── Lucía
  │
  └── Invitation C
        ├── Guest 1
        ├── Guest 2
        ├── Guest 3
        └── etc.

---

## events

Represents the birthday celebration itself.

Columns:

- id: uuid, primary key
- celebrant: text, required
- title: text, required
- subtitle: text, optional
- description: text, optional
- event_date: date, required
- event_time: time, required
- address: text, required
- rsvp_deadline: date, required
- contribution_required: boolean, required, default true
- contribution_title: text, required
- contribution_description: text, optional
- created_at: timestamptz, required

---

## invitations

Represents one personalized invitation sent to one person, couple, family, or household.

Columns:

- id: uuid, primary key
- event_id: uuid, required, foreign key to events.id
- token: text, required, unique
- display_name: text, required
- created_at: timestamptz, required

Example display_name:

Kat, Tomás & Penny

The token will eventually be used in URLs such as:

/invite/x7Qp9Lm2

Names should not be included in the URL.

---

## guests

Represents each individual person included in a personalized invitation.

Columns:

- id: uuid, primary key
- invitation_id: uuid, required, foreign key to invitations.id
- name: text, required
- attending: boolean, nullable
- created_at: timestamptz, required

Attendance states:

- null = has not responded yet
- true = attending
- false = not attending

Each invitation may contain multiple guest records.

### Dynamic invitation wording

The UI must adapt singular/plural wording based on the number of guests attached to the invitation.

Examples:

- 1 guest:
  - "¿Qué tenés pensado traer?"
  - "No voy a poder asistir"
  - "Muchas gracias por avisar, y lamento que no puedas venir."

- 2 or more guests:
  - "¿Qué tienen pensado traer?"
  - "Ninguno de nosotros podrá asistir"
  - "Muchas gracias por avisar, y lamento que no puedan venir."

The wording should be derived from invitation guest count rather than stored as separate database fields.

---

## responses
A response where every guest has attending = false represents an explicit "nobody is attending" response.

No separate boolean column is required for this state because it can be derived from the guest attendance records.

Represents invitation-level response information.

Columns:

- id: uuid, primary key
- invitation_id: uuid, required, unique, foreign key to invitations.id
- contribution: text, nullable
- submitted_at: timestamptz, nullable
- updated_at: timestamptz, nullable

There should be at most one response per invitation.

If at least one guest is attending and the event requires a contribution, contribution must contain a non-empty value.

If nobody is attending, contribution may be null.

---

## Important Rules

1. One event may have many invitations.
2. One invitation belongs to exactly one event.
3. One invitation contains one or more guests.
4. Each guest belongs to exactly one invitation.
5. Each guest has their own attendance status.
6. The invitation must provide an explicit "nobody is attending" control above the individual guest names.
7. The label for this control must adapt to singular/plural wording based on the invitation guest count.
8. Selecting "nobody is attending" sets every guest's attending status to false.
9. Selecting "nobody is attending" clears any contribution text and keeps the contribution field disabled.
10. After selecting "nobody is attending," the UI should show a short acknowledgment message whose wording adapts to singular/plural guest count.
11. One invitation has at most one response.
12. Contribution belongs to the invitation/party, not to individual guests.
13. Contribution is required when at least one guest is attending.
14. Contribution must be empty/null when nobody is attending.
15. Invitation tokens must be unique and difficult to guess.