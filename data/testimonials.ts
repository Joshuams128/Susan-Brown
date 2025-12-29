export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Coming to a training and actually being able to relax instead of feeling overwhelmed was exactly what I needed. This session gave me space to breathe and reset.",
    author: "Foster Parent",
    role: "Ontario",
  },
  {
    id: 2,
    quote: "This training was extremely relevant and timely for me. It helped me recognize how much I needed to prioritize my emotional wellbeing as a foster parent.",
    author: "Workshop Participant",
  },
  {
    id: 3,
    quote: "The session was clear, practical, and very easy to follow. Everything was explained in a way that made it simple to apply immediately.",
    author: "Frontline Caregiver",
  },
  {
    id: 4,
    quote: "The grounding and breathing tools were powerful and easy to use. I've already started using them in my daily routine.",
    author: "Foster Parent",
    role: "Ontario",
  },
  {
    id: 5,
    quote: "Having a presenter who truly understands the foster care system made a huge difference. I felt seen and understood throughout the training.",
    author: "Workshop Participant",
  },
  {
    id: 6,
    quote: "Being able to reflect and share with other foster parents in a supportive space was one of the most valuable parts of the session.",
    author: "Frontline Caregiver",
  },
];
