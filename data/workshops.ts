export interface Workshop {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  outcomes: string[];
  idealFor: string;
  featured?: boolean;
}

export const workshops: Workshop[] = [
  {
    slug: 'strong-from-the-inside-out',
    title: 'Strong From the Inside Out™',
    tagline: 'Build resilience, manage stress, and gain confidence that sticks.',
    description: 'A hands-on workshop that equips participants to understand how stress impacts their body and mind, learn practical tools to regulate emotions and stay grounded, build confidence, resilience, and focus, and apply strategies immediately for real-life impact.',
    outcomes: [
      'Understand how stress impacts their body and mind',
      'Learn practical tools to regulate emotions and stay grounded',
      'Build confidence, resilience, and focus',
      'Apply strategies immediately for real-life impact',
    ],
    idealFor: 'Teams, caregivers, high-performing women, and leaders',
    featured: true,
  },
  {
    slug: 'confident-and-unshakable',
    title: 'Confident & Unshakable™',
    tagline: 'Step fully into your voice, boundaries, and personal power.',
    description: 'Empowers participants to step into their voice and leadership, build confidence from the inside out, and navigate professional and personal challenges with clarity and strength.',
    outcomes: [
      'Step into their voice and leadership',
      'Build confidence from the inside out',
      'Navigate professional and personal challenges with clarity and strength',
      'Set and maintain healthy boundaries',
      'Overcome self-doubt and imposter syndrome',
    ],
    idealFor: 'Women in leadership, teams navigating change, individuals seeking personal growth',
    featured: false,
  },
  {
    slug: 'sleep-for-a-stronger-you',
    title: 'Sleep for a Stronger You™',
    tagline: 'Restore energy, calm the nervous system, and improve focus.',
    description: 'Helps teams and individuals relax and restore energy, release tension and stress, and build simple, effective sleep rituals.',
    outcomes: [
      'Relax and restore energy',
      'Release tension and stress',
      'Build simple, effective sleep rituals',
      'Understand the connection between sleep and performance',
      'Create sustainable habits for better rest',
    ],
    idealFor: 'High-stress teams, caregivers, anyone struggling with sleep or burnout',
    featured: false,
  },
  {
    slug: 'thriving-through-change',
    title: 'Thriving Through Change™',
    tagline: 'Navigate transitions with strength and clarity.',
    description: 'Guides participants to navigate transitions and uncertainty with resilience, build practical strategies to manage stress, and create stronger team dynamics during change.',
    outcomes: [
      'Navigate transitions and uncertainty with resilience',
      'Build practical strategies to manage stress during change',
      'Create stronger team dynamics during organizational shifts',
      'Maintain focus and productivity through disruption',
      'Turn change into opportunity',
    ],
    idealFor: 'Teams undergoing restructuring, organizations in transition, individuals facing major life changes',
    featured: false,
  },
  {
    slug: 'wellness-for-caregivers',
    title: 'Wellness for Caregivers™',
    tagline: 'Prevent burnout, strengthen boundaries, and sustain energy.',
    description: 'Supports caregivers to sustain energy and emotional balance, avoid burnout, and strengthen boundaries and resilience.',
    outcomes: [
      'Sustain energy and emotional balance',
      'Avoid burnout before it happens',
      'Strengthen boundaries and learn to say no',
      'Build resilience for the long haul',
      'Find support and community',
    ],
    idealFor: 'Foster parents, healthcare workers, family caregivers, social workers, anyone in a caregiving role',
    featured: false,
  },
];
