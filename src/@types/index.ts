export type CourseT = {
  id: number;
  date: string;
  title: string;
  slug: string;
  color: string;
  thumbnail: string;
  entrants: EntrantsT[];
};

export type EntrantsT = {
  id: number;
  name: string;
};

export type NavbarLinkT = {
  icon: JSX.Element;
  text: string;
};
