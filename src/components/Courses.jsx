const Courses = () => {
  return (
    <div className="container section">
      <div className="search">
        <h3>
          All <span className="text-green">Courses</span> of E-school
        </h3>
        <input
          type="text"
          className="search_input"
          placeholder="search course"
        />
      </div>
      <div className="filter_area">
        <div className="filter_item">Ux design</div>
        <div className="filter_item">Development</div>
        <div className="filter_item">Data science</div>
        <div className="filter_item">Business</div>
      </div>
      <div className="courses">
        {[1, 2, 3, 4, 5, 6].map((one) => (
          <div className="course">
            <div className="course_img">
              <img src="../assets/images/lukas.jpg" alt="course image" />
            </div>
            <div className="course_author">
              <p className="author_name">Hudeifa abdir</p>
              <div className="course_category">science</div>
            </div>
            <p className="course_desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At,
              quam.
            </p>
            <div className="course_duration">
              <div className="hours">29 hours</div>
              <div className="lectures">5 lectures</div>
            </div>

            <div className="price_rate">
              <h4 className="price">$40</h4>
              <div className="rate">4.5</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
