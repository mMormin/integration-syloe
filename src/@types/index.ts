export interface CourseT {
  id: number;
  date: string;
  title: string;
  slug: string;
  color: string;
  thumbnail: string;
  entrants: EntrantsT[];
}

export interface EntrantsT {
  id: number;
  name: string;
}
