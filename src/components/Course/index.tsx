import './index.scss';

function Course() {
  return (
    <div className="course p-10">
      <div className="course-header">
        <span className="course-header__date">today 5:30 PM</span>
        <h3 className="course-header__title">
          Yoga and Meditation for Beginners
        </h3>
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
    </div>
  );
}

export default Course;
