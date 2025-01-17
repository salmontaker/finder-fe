import { Button, Card, Image, Spinner } from "@fluentui/react-components";
import { BookExclamationMarkRegular } from "@fluentui/react-icons";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { placeLostFound } from "@/apis/lostfound";
import useIntersect from "@/hooks/useIntersect";
import useStyles from "@/pages/main/ItemList/index.css";
import Item from "@/pages/main/ItemList/Item";
import useAuthStore from "@/stores/auth";
import useMainStore from "@/stores/main";

function ItemList() {
  const styles = useStyles();
  const navigate = useNavigate();

  const { selectedMarker, placeItemList, showLostGoods, setSelectedMarker, setPlaceItemList } =
    useMainStore();

  const { userId } = useAuthStore();

  const [page, setPage] = useState<number>(0);
  const [isEndOfPage, setIsEndOfPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const renderList = () => {
    if (showLostGoods) {
      return (
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Image className={styles.contentImage} fit="contain" src="./img105.png" />
          <div className={styles.contentTexts}>
            <div className={styles.contentMain}>{selectedMarker?.name}</div>
            <div className={styles.contentSub}>{`분실일자: ${selectedMarker?.date}`}</div>
            <div className={styles.contentInfo}>{`물품분류: ${selectedMarker?.category}`}</div>
            <div className={styles.contentInfo}>{`분실장소: ${selectedMarker?.address}`}</div>
            <div className={styles.contentInfo02}>{`내용: ${selectedMarker?.info}`}</div>
          </div>
          {userId !== selectedMarker?.userId && (
            <Button
              style={{ marginTop: "auto", marginBottom: "10px" }}
              onClick={() => {
                navigate("/chat", {
                  state: {
                    targetId: `${selectedMarker?.userId}`
                  }
                });
              }}
            >
              연락하기
            </Button>
          )}
        </div>
      );
    } else if (placeItemList.length == 0 && isEndOfPage) {
      return (
        <div className={styles.empty}>
          <BookExclamationMarkRegular fontSize="128px" />
          <div>습득물이 없습니다.</div>
        </div>
      );
    } else {
      return (
        <>
          {placeItemList.map((item) => (
            <Item
              key={item._id}
              address={item.fdYmd}
              category={item.prdtClNm}
              img={item.fdFilePathImg}
              item={item}
              name={item.fdPrdtNm}
            />
          ))}
          <div ref={scrollRef}>
            {isLoading ? <Spinner className={styles.spinner} /> : <div style={{ height: "1px" }} />}
          </div>
        </>
      );
    }
  };

  const getItems = () => {
    setIsLoading(true);
    if (selectedMarker) {
      placeLostFound(selectedMarker.name, page)
        .then((data) => {
          if (data.length > 0) {
            setPlaceItemList([...placeItemList, ...data]);
            setPage(page + 1);
          } else {
            setIsEndOfPage(true);
          }
        })
        .catch((e: AxiosError) => {
          console.error(e);
          setIsEndOfPage(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const scrollRef = useIntersect((entry, observer) => {
    observer.unobserve(entry.target);
    if (!isEndOfPage && !isLoading) {
      getItems();
    }
  });

  useEffect(() => {
    setPlaceItemList([]);
    setPage(0);
    setIsEndOfPage(false);
  }, [selectedMarker]);

  return (
    <div className={styles.root}>
      <div className={styles.subtitle}>{`선택한 ${showLostGoods ? "분실물" : "장소"}`}</div>
      <div className={styles.title}>
        <div className={styles.titleText}>{selectedMarker?.name}</div>
        <div
          className={styles.titleBack}
          onClick={() => {
            setSelectedMarker(undefined);
          }}
        >
          {`다른 ${showLostGoods ? "분실물" : "장소"}보기`}
        </div>
      </div>
      <Card className={`${styles.list}`}>{renderList()}</Card>
    </div>
  );
}

export default ItemList;
