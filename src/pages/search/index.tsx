import { AxiosError } from "axios";
import { useEffect, useRef, useState } from "react";

import { searchLostFound } from "@/apis/lostfound";
import useStyles from "@/pages/search/index.css";
import SearchForm from "@/pages/search/SearchForm/SearchForm";
import SearchList from "@/pages/search/SearchList/SearchList";
import useSearchStore from "@/stores/search";

function SearchPage() {
  const styles = useStyles();
  const didMount = useRef(false);

  const { query, items, setItems, page, setPage } = useSearchStore();

  const [isEndOfPage, setIsEndOfPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getItems = () => {
    setIsLoading(true);
    searchLostFound(query, page)
      .then((data) => {
        if (data.length > 0) {
          setItems([...items, ...data]);
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
  };

  useEffect(() => {
    if (didMount.current) {
      setItems([]);
      setPage(0);
      setIsEndOfPage(false);
    } else {
      didMount.current = true;
    }
  }, [query]);

  return (
    <div className={styles.root}>
      <SearchForm />
      <SearchList getItems={getItems} isEndOfPage={isEndOfPage} isLoading={isLoading} />
    </div>
  );
}

export default SearchPage;
