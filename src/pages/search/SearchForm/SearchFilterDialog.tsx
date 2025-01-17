import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Divider,
  Input,
  makeStyles,
  Radio,
  RadioGroup
} from "@fluentui/react-components";
import { DismissRegular } from "@fluentui/react-icons";
import { Fragment, useState } from "react";

import { categoryOption, colorOption } from "@/pages/search/SearchForm/SearchFilterOption";
import useSearchStore from "@/stores/search";

interface Props {
  title: string;
  option: "color" | "category";
  styleProps: {
    color: string;
    colorHex: string;
    input: string;
    dismiss: string;
  };
}

const useStyles = makeStyles({
  radioItem: {
    "&>*": {
      display: "flex",
      gap: "8px"
    }
  }
});

function SearchFilterDialog({ title, option, styleProps }: Props) {
  const styles = useStyles();

  const { query, setQuery } = useSearchStore();
  const [open, setOpen] = useState(false);

  const renderOption = () => {
    switch (option) {
      case "color":
        return (
          <RadioGroup
            value={query?.color ?? ""}
            onChange={(_, data) => {
              setQuery({ ...query, color: data.value });
              setOpen(false);
            }}
          >
            {Object.entries(colorOption).map(([color, hex]) => (
              <Radio
                key={color}
                className={styles.radioItem}
                label={
                  <>
                    <span className={styleProps.colorHex} style={{ backgroundColor: hex }} />
                    <span className={styleProps.color}>{color}</span>
                  </>
                }
                value={color}
              />
            ))}
          </RadioGroup>
        );
      case "category":
        return (
          <RadioGroup
            value={query?.category ?? ""}
            onChange={(_, data) => {
              setQuery({ ...query, category: data.value });
              setOpen(false);
            }}
          >
            {Object.entries(categoryOption).map(([mainCategory, subCategory]) => (
              <Fragment key={mainCategory}>
                <Radio key={mainCategory} label={mainCategory} value={mainCategory} />
                {subCategory.map((item) => (
                  <Radio
                    key={`${mainCategory} > ${item}`}
                    label={`${mainCategory} > ${item}`}
                    value={`${mainCategory} > ${item}`}
                  />
                ))}
                <Divider />
              </Fragment>
            ))}
          </RadioGroup>
        );
    }
  };

  const handleDismiss = () => {
    switch (option) {
      case "color":
        setQuery({ ...query, color: undefined });
        setOpen(false);
        break;
      case "category":
        setQuery({ ...query, category: undefined });
        setOpen(false);
        break;
    }
  };

  return (
    <Dialog open={open} onOpenChange={(_, data) => setOpen(data.open)}>
      <DialogTrigger disableButtonEnhancement>
        <Input
          readOnly
          className={styleProps.input}
          contentAfter={<DismissRegular className={styleProps.dismiss} onClick={handleDismiss} />}
          placeholder={title}
          value={option === "color" ? (query?.color ?? "") : (query?.category ?? "")}
        />
      </DialogTrigger>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>{renderOption()}</DialogContent>
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

export default SearchFilterDialog;
