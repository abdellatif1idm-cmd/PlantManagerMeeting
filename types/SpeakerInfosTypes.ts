// types/speaker.ts

export interface SpeakerInfos {
  id: number;
  firstName: string;
  lastName: string;
  description: string;
  company: string;
  image: string;
  passageType: "Keynote" | "Panel" | string;
  passageDate: string;
  passageTime: string;
  passageSubject: string;
}
