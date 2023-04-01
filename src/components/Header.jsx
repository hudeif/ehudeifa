const Header = () => {
  return (
    <div className="header">
      <nav className="container">
        <a href="#" className="logo">
          <span>E</span>-School
        </a>
        <ul className="nav_list">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">All courses</a>
          </li>
          <li>
            <a href="">contacts</a>
          </li>
        </ul>
        <div className="">
          <a href="#" className="btn-sign_in">
            Sign in
          </a>
          <button className="btn btn-sign_up">Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
