import { Card, Image, SkeletonItem } from "@fluentui/react-components";
import {
  ArchiveArrowBackRegular,
  ChatArrowBackRegular,
  GlobeArrowForwardRegular
} from "@fluentui/react-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getLostFoundDetail, LostFoundDetail } from "@/apis/lostfound";
import useMarkerRedirect from "@/hooks/useMarkerRedirect";
import useStyles from "@/pages/detail/index.css";
import { unescapeHtml } from "@/utils/format";

function DetailPage() {
  const styles = useStyles();

  const redirect = useMarkerRedirect();
  const { id } = useParams();

  const [item, setItem] = useState<LostFoundDetail>();
  const [isLoading, setIsLoading] = useState(true);

  const handlePlaceClick = () => {
    if (item) {
      redirect(false, item.lat, item.lng, item.depPlace);
    }
  };

  const handleAtcIdClick = () => {
    if (item) {
      const uri = `https://www.lost112.go.kr/find/findDetail.do?ATC_ID=${item.atcId}&FD_SN=${item.fdSn}`;
      window.open(uri, "_self");
    }
  };

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      getLostFoundDetail(id)
        .then((data) => {
          setItem(data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className={styles.contentTopTexts}>
          <SkeletonItem style={{ height: "48px" }} />
          <SkeletonItem style={{ height: "24px" }} />
          <SkeletonItem style={{ height: "24px" }} />
          <SkeletonItem style={{ height: "20px" }} />
          <SkeletonItem style={{ height: "20px" }} />
          <SkeletonItem style={{ height: "20px" }} />
          <SkeletonItem style={{ height: "20px" }} />
        </div>
      );
    } else {
      return (
        <div className={styles.contentTopTexts}>
          <div className={styles.contentTopMain}>{item?.fdPrdtNm}</div>
          <div className={styles.contentTopSub}>
            {`보관장소: ${item?.depPlace}`}
            <ArchiveArrowBackRegular
              style={{ cursor: "pointer", display: item?.lat || item?.lng ? "" : "none" }}
              onClick={handlePlaceClick}
            />
          </div>
          <div className={styles.contentTopSub}>{`습득일자: ${item?.fdYmd}`}</div>
          <div className={styles.contentTopInfo}>
            {`관리번호: ${item?.atcId}-${item?.fdSn}`}
            <GlobeArrowForwardRegular style={{ cursor: "pointer" }} onClick={handleAtcIdClick} />
          </div>
          <div className={styles.contentTopInfo}>{`물품분류: ${item?.prdtClNm}`}</div>
          <div className={styles.contentTopInfo}>{`습득장소: ${item?.fdPlace}`}</div>
          <div className={styles.contentTopInfo}>{`상태: ${item?.csteSteNm}`}</div>
        </div>
      );
    }
  };

  return (
    <div className={styles.root}>
      <Card className={styles.content}>
        <div className={styles.contentTop}>
          <Image className={styles.contentTopImage} fit="contain" src={item?.fdFilePathImg} />
          {renderContent()}
          <a className={styles.contentTopChat} href={`tel:${item?.tel}`}>
            <span>연락하기</span>
            <ChatArrowBackRegular fontSize="14px" />
          </a>
        </div>
        <div className={styles.contentBottom}>
          <div className={styles.contentBottomDetail}>{item && unescapeHtml(item.uniq)}</div>
        </div>
      </Card>
    </div>
  );
}

export default DetailPage;
