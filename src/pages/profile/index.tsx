import { useEffect, useState } from "react";

import { BookMark, getBookMark } from "@/apis/bookmark";
import { getKakaoScopes, getUser, User } from "@/apis/user";
import BookmarkList from "@/pages/profile/BookmarkList";
import ProfileEdit from "@/pages/profile/Edit";
import useStyles from "@/pages/profile/index.css";
import ProfileKeyword from "@/pages/profile/KeywordList";
import ProfileLostGoods from "@/pages/profile/LostGoods";
import ProfileHeader from "@/pages/profile/ProfileHeader";
import ProfileMobile from "@/pages/profile/ProfileMobile";
import useAuthStore from "@/stores/auth";
import useGlobalStore from "@/stores/global";
import { tabletWidth } from "@/styles/size";

function ProfilePage() {
  const styles = useStyles();

  const [isEditMode, setIsEditMode] = useState(false);
  const [isLostGoodsMode, setIsLostGoodsMode] = useState(false);
  const [isMobileMode, setmobileMode] = useState(false);

  const [user, setUser] = useState<User>();
  const [isMessageAgreed, setIsMessageAgreed] = useState(false);

  const { setBookmarkMap } = useGlobalStore();
  const { userId } = useAuthStore();

  const numericMobileWidth = parseInt(tabletWidth, 10);

  useEffect(() => {
    if (userId) {
      getUser(userId).then((res) => {
        setUser(res);
      });
      getBookMark(userId).then((res) => {
        const temp = new Map<string, BookMark>();
        res.map((bookmark) => temp.set(bookmark.location, bookmark));
        setBookmarkMap(temp);
      });
      getKakaoScopes(userId).then((res) => {
        res.scopes.map((scope) => {
          if (scope.id === "talk_message") {
            setIsMessageAgreed(scope.agreed);
          }
        });
      });
    }
  }, []);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const toggleLostGoodsMode = () => {
    setIsLostGoodsMode(!isLostGoodsMode);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= numericMobileWidth) {
        setmobileMode(true);
      } else {
        setmobileMode(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderContent = () => {
    if (isMobileMode) {
      return (
        <div className={styles.mobileContent}>
          {isEditMode ? (
            <ProfileEdit
              isMessageAgreed={isMessageAgreed}
              notifyOnlyBookmarked={user?.notifyOnlyBookmarked ?? false}
            />
          ) : (
            <ProfileMobile />
          )}
        </div>
      );
    } else {
      if (isEditMode) {
        return (
          <div className={styles.content}>
            <ProfileEdit
              isMessageAgreed={isMessageAgreed}
              notifyOnlyBookmarked={user?.notifyOnlyBookmarked ?? false}
            />
          </div>
        );
      } else if (isLostGoodsMode) {
        return (
          <div className={styles.content}>
            <ProfileLostGoods />
          </div>
        );
      } else
        return (
          <div className={styles.content}>
            <div className={styles.left}>
              <ProfileKeyword />
            </div>
            <div className={styles.right}>
              <BookmarkList />
            </div>
          </div>
        );
    }
  };

  return (
    <div className={styles.root}>
      <ProfileHeader
        isMobileMode={isMobileMode}
        toggleEditMode={toggleEditMode}
        toggleLostGoodsMode={toggleLostGoodsMode}
        user={user}
      />
      {renderContent()}
    </div>
  );
}

export default ProfilePage;
