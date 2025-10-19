export interface CTAButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

export interface HeroPattern {
  id: 'A' | 'B' | 'C';
  headline: string;
  subheadline: string;
}

export interface Feature {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface Portfolio {
  id: string;
  title: string;
  description: string;
  duration: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}