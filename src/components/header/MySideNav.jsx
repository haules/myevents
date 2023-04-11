import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faHome,
  faUser,
  faHelicopter,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../header/sidenav.module.css";
import { useNavigate } from "react-router-dom";

const MySideNav = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.mainDivNav}>
      <React.Fragment>
        <SideNav
          onSelect={(selected) => {
            navigate("/" + selected);
          }}
          className={styles.sidenav}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <FontAwesomeIcon icon={faHome} />
                <i className="fa fa-fw fa-icon" style={{ fontSize: "1.5em" }} />
              </NavIcon>
              <NavText >Home</NavText>
            </NavItem>

            <NavItem eventKey="services">
              <NavIcon>
                <FontAwesomeIcon icon={faHelicopter} />
                <i
                  className="fa fa-fw fa-message"
                  style={{ fontSize: "1.5em" }}
                />
              </NavIcon>
              <NavText>Services</NavText>
            </NavItem>

            <NavItem eventKey="about-us">
              <NavIcon>
                <FontAwesomeIcon icon={faCoffee} />
                <i
                  className="fa fa-fw fa-message"
                  style={{ fontSize: "1.5em" }}
                />
              </NavIcon>
              <NavText>About Us</NavText>
            </NavItem>

            <NavItem eventKey="-">
              <NavIcon>
                <FontAwesomeIcon icon={faUser} />
                <i
                  className="fa fa-fw fa-message"
                  style={{ fontSize: "1.5em" }}
                />
              </NavIcon>

              <NavText>Settings</NavText>
              <NavItem>
                <NavText eventKey="company">Company</NavText>
              </NavItem>

              <NavItem>
                <NavText eventKey="contact-us">Contact Us</NavText>
              </NavItem>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </React.Fragment>
    </div>
  );
};

export default MySideNav;
