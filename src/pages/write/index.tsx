import { DefaultButton } from "@fluentui/react";
import { Input } from "@fluentui/react-components";
import { DatePicker } from "@fluentui/react-datepicker-compat";
import { DismissRegular } from "@fluentui/react-icons";

import { Marker, postMarker } from "@/apis/marker";
import useMarkerRedirect from "@/hooks/useMarkerRedirect";
import { localizedStrings } from "@/pages/search/SearchForm/SearchFilterOption";
import WriteCategory from "@/pages/write/Category";
import useStyles from "@/pages/write/index.css";
import WritePlaceDialog from "@/pages/write/PlaceDialog";
import useAuthStore from "@/stores/auth";
import useWriteStore from "@/stores/write";
import { formatDate } from "@/utils/format";

function WritePage() {
  const styles = useStyles();
  const redirect = useMarkerRedirect();

  const {
    selectedCategory,
    selectedSubcategory,
    lostName,
    lostDate,
    lostPlace,
    lostLat,
    lostLng,
    lostInfo,
    setSelectedCategory,
    setSelectedSubcategory,
    setLostName,
    setLostDate,
    setLostPlace,
    setLostLat,
    setLostLng,
    setLostInfo
  } = useWriteStore();

  const { userId } = useAuthStore();

  const renderTitle = () => {
    if (selectedCategory && selectedSubcategory) {
      return (
        <div>
          <h1>
            {"대분류: "} {selectedCategory}
          </h1>
          <h2>
            {"소분류: "} {selectedSubcategory}
          </h2>
        </div>
      );
    } else {
      return (
        <div>
          <h1>대분류</h1>
          <h2>소분류</h2>
        </div>
      );
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        {renderTitle()}
        <div>
          <WriteCategory />
        </div>
      </div>
      <div className={styles.listMargin}>
        <a className={styles.subTitle}>분실물 이름</a>
        <div className={styles.listContainer}>
          <Input
            className={styles.input}
            contentAfter={
              <DismissRegular
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setLostName("");
                }}
              />
            }
            type="text"
            value={lostName}
            onChange={(_, data) => {
              setLostName(data.value);
            }}
          />
        </div>
      </div>
      <div className={styles.listMargin}>
        <a className={styles.subTitle}>분실 날짜</a>
        <div className={styles.listContainer}>
          <DatePicker
            readOnly
            className={styles.input}
            contentAfter={
              <DismissRegular
                onClick={(e) => {
                  e.stopPropagation();
                  setLostDate(undefined);
                }}
              />
            }
            formatDate={formatDate}
            maxDate={new Date()}
            placeholder="시작날짜"
            showMonthPickerAsOverlay={true}
            strings={localizedStrings}
            value={lostDate ?? null}
            onSelectDate={(date) => {
              if (date) {
                setLostDate(date);
              }
            }}
          />
        </div>
      </div>
      <div className={styles.listMargin}>
        <a className={styles.subTitle}>분실 장소</a>
        <div className={styles.listContainer}>
          <WritePlaceDialog styleProps={{ input: styles.input }} title="장소 선택" />
        </div>
      </div>
      <div className={styles.listMargin}>
        <a className={styles.subTitle}>추가 설명</a>
        <div className={styles.listContainer}>
          <Input
            className={styles.addInput}
            type="text"
            value={lostInfo}
            onChange={(_, data) => {
              setLostInfo(data.value);
            }}
          />
        </div>
      </div>
      <div className={styles.submitButtonContainer}>
        <DefaultButton
          disabled={
            !selectedCategory ||
            !selectedSubcategory ||
            !lostName ||
            !lostDate ||
            !lostPlace ||
            !lostLat ||
            !lostLng
          }
          className={styles.submitButton}
          text="등록"
          onClick={() => {
            const marker: Marker = {
              _id: "",
              name: lostName,
              date: formatDate(lostDate),
              address: lostPlace,
              category: `${selectedCategory} > ${selectedSubcategory}`,
              info: lostInfo,
              lat: lostLat,
              lng: lostLng,
              userId: userId
            };

            postMarker(marker).then((data) => {
              setSelectedCategory(undefined);
              setSelectedSubcategory(undefined);
              setLostName("");
              setLostDate(undefined);
              setLostPlace("");
              setLostLat(0);
              setLostLng(0);
              setLostInfo("");
              redirect(true, data.lat, data.lng, data._id);
            });
          }}
        />
      </div>
    </div>
  );
}

export default WritePage;
