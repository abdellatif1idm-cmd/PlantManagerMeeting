export interface ProgrammeCardTypes {
  time: string;
  title: string;
  subTitles?: string[] | null;
  activities?: string[] | null;
}

// A day’s programme
export interface DayProgramme {
  dayDate: string;
  programme: ProgrammeCardTypes[];
}

// Full programme list (can scale with multiple days)
export interface ProgrammeList {
  day1: DayProgramme;
  day2?: DayProgramme | null;
  day3?: DayProgramme | null;
}
