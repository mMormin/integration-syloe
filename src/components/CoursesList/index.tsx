import Course from '../Course';
import courses from '../../data';

function CoursesList() {
  return (
    <ul className="w-full absolute md:relative top-custom md:top-inherit md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 md:h-full md:p-8 md:items-center">
      {courses.map((course, index) => (
        <Course key={course.id} course={course} topOffset={index + 1} />
      ))}
    </ul>
  );
}

export default CoursesList;
