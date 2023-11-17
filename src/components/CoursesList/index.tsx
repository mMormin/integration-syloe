import Course from '../Course';
import courses from '../../data';

function CoursesList() {
  return (
    <ul className="container">
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </ul>
  );
}

export default CoursesList;
