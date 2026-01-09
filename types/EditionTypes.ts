
export type EditionTypes = {
  id: number;
  topic: string;
  description: string;
  videoUrl: string;
  date: string; // ISO date string (YYYY-MM-DD)
  attendees: number;
  location: string;
  gallery: string[];
};
