import { Depths } from "@fluentui/react";
import { Card, makeStyles } from "@fluentui/react-components";
import { StarFilled, StarRegular } from "@fluentui/react-icons";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { useNavigate } from "react-router-dom";

import useMainStore from "../../stores/main";
import usePositionStore from "../../stores/position";
import { mainColor } from "../../styles/color";

const useStyles = makeStyles({
  popup: {
    display: "flex",
    gap: "8px"
  },
  popupCards: {
    backgroundColor: mainColor,
    color: "white",
    padding: "24px",
    justifyContent: "center",
    boxShadow: Depths.depth16,
    borderRadius: "20px",
    fontSize: "20px",
    "@media (max-width: 390px)": {
      padding: "18px",
      fontSize: "16px"
    }
  }
});

interface Props {
  handleBookmark?: (name: string) => void;
  isBookmarked?: boolean;
}

function KakaoMapPopup({ handleBookmark, isBookmarked }: Props) {
  const styles = useStyles();
  const navigate = useNavigate();

  const { clickedInfo } = usePositionStore();
  const { selectedMarker, showLostGoods } = useMainStore();
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
        <CustomOverlayMap
          position={{ lat: info.lat, lng: info.lng }}
          yAnchor={-0.2}
        >
          <div
            className={styles.popup}
            onMouseDown={(event) => {
              event.preventDefault();
              kakao.maps.event.preventMap();
            }}
          >
            <Card
              className={styles.popupCards}
              style={{
                backgroundColor: "white",
                color: "black"
              }}
            >
              <div style={{ display: "flex", fontSize: "20px" }}>
                <div>{info.name ? info.name : info.address}</div>
                {renderBookmark()}
              </div>
              {info.name && (
                <div style={{ color: mainColor }}>{info.address}</div>
              )}
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
