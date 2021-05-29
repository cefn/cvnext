import { FC } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Store } from "@lauf/lauf-store";
import { AppState, Detail, DETAILS } from "../../domain/types";
import { useSelected } from "@lauf/lauf-store-react";

const DETAIL_KEYS = Object.keys(DETAILS);

export const DetailRadio: FC<{ store: Store<AppState> }> = ({ store }) => {
  const detail = useSelected(store, (state) => state.detail);
  return (
    <FormControl component="fieldset" style={{ padding: "10%" }}>
      <FormLabel style={{ height: "16%" }} component="label" color={"primary"}>
        Detail
      </FormLabel>
      <RadioGroup
        style={{ height: "64%" }}
        aria-label="Detail"
        name="detail"
        value={detail}
        onChange={(event) =>
          store.edit(
            (draft) => void (draft.detail = event.target.value as Detail)
          )
        }
      >
        {DETAIL_KEYS.map((detailKey) => (
          <FormControlLabel
            key={detailKey}
            value={detailKey}
            control={<Radio color={"primary"} size={"small"} />}
            label={detailKey}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
