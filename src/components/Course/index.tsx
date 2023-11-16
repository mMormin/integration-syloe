function Course() {
  return (
    <div className="course">
      <div className="course-header wrapper">
        <span className="course-header__date">today 5:30 PM</span>
        <h3 className="course-header__title">
          Yoga and Meditation for Beginners
        </h3>
      </div>

      <div className="course-entrant wrapper">
        <div className="course-entrant__pictures">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <span className="course-entrant__names">
          join Marie, John & 10 others
        </span>
      </div>
    </div>
  );
}

export default Course;
