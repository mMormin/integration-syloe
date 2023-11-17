import { CourseT } from '../../@types';
import Course from '../Course';

type CoursesListProps = {
  courses: CourseT[];
};

function CoursesList({ courses }: CoursesListProps) {
  return (
    <ul className="container">
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </ul>
  );
}

export default CoursesList;
