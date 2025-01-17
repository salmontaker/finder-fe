import { useEffect, useState } from "react";

import { getKeywords, Keyword } from "@/apis/keyword";
import BookmarkList from "@/pages/profile/BookmarkList";
import ProfileKeyword from "@/pages/profile/KeywordList";
import ProfileLostGoods from "@/pages/profile/LostGoods";
import useStyles from "@/pages/profile/ProfileMobile.css";
import useAuthStore from "@/stores/auth";

function ProfileMobile() {
  const styles = useStyles();
  const { userId } = useAuthStore();
  const [keywords, setKeywords] = useState<Keyword[]>([]);
  const [activeComponent, setActiveComponent] = useState<JSX.Element | null>(null);
  const [isContent, setIsContent] = useState(false);

  useEffect(() => {
    if (userId) {
      getKeywords(userId).then((res) => {
        setKeywords(res);
      });
    }
  }, [userId]);

  const handleComponentChange = (component: JSX.Element) => {
    setActiveComponent(component);
    setIsContent(true);
  };

  const handleClose = () => {
    setIsContent(false);
    setActiveComponent(null);
  };

  return (
    <div className={styles.root}>
      <div style={{ display: "flex", width: "100%" }}>
        {isContent && (
          <div className={styles.close} onClick={handleClose}>
            ✕
          </div>
        )}
      </div>
      <div className={isContent ? styles.content02 : styles.content}>
        {!isContent && (
          <>
            <div
              className={styles.text}
              onClick={() => handleComponentChange(<ProfileLostGoods />)}
            >
              내가 쓴 글 (수정)
            </div>
            <div className={styles.text} onClick={() => handleComponentChange(<ProfileKeyword />)}>
              내 키워드
            </div>
            <div className={styles.keywordList}>
              {keywords.length > 0 ? (
                keywords.map((keyword, index) => (
                  <div key={keyword.id}>
                    {keyword.keyword}
                    {index < keywords.length - 1 && ", "}
                  </div>
                ))
              ) : (
                <div>키워드가 등록되지 않았습니다.</div>
              )}
            </div>
            <div className={styles.text} onClick={() => handleComponentChange(<BookmarkList />)}>
              즐겨찾기 목록
            </div>
          </>
        )}
        {isContent && activeComponent}
      </div>
    </div>
  );
}

export default ProfileMobile;
