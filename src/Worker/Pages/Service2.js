import React from "react";
// import { NavLink } from "react-router-dom";
import "./Service1.css";
// import Admin from "./../loginForm/Admin";
import { NavLink } from "react-router-dom";
import Nav from "./../Navbar/Nav";
import "./../Navbar/Nav.css";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import "./../loginForm/Admin.css";
const Service2 = () => {
  return (
    <>
      <Nav />
      <NavLink to="/worker1">
        {/* <ArrowBackIcon /> */}
        <button>Back</button>
      </NavLink>

      <div className="container">
        <div class="box p3">
          <div className="checBox">
            <input type="checkbox" />
          </div>
          <div class="member">
            <img
              src="https://images.unsplash.com/photo-1517146783983-418c681b56c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGV4dGlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1>2)loadingchart(input)</h1>
            <h2>Process-2</h2>
            <NavLink to="/loomloadingchart">
              <button>
                <i class="fas fa-video"></i> loomloading
              </button>
            </NavLink>
            <div class="favs">
              <button class="mark">
                <i class="fas fa-bookmark"></i>
              </button>
              <button class="fav">
                <i class="fas fa-heart"></i>
              </button>
              <button class="fav">
                <i class="fas fa-download"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="box p4">
          <div className="checBox">
            <input type="checkbox" />
          </div>
          <div class="member">
            <img
              src="https://images.unsplash.com/photo-1611574557210-e18bc59fd02b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHRleHRpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1>3) Loom per day charges</h1>
            <h2>Process-3</h2>
            <NavLink to="/loomperday">
              <button>
                <i class="fas fa-video"></i> loomlperday
              </button>
            </NavLink>

            <div class="favs">
              <button class="mark">
                <i class="fas fa-bookmark"></i>
              </button>
              <button class="fav">
                <i class="fas fa-heart"></i>
              </button>
              <button class="fav">
                <i class="fas fa-download"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="box p7">
          <div className="checBox">
            <input type="checkbox" />
          </div>
          <div class="member">
            <img
              src="https://images.unsplash.com/photo-1563837738662-c86ef2ba99f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRleHRpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1>Downtime (input) </h1>
            <h2>Process-7</h2>
            <NavLink to="/downtime">
              <button>
                <i class="fas fa-video"></i> Downtime
              </button>
            </NavLink>
            <div class="favs">
              <button class="mark">
                <i class="fas fa-bookmark"></i>
              </button>
              <button class="fav">
                <i class="fas fa-heart"></i>
              </button>
              <button class="fav">
                <i class="fas fa-download"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="box p5">
          <div className="checBox">
            <input type="checkbox" />
          </div>
          <div class="member">
            <img
              src="https://images.unsplash.com/photo-1524292332709-b33366a7f165?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHNoaWZ0JTIwdGV4dGlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h1>4) Shift</h1>
            <h2>Process-4</h2>
            <NavLink to="/shift">
              <button>
                <i class="fas fa-video"></i> Shift
              </button>
            </NavLink>
            <div class="favs">
              <button class="mark">
                <i class="fas fa-bookmark"></i>
              </button>
              <button class="fav">
                <i class="fas fa-heart"></i>
              </button>
              <button class="fav">
                <i class="fas fa-download"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service2;
