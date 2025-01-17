import { makeStyles, Spinner, Table, TableBody, tokens } from "@fluentui/react-components";
import { useEffect, useRef } from "react";

import useDebounce from "@/hooks/useDebounce";
import useIntersect from "@/hooks/useIntersect";
import SearchListItem from "@/pages/search/SearchList/SearchListItem";
import useSearchStore from "@/stores/search";
import { tabletWidth } from "@/styles/size";

const useStyles = makeStyles({
  root: {
    overflow: "auto"
  },
  tableHeader: {
    backgroundColor: tokens.colorNeutralBackground1,
    fontSize: "12px !important",
    [`@media (max-width: ${tabletWidth})`]: {
      display: "none"
    }
  },
  tableBody: {
    [`@media (max-width: ${tabletWidth})`]: {
      display: "block"
    }
  },
  tableRow: {
    [`@media (max-width: ${tabletWidth})`]: {
      display: "block",
      marginBottom: "16px"
    }
  },
  tableCell: {
    [`@media (max-width: ${tabletWidth})`]: {
      display: "block",
      padding: "8px 0",
      textAlign: "left",
      "&::before": {
        content: "attr(data-label)",
        fontWeight: "bold",
        display: "block",
        marginBottom: "4px"
      }
    }
  },
  spinner: {
    margin: "16px",
    "&>span": {
      backgroundColor: tokens.colorPaletteLightGreenBackground2
    }
  }
});

interface Props {
  isEndOfPage: boolean;
  isLoading: boolean;
  getItems: () => void;
}

function SearchList({ isEndOfPage, isLoading, getItems }: Props) {
  const styles = useStyles();

  const { items, scrollTop, setScrollTop } = useSearchStore();

  const rootRef = useRef<HTMLDivElement | null>(null);

  const debounce = useDebounce();
  const saveScroll = debounce(() => {
    setScrollTop(rootRef.current?.scrollTop ?? scrollTop);
  }, 50);

  const scrollRef = useIntersect((entry, observer) => {
    observer.unobserve(entry.target);
    if (!isEndOfPage && !isLoading) {
      getItems();
    }
  });

  useEffect(() => {
    if (rootRef.current) {
      rootRef.current.scrollTo({ top: scrollTop });
    }
  }, []);

  return (
    <div ref={rootRef} className={styles.root} onScroll={saveScroll}>
      <Table>
        <TableBody className={styles.tableBody}>
          {items.map((item, idx) => (
            <SearchListItem key={idx} item={item} />
          ))}
        </TableBody>
      </Table>
      <div ref={scrollRef}>
        {isLoading ? <Spinner className={styles.spinner} /> : <div style={{ height: "1px" }} />}
      </div>
    </div>
  );
}

export default SearchList;
