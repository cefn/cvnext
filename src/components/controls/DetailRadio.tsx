import { FC } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Store } from "@lauf/lauf-store";
import { AppState, Detail, DETAILS } from "../../domain/types";
import { useSelected } from "@lauf/lauf-store-react";

export const DetailRadio: FC<{ store: Store<AppState> }> = ({ store }) => {
  const detail = useSelected(store, (state) => state.detail);
  return (
    <>
      <FormLabel component="label" color={"primary"}>
        Detail
      </FormLabel>
      <RadioGroup
        aria-label="Detail"
        name="detail"
        value={detail}
        onChange={(event) =>
          store.edit(
            (draft) => void (draft.detail = event.target.value as Detail)
          )
        }
      >
        {Object.keys(DETAILS).map((detailKey) => (
          <FormControlLabel
            key={detailKey}
            value={detailKey}
            control={<Radio color={"primary"} size={"small"} />}
            label={detailKey}
          />
        ))}
      </RadioGroup>
    </>
  );
};
