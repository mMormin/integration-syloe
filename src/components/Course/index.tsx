import { CourseT } from '../../@types';
import './index.scss';

type CourseProps = {
  course: CourseT;
  topOffset: number;
};

function Course({ course, topOffset }: CourseProps) {
  return (
    <li
      className={`course bg-${course.color}`}
      style={{
        top: `calc(14.5rem * ${topOffset})`,
        zIndex: `calc(10 - ${topOffset})`,
      }}
    >
      <div className="course-header">
        <span className="course-header__date">{course.date}</span>
        <h3 className="course-header__title">{course.title}</h3>
      </div>

      <div className="course-entrants">
        <div className="entrants-pictures">
          <img alt="Participant aléatoire" src="https://i.pravatar.cc/300" />
          <img
            alt="Deuxiéme participant aléatoire"
            src="https://i.pravatar.cc/300"
          />
        </div>
        <p className="entrants__labels">join Marie, John & 10 others</p>
      </div>
    </li>
  );
}

export default Course;
