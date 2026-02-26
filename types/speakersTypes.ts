export interface Speaker {
  id: number;
  name: string;
  function: string;
  company: string;
  bio: string;
  image: string;
  industry: string[];
  country: string;
}

export interface SpeakersData {
  EventSpeakersTitle: string;
  EventSpeakersDescription: string;
  EventSpeakersList: Speaker[];
}