import { makeStyles, SearchBox } from "@fluentui/react-components";
import { FilterRegular, SearchRegular, SendRegular } from "@fluentui/react-icons"; // 필터 아이콘 추가
import { useState } from "react";

import SearchFilter from "@/pages/search/SearchForm/SearchFilter";
import useSearchStore from "@/stores/search";
import { mainColor } from "@/styles/color";
import { mobileWidth, tabletWidth } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  searchHeader: {
    display: "flex",
    margin: "16px 10px 10px 10px",
    [`@media (max-width: ${mobileWidth})`]: {
      margin: "16px 10px 0px 10px"
    }
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    minHeight: "48px",
    [`@media (max-width: ${mobileWidth})`]: {
      width: "90vw",
      minHeight: "32px",
      padding: "5px 20px 0 20px"
    }
  },
  searchBox: {
    flex: 1,
    maxWidth: "unset",
    minHeight: "48px",
    borderRadius: "8px",
    padding: "8px",
    outline: "none",
    [`@media (max-width: ${tabletWidth})`]: {
      marginRight: "16px"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      marginRight: "0px"
    }
  },
  filterIcon: {
    fontSize: "2em",
    color: mainColor,
    cursor: "pointer",
    marginRight: "10px",
    [`@media (max-width: ${tabletWidth})`]: {
      marginLeft: "18px"
    },
    [`@media (max-width: ${mobileWidth})`]: {
      marginLeft: "auto",
      fontSize: "1.5em"
    }
  },
  title: {
    fontSize: "4em",
    [`@media (max-width: ${mobileWidth})`]: {
      fontSize: "2em"
    }
  }
});

function SearchForm() {
  const styles = useStyles();
  const { query, setQuery, isFilterEnabled, setIsFilterEnabled } = useSearchStore();
  const [searchText, setSearchText] = useState(query?.keyword ?? "");

  return (
    <div className={styles.root}>
      <div className={styles.searchHeader}>
        <div>
          <SearchRegular style={{ color: mainColor, fontSize: "2em", marginLeft: "14px" }} />
          <span className={styles.title}>검색</span>
        </div>
      </div>
      <div className={styles.searchContainer}>
        <FilterRegular
          className={styles.filterIcon}
          onClick={() => {
            setIsFilterEnabled(!isFilterEnabled);
          }}
        />
        <SearchBox
          appearance="underline"
          className={styles.searchBox}
          contentAfter={
            <SendRegular
              style={{
                cursor: "pointer"
              }}
              onClick={() => {
                setQuery({ ...query, keyword: searchText });
              }}
            />
          }
          placeholder="Search for..."
          value={searchText}
          onChange={(event, data) => {
            // X 버튼 눌러서 검색어 초기화 된 경우
            if (event.nativeEvent instanceof PointerEvent) {
              setQuery({ ...query, keyword: data.value });
            }
            setSearchText(data.value);
          }}
          onKeyDown={(event) => {
            if (event.key == "Enter") {
              setQuery({ ...query, keyword: searchText });
            }
          }}
        />
      </div>
      {isFilterEnabled && <SearchFilter />}
    </div>
  );
}

export default SearchForm;
