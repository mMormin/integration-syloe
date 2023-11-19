import Course from '../Course';
import courses from '../../data';

function CoursesList() {
  return (
    <ul className="container absolute">
      {courses.map((course, index) => (
        <Course key={course.id} course={course} topOffset={index + 1} />
      ))}
    </ul>
  );
}

export default CoursesList;
