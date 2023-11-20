import {
  GiMeditation,
  GiBookshelf,
  GiMicrophone,
  GiMaterialsScience,
  GiPhotoCamera,
  GiBackup,
} from 'react-icons/gi';
import { CourseT } from '../../@types';
import './index.scss';

type CourseProps = {
  course: CourseT;
  topOffset: number;
};

function Course({ course, topOffset }: CourseProps) {
  const top = `calc(14rem * ${topOffset})`;
  const zIndex = `calc(10 - ${topOffset})`;

  let IconComponent;

  switch (course.iconName) {
    case 'GiMeditation':
      IconComponent = GiMeditation;
      break;
    case 'GiBookshelf':
      IconComponent = GiBookshelf;
      break;
    case 'GiMicrophone':
      IconComponent = GiMicrophone;
      break;
    case 'GiMaterialsScience':
      IconComponent = GiMaterialsScience;
      break;
    case 'GiPhotoCamera':
      IconComponent = GiPhotoCamera;
      break;
    default:
      IconComponent = GiBackup;
  }

  return (
    <li
      className={`course rounded-custom p-custom text-white w-full bg-${course.color} md:relative md:h-80 md:py-0 md:flex md:flex-col md:items-center md:justify-center md:gap-8 md:cursor-pointer md:shadow-md md:hover:shadow-lg md:border-4 md:border-white md:hover:border-8 md:rounded md:hover:rounded-custom md:hover:transition-all md:transition-all`}
      style={{
        top,
        zIndex,
      }}
    >
      <p className="uppercase font-extralight text-date md:font-normal">
        {course.date}
      </p>

      <h3 className="font-bold h-16 flex items-center text-2xl md:text-center">
        {course.title}
      </h3>

      <div className="mt-4 flex items-center h-10 md:self-start">
        <div className="relative flex w-14 h-9">
          <img
            alt="Participant aléatoire"
            className="absolute h-8 w-8 rounded-full z-10 border-2 border-white"
            src="https://i.pravatar.cc/300"
          />
          <img
            alt="Deuxiéme participant aléatoire"
            className="absolute h-8 w-8 rounded-full z-5 left-4 border-2 border-white"
            src="https://i.pravatar.cc/300"
          />
        </div>

        <p className="italic font-extralight tracking-wider ml-1 text-xs">
          join Marie, John & 10 others
        </p>
      </div>

      {IconComponent && (
        <IconComponent
          size={90}
          className={`absolute right-8 bottom-10 opacity-20 ${
            course.color.includes('dark') ? 'text-white' : 'text-lightblack'
          }`}
        />
      )}
    </li>
  );
}

export default Course;
