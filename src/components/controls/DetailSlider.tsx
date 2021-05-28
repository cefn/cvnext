import { Store } from "@lauf/lauf-store";
import { Grid, Slider, Typography } from "@material-ui/core";
import { FunctionComponent } from "react";
import { Profile, DETAILS } from "../../domain/types";

const DETAIL_KEYS = Object.keys(DETAILS);
const max = DETAIL_KEYS.length - 1;
const marks = DETAIL_KEYS.map((label, value) => ({
  label,
  value,
}));
const detailKeyLookup = (value: number) => DETAIL_KEYS[value] || "Error";

export const DetailSlider: FunctionComponent<{ store: Store<Profile> }> = ({
  store,
}) => (
  <Grid container>
    <Grid item xs={2}>
      <Typography align={"center"} id="detail-slider-label">
        Detail
      </Typography>
    </Grid>
    <Grid item xs={10}>
      <Slider
        defaultValue={max}
        min={0}
        max={max}
        getAriaValueText={detailKeyLookup}
        aria-labelledby="detail-slider-label"
        step={1}
        valueLabelDisplay="auto"
        valueLabelFormat={detailKeyLookup}
        // marks={marks}
      />
    </Grid>
  </Grid>
);
