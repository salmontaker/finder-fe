import { Card, tokens } from "@fluentui/react-components";
import { StarFilled, StarRegular } from "@fluentui/react-icons";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { useNavigate } from "react-router-dom";

import useStyles from "@/pages/main/KakaoMap/Popup.css";
import useMainStore from "@/stores/main";
import usePositionStore from "@/stores/position";
import useWriteStore from "@/stores/write";
import { mainColor } from "@/styles/color";

interface Props {
  handleBookmark?: (name: string) => void;
  isBookmarked?: boolean;
}

function KakaoMapPopup({ handleBookmark, isBookmarked }: Props) {
  const styles = useStyles();
  const navigate = useNavigate();

  const { clickedInfo } = usePositionStore();
  const { selectedMarker, showLostGoods } = useMainStore();
  const { setLostPlace, setLostLat, setLostLng } = useWriteStore();

  const info = selectedMarker || clickedInfo;

  const renderBookmark = () => {
    if (!showLostGoods) {
      return (
        <div
          style={{
            cursor: "pointer",
            height: "100%",
            marginLeft: "auto"
          }}
          onClick={() => {
            if (handleBookmark) {
              handleBookmark(selectedMarker?.name ?? "");
            }
          }}
        >
          {isBookmarked ? <StarFilled color="orange" /> : <StarRegular />}
        </div>
      );
    }
  };

  return (
    <>
      {info && (
        <CustomOverlayMap position={{ lat: info.lat, lng: info.lng }} yAnchor={-0.2}>
          <div
            className={styles.popup}
            onMouseDown={(event) => {
              event.preventDefault();
              kakao.maps.event.preventMap();
            }}
            onTouchStart={(event) => {
              event.preventDefault();
              kakao.maps.event.preventMap();
            }}
          >
            <Card
              className={styles.popupCards}
              style={{
                backgroundColor: tokens.colorNeutralBackground1,
                color: tokens.colorNeutralForeground1
              }}
            >
              <div style={{ display: "flex", fontSize: "20px" }}>
                <div>{info.name ? info.name : info.address}</div>
                {renderBookmark()}
              </div>
              {info.name && <div style={{ color: mainColor }}>{info.address}</div>}
            </Card>
            {!("_id" in info) && (
              <Card
                className={styles.popupCards}
                style={{
                  backgroundColor: mainColor,
                  color: "white",
                  cursor: "pointer"
                }}
                onClick={() => {
                  setLostPlace(info.name ? info.name : info.address);
                  setLostLat(info.lat);
                  setLostLng(info.lng);
                  navigate("/write");
                }}
              >
                등록
              </Card>
            )}
          </div>
        </CustomOverlayMap>
      )}
    </>
  );
}

export default KakaoMapPopup;
