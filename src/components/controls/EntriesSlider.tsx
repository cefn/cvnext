import { Store } from "@lauf/lauf-store";
import { Grid, Slider, Typography } from "@material-ui/core";
import { FunctionComponent } from "react";
import { ENTRIES } from "../../domain/data";
import { Profile } from "../../domain/types";

const max = ENTRIES.length - 1;

export const EntriesSlider: FunctionComponent<{ store: Store<Profile> }> = ({
  store,
}) => (
  <Grid container>
    <Grid item xs={2}>
      <Typography align={"center"} id="entries-slider-label">
        Entries
      </Typography>
    </Grid>
    <Grid item xs={10}>
      <Slider
        defaultValue={max}
        min={0}
        max={max}
        aria-labelledby="entries-slider-label"
        step={1}
        valueLabelDisplay="auto"
      />
    </Grid>
  </Grid>
);
