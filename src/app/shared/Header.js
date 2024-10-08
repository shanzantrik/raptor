import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { auth } from "../../firebaseConfig"; // Import the auth object from updated firebaseConfig
import { signOut } from 'firebase/auth'; // Import signOut from firebase/auth

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = (e) => {
    e.target.closest(".dropdown").classList.remove("show");
    e.target.closest(".dropdown .dropdown-menu").classList.remove("show");
  };

  const toggleHeaderMenu = (e) => {
    e.preventDefault();
    document.querySelector("body").classList.toggle("az-header-menu-show");
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/general-pages/signin'); // Redirect to sign-in page
    } catch (error) {
      console.error("Sign Out Error", error);
    }
  };

  const isPathActive = (path) => {
    return location.pathname.startsWith(path);
  };

  // Remove "az-header-menu-show" class when the location changes
  React.useEffect(() => {
    document.querySelector("body").classList.remove("az-header-menu-show");
  }, [location]);

  return (
<div>
  <div className="az-header pb40">
    <div className="container-fluid d-flex justify-content-between align-items-center">

      <div className="az-header-left d-flex align-items-center">
        <a href="#/" className="az-logo">
          <span>ra</span>p<span>tor</span>
        </a>
        <a
          id="azMenuShow"
          onClick={toggleHeaderMenu}
          className="az-header-menu-icon d-lg-none"
          href="#/"
        >
          <span></span>
        </a>
      </div>

      <div className="az-header-menu d-none d-lg-flex align-items-center">
        <ul className="nav">
          <li className={isPathActive("/dashboard") ? "nav-item active" : "nav-item"}>
            <Link to="/dashboard" className="nav-link">
              <i className="typcn typcn-chart-area-outline"></i> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Dropdown className={isPathActive("/general-pages") ? "nav-item active" : "nav-item"}>
              <Dropdown.Toggle as={"a"} className="nav-link with-sub">
                <i className="typcn typcn-document"></i> Surface
              </Dropdown.Toggle>
              <Dropdown.Menu className="az-menu-sub">
                <Link to="#" className={isPathActive("/general-pages/signin") ? "nav-link active" : "nav-link"}>
                  Scans
                </Link>
                <Link to="#" className={isPathActive("/general-pages/signup") ? "nav-link active" : "nav-link"}>
                  Download reports
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </li>
              <li className="nav-item">
                <Dropdown className={isPathActive("/ui-elements") || isPathActive("/form") || isPathActive("/charts") || isPathActive("/tables") ? "nav-item active" : "nav-item"}>
                  <Dropdown.Toggle as={"a"} className="nav-link with-sub">
                    <i className="typcn typcn-book"></i> Features
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="az-menu-sub az-menu-sub-mega">
                    <div className="container">
                      <div>
                        <nav className="nav">
                          <span>Scan</span>
                          <Link to="/ui-elements/buttons" className={isPathActive("/ui-elements/buttons") ? "nav-link active" : "nav-link"}>
                            On Demand
                          </Link>
                          <Link to="/ui-elements/dropdowns" className={isPathActive("/ui-elements/dropdowns") ? "nav-link active" : "nav-link"}>
                            Schedule
                          </Link>
                        </nav>
                      </div>
                      <div>
                        <nav className="nav">
                          <span>Vulnerabilities</span>
                          <Link to="/form/form-elements" className={isPathActive("/form/form-elements") ? "nav-link active" : "nav-link"}>
                            Map
                          </Link>
                          <Link to="/form/form-elements" className={isPathActive("/form/form-elements") ? "nav-link active" : "nav-link"}>
                            All
                          </Link>
                        </nav>
                      </div>
                      <div>
                        <nav className="nav">
                          <span>Report</span>
                          <Link to="/charts/chartjs" className={isPathActive("/charts/chartjs") ? "nav-link active" : "nav-link"}>
                            On Demand
                          </Link>
                          <Link to="/charts/chartjs" className={isPathActive("/charts/chartjs") ? "nav-link active" : "nav-link"}>
                            Schedule
                          </Link>
                        </nav>
                      </div>
                      <div>
                        <nav className="nav">
                          <span>Settings</span>
                          <Link to="/tables/basic-table" className={isPathActive("/tables/basic-table") ? "nav-link active" : "nav-link"}>
                            Users
                          </Link>
                          <Link to="/tables/basic-table" className={isPathActive("/tables/basic-table") ? "nav-link active" : "nav-link"}>
                            Organization
                          </Link>
                          <Link to="/tables/basic-table" className={isPathActive("/tables/basic-table") ? "nav-link active" : "nav-link"}>
                            Tags
                          </Link>
                        </nav>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className={isPathActive("/tables/basic-table") ? "nav-item active" : "nav-item"}>
                <Link to="/tables/basic-table" className="nav-link">
                  <i className="typcn typcn-flash-outline"></i> Alerts
                </Link>
              </li>
              <li className={isPathActive("/tables/basic-table") ? "nav-item active" : "nav-item"}>
                <Link to="/tables/basic-table" className="nav-link">
                  <i className="typcn typcn-document-text"></i> Rules
                </Link>
              </li>
        </ul>
      </div>

      <div className="az-header-right d-flex align-items-center">
        <a href="#/" className="az-header-search-link">
          <i className="fas fa-file-alt"></i>
        </a>
        <a href="#/" className="az-header-search-link">
          <i className="fas fa-search"></i>
        </a>
        <div className="az-header-message">
          <Link to="#/">
            <i className="typcn typcn-messages"></i>
          </Link>
        </div>
        <Dropdown className="az-header-notification">
          <Dropdown.Toggle as={"a"} className="new">
            <i className="typcn typcn-bell"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className="az-dropdown-header mg-b-20 d-sm-none">
              <a href="#/" onClick={closeMenu} className="az-header-arrow">
                <i className="icon ion-md-arrow-back"></i>
              </a>
            </div>
            <h6 className="az-notification-title">Notifications</h6>
            <p className="az-notification-text">You have 2 unread notifications</p>
            <div className="az-notification-list">
              <div className="media new">
                <div className="az-img-user">
                  <img src={require("../../assets/images/img2.jpg")} alt="" />
                </div>
                <div className="media-body">
                  <p>
                    Congratulate <strong>Socrates Itumay</strong> for work anniversaries
                  </p>
                  <span>Mar 15 12:32pm</span>
                </div>
              </div>
                                <div className="media new">
                    <div className="az-img-user online">
                      <img
                        src={require("../../assets/images/img3.jpg")}
                        alt=""
                      ></img>
                    </div>
                    <div className="media-body">
                      <p>
                        <strong>Joyce Chua</strong> just created a new blog post
                      </p>
                      <span>Mar 13 04:16am</span>
                    </div>
                  </div>
                  <div className="media">
                    <div className="az-img-user">
                      <img
                        src={require("../../assets/images/img4.jpg")}
                        alt=""
                      ></img>
                    </div>
                    <div className="media-body">
                      <p>
                        <strong>Althea Cabardo</strong> just created a new blog
                        post
                      </p>
                      <span>Mar 13 02:56am</span>
                    </div>
                  </div>
                  <div className="media">
                    <div className="az-img-user">
                      <img
                        src={require("../../assets/images/img5.jpg")}
                        alt=""
                      ></img>
                    </div>
                    <div className="media-body">
                      <p>
                        <strong>Adrian Monino</strong> added new comment on
                        your photo
                      </p>
                      <span>Mar 12 10:40pm</span>
                    </div>
                  </div>
            </div>
            <div className="dropdown-footer">
              <a href="#/">View All Notifications</a>
            </div>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="az-profile-menu">
          <Dropdown.Toggle as={"a"} className="az-img-user">
            <img src={require("../../assets/images/photome.jpg")} alt="" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className="az-dropdown-header d-sm-none">
              <a href="#/" onClick={closeMenu} className="az-header-arrow">
                <i className="icon ion-md-arrow-back"></i>
              </a>
            </div>
            <div className="az-header-profile">
              <div className="az-img-user">
                <img src={require("../../assets/images/photome.jpg")} alt="" />
              </div>
              <h6>Shantanu G</h6>
              <span>Premium Member</span>
            </div>
            <a href="#/" className="dropdown-item">
              <i className="typcn typcn-user-outline"></i> My Profile
            </a>
            <a href="#/" className="dropdown-item">
              <i className="typcn typcn-edit"></i> Edit Profile
            </a>
            <a href="#/" className="dropdown-item">
              <i className="typcn typcn-time"></i> Activity Logs
            </a>
            <a href="#/" className="dropdown-item">
              <i className="typcn typcn-cog-outline"></i> Account Settings
            </a>
            <a href="#/" onClick={handleSignOut} className="dropdown-item">
              <i className="typcn typcn-power-outline"></i> Sign Out
            </a>
          </Dropdown.Menu>
        </Dropdown>
      </div>

    </div>
  </div>
</div>

  );
};

export default Header;
