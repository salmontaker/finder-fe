import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Input,
  tokens
} from "@fluentui/react-components";
import { DismissRegular } from "@fluentui/react-icons";
import { useEffect, useState } from "react";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";

import { getCoord2Address } from "@/apis/kakaoMap";
import useStyles from "@/pages/write/PlaceDialog/index.css";
import usePositionStore from "@/stores/position";
import useWriteStore from "@/stores/write";
import { mainColor } from "@/styles/color";

interface Props {
  title: string;
  styleProps: {
    input: string;
  };
}

function PlaceDialog({ title, styleProps }: Props) {
  const styles = useStyles();

  const { lostPlace, lostLat, lostLng, setLostPlace, setLostLat, setLostLng } = useWriteStore();
  const { latitude, longitude, getCoords } = usePositionStore();

  const [open, setOpen] = useState(false);
  const [clickedPos, setClickedPos] = useState<kakao.maps.LatLng>();
  const [clickedAddr, setClickedAddr] = useState(lostPlace);

  const handleDismiss = () => {
    setLostPlace("");
    setLostLat(0);
    setLostLng(0);
    setOpen(false);
  };

  useEffect(() => {
    if (latitude == 0 || longitude == 0) {
      getCoords();
    }
  }, []);

  useEffect(() => {
    if (open) {
      setClickedPos(new kakao.maps.LatLng(lostLat, lostLng));
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={(_, data) => setOpen(data.open)}>
      <DialogTrigger disableButtonEnhancement>
        <Input
          readOnly
          className={styleProps.input}
          contentAfter={<DismissRegular style={{ cursor: "pointer" }} onClick={handleDismiss} />}
          placeholder={title}
          value={lostPlace}
        />
      </DialogTrigger>
      <DialogSurface>
        <DialogTitle>{title}</DialogTitle>
        <DialogBody>
          <DialogContent>
            <Map
              center={{ lat: lostLat ? lostLat : latitude, lng: lostLng ? lostLng : longitude }}
              style={{ width: "100%", height: "100%", minHeight: "400px" }}
              onClick={(_, event) => {
                const pos = event.latLng;
                setClickedPos(pos);
                getCoord2Address(pos.getLat(), pos.getLng()).then((res) => {
                  setClickedAddr(res.building_name ? res.building_name : res.address_name);
                });
              }}
            >
              {clickedPos && (
                <>
                  <MapMarker
                    position={{ lat: clickedPos.getLat(), lng: clickedPos.getLng() }}
                    onClick={() => {
                      setClickedPos(undefined);
                    }}
                  />
                  <CustomOverlayMap
                    position={{ lat: clickedPos.getLat(), lng: clickedPos.getLng() }}
                    yAnchor={-0.2}
                  >
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
                        {clickedAddr}
                      </Card>
                      <Card
                        className={styles.popupCards}
                        style={{
                          backgroundColor: mainColor,
                          color: "white",
                          cursor: "pointer"
                        }}
                        onClick={() => {
                          setLostPlace(clickedAddr);
                          setLostLat(clickedPos.getLat());
                          setLostLng(clickedPos.getLng());
                          setOpen(false);
                        }}
                      >
                        선택
                      </Card>
                    </div>
                  </CustomOverlayMap>
                </>
              )}
            </Map>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDismiss}>초기화</Button>
            <DialogTrigger disableButtonEnhancement>
              <Button>닫기</Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}

export default PlaceDialog;
