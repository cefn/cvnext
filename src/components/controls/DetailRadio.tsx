import { FC } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Store } from "@lauf/lauf-store";
import { AppState, DETAILS } from "../../domain/types";

const DETAIL_KEYS = Object.keys(DETAILS);
const MOST_DETAIL = DETAIL_KEYS[DETAIL_KEYS.length - 1];

export const DetailRadio: FC<{ store: Store<AppState> }> = ({ store }) => {
  return (
    <FormControl component="fieldset" style={{ padding: "10%" }}>
      <FormLabel style={{ height: "16%" }} component="label" color={"primary"}>
        Detail
      </FormLabel>
      <RadioGroup
        style={{ height: "64%" }}
        aria-label="Detail"
        name="detail"
        defaultValue={MOST_DETAIL}
        onChange={() => ({})}
      >
        {DETAIL_KEYS.map((detailKey) => (
          <FormControlLabel
            value={detailKey}
            control={<Radio color={"primary"} size={"small"} />}
            label={detailKey}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
