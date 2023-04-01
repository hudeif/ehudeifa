const Banner = () => {
  return (
    <div className="banner">
      <div className="container grid banner-grid">
        <div className="banner_text">
          <div className="start-text">start your free course</div>
          <div className="title">
            Now learn from anywhere and build your <span>future career</span>
          </div>
          <p>
            it has survived not only for five centuries but also the leap into
            electronic typesetting.
          </p>
          <button className="btn btn-start_course">start course</button>
        </div>
        <div className="banner_img">
          <img src="../assets/images/man-with-laptop.png" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
