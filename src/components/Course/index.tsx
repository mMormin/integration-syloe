import { CourseT } from '../../@types';
import './index.scss';

type CourseProps = {
  course: CourseT;
  topOffset: number;
};

function Course({ course, topOffset }: CourseProps) {
  const top = `calc(13rem * ${topOffset})`;
  const zIndex = `calc(10 - ${topOffset})`;

  return (
    <li
      className={`course text-white w-full bg-${course.color}`}
      style={{ top, zIndex }}
    >
      <div className="course-header">
        <span className="course-header__date uppercase font-extralight">
          {course.date}
        </span>
        <h3 className="course-header__title font-bold h-15 flex items-center">
          {course.title}
        </h3>
      </div>

      <div className="course-entrants mt-6 flex items-center h-10">
        <div className="entrants-pictures relative flex w-14 h-9">
          <img
            alt="Participant aléatoire"
            className="absolute h-9 w-9 rounded-full z-10"
            src="https://i.pravatar.cc/300"
          />
          <img
            alt="Deuxiéme participant aléatoire"
            className="absolute h-9 w-9 rounded-full z-5 left-4"
            src="https://i.pravatar.cc/300"
          />
        </div>
        <p className="italic font-extralight tracking-wider ml-2">
          join Marie, John & 10 others
        </p>
      </div>
    </li>
  );
}

export default Course;
