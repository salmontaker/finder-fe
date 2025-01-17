import { Image, Tab, TabList } from "@fluentui/react-components";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getUser, postLogout, User } from "@/apis/user";
import useStyles from "@/components/SidebarMobile.css";
import useAuthStore from "@/stores/auth";
import useOptionStore from "@/stores/option";

interface Props {
  img?: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function SidebarMobile({ isOpen, setIsOpen }: Props) {
  const styles = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState("");
  const [user, setUser] = useState<User>();
  const { userId, setUserId } = useAuthStore();
  const { isDarkTheme, setIsDarkTheme } = useOptionStore();

  useEffect(() => {
    if (userId && isOpen) {
      getUser(userId).then((res) => {
        setUser(res);
      });
    }
  }, []);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setSelectedTab("tab1");
        break;
      case "/search":
        setSelectedTab("tab2");
        break;
      case "/chat":
        setSelectedTab("tab3");
        break;
      case "/profile":
        setSelectedTab("tab4");
        break;
      case "/write":
        setSelectedTab("tab5");
        break;
      default:
        setSelectedTab("");
        break;
    }
  }, [location]);

  return (
    <>
      <div className={`${styles.root} ${isOpen ? styles.open : styles.closed}`}>
        <div className={styles.profile}>
          <Image
            fit="cover"
            shape="circular"
            src={user ? user.profileImage : "/profileIMGimsi.png"}
            style={{ width: "150px", height: "150px" }}
          />
          <div className={styles.subInfoContainer}>
            <div className={styles.subInfo01}>{user ? user.username : "Guest"}</div>
            <div className={styles.subInfo02}>{user ? `@${user?.userId}` : ""}</div>
          </div>
        </div>

        <div>
          <TabList vertical selectedValue={selectedTab}>
            <Tab
              className={`${styles.tab} ${selectedTab === "tab1" ? selectedTab : ""}`} // className 수정
              value="tab1"
              onClick={() => {
                navigate("/");
                setIsOpen(false);
              }}
            >
              메인화면
            </Tab>
            <Tab
              className={`${styles.tab} ${selectedTab === "tab2" ? selectedTab : ""}`} // className 수정
              value="tab2"
              onClick={() => {
                navigate("/search");
                setIsOpen(false);
              }}
            >
              검색
            </Tab>
            <Tab
              className={`${styles.tab} ${selectedTab === "tab3" ? selectedTab : ""}`} // className 수정
              value="tab3"
              onClick={() => {
                navigate("/chat");
                setIsOpen(false);
              }}
            >
              대화
            </Tab>
            <Tab
              className={`${styles.tab} ${selectedTab === "tab4" ? selectedTab : ""}`} // className 수정
              value="tab4"
              onClick={() => {
                navigate("/profile");
                setIsOpen(false);
              }}
            >
              마이페이지
            </Tab>
            <Tab
              className={`${styles.tab} ${selectedTab === "tab5" ? selectedTab : ""}`} // className 수정
              value="tab5"
              onClick={() => {
                navigate("/write");
                setIsOpen(false);
              }}
            >
              새 글 쓰기
            </Tab>
          </TabList>
        </div>

        <div className={styles.bottomContainer}>
          <div
            onClick={() => {
              if (userId) {
                postLogout(userId).then(() => {
                  setUserId(undefined);
                  setUser(undefined);
                  navigate("/");
                  setIsOpen(false);
                });
              } else {
                navigate("/login");
                setIsOpen(false);
              }
            }}
          >
            {userId ? "로그아웃" : "로그인"}
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setIsDarkTheme(!isDarkTheme);
            }}
          >
            {isDarkTheme ? "라이트모드" : "다크모드"}
          </div>
        </div>
      </div>
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}
    </>
  );
}

export default SidebarMobile;
