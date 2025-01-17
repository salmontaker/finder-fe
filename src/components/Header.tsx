import {
  LocationRegular,
  NavigationRegular,
  WeatherMoonRegular,
  WeatherSunnyRegular
} from "@fluentui/react-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { postLogout } from "@/apis/user";
import useStyles from "@/components/Header.css";
import SidebarMobile from "@/components/SidebarMobile";
import useAuthStore from "@/stores/auth";
import useOptionStore from "@/stores/option";

function Header() {
  const styles = useStyles();
  const navigate = useNavigate();
  const { isDarkTheme, setIsDarkTheme } = useOptionStore();
  const { userId, setUserId } = useAuthStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={styles.root}>
      <div
        className={styles.title}
        onClick={() => {
          navigate("/");
        }}
      >
        <LocationRegular className={styles.titleIcon} />
        <span className={styles.titleText}>Finder</span>
      </div>
      <div className={styles.menu}>
        <h2
          className={styles.login}
          onClick={() => {
            if (userId) {
              postLogout(userId).then(() => {
                setUserId(undefined);
                navigate("/");
              });
            } else {
              navigate("/login");
            }
          }}
        >
          {userId ? "Logout" : "Login"}
        </h2>
        <div
          style={{ fontSize: 28, cursor: "pointer" }}
          onClick={() => {
            setIsDarkTheme(!isDarkTheme);
          }}
        >
          {isDarkTheme ? <WeatherSunnyRegular /> : <WeatherMoonRegular />}
        </div>
      </div>
      <div>
        <NavigationRegular
          className={styles.menuIcon}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>
      {isSidebarOpen && <SidebarMobile isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />}
    </div>
  );
}

export default Header;
