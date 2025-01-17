import { Image, TableCell, TableCellLayout, TableRow, tokens } from "@fluentui/react-components";
import { makeStyles } from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";

import { LostFound } from "@/apis/lostfound";
import { mainColor, secondaryColor } from "@/styles/color";
import { tabletWidth } from "@/styles/size";
import { unescapeHtml } from "@/utils/format";

const useStyles = makeStyles({
  tableRow: {
    height: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  tableCell: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flex: "1 0 auto",
    height: "auto",
    padding: "16px 16px 16px 0px",
    "&::before": {
      content: "attr(data-label)",
      fontWeight: "bold",
      display: "block",
      marginBottom: "4px"
    }
  },
  imageContainer: {
    display: "flex",
    width: "12vh",
    height: "12vh",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px 24px 24px 24px"
  },
  image: {
    width: "14vh",
    height: "14vh",
    marginRight: "16px",
    [`@media (max-width: ${tabletWidth})`]: {
      width: "11vh",
      height: "11vh",
      marginRight: "0"
    }
  },
  title: {
    color: tokens.colorNeutralForeground1,
    fontSize: "16px",
    fontWeight: "bold"
  },
  categoryTitle: {
    color: mainColor,
    fontSize: "12px",
    fontWeight: "bold"
  },
  subTitle: {
    color: secondaryColor,
    fontSize: "12px",
    fontWeight: "bold"
  }
});

interface Props {
  item: LostFound;
}

function SearchListItem({ item }: Props) {
  const navigate = useNavigate();
  const styles = useStyles();

  return (
    <TableRow
      className={styles.tableRow}
      onClick={() => {
        navigate(`/detail/${item.atcId}-${item.fdSn}`);
      }}
    >
      <TableCell className={styles.imageContainer}>
        <TableCellLayout
          media={<Image className={styles.image} fit="contain" src={item.fdFilePathImg} />}
        />
      </TableCell>
      <TableCell className={styles.tableCell}>
        <TableCellLayout media={<span className={styles.categoryTitle}>{item.prdtClNm}</span>} />
        <TableCellLayout
          media={<span className={styles.title}>{unescapeHtml(item.fdPrdtNm)}</span>}
        />
        <TableCellLayout media={<span className={styles.subTitle}>{item.depPlace}</span>} />
        <TableCellLayout media={<span className={styles.subTitle}>{item.fdYmd}</span>} />
      </TableCell>
    </TableRow>
  );
}

export default SearchListItem;
