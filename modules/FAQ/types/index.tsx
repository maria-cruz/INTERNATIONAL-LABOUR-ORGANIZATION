export interface FaqsProps {
  unit?: string;
  title?: string;
  topics: Topic[];
}

export interface Topic {
  faqs: Faq[];
  title?: string;
  id: number;
}

export interface Faq {
  question: string;
  answer: string;
}
