import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Layout2.module.css"; // Import the CSS module

const Layout2 = () => {
  return (
    <div className="layout2">
      <div className={styles.layout2Container}>
        <div className={styles.colr}>
        <Link to="morebutton">More Button</Link>
        </div>
      </div>
      <div className={styles.layout2Content1}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout2;
