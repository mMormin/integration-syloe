import Course from '../Course';
import courses from '../../data';

function CoursesList() {
  return (
    <ul className="container">
      {courses.map((course, index) => (
        <Course key={course.id} course={course} topOffset={index + 1} />
      ))}
    </ul>
  );
}

export default CoursesList;
