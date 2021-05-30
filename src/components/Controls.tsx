import { FC } from "react";
import { FormLabel, Grid, Paper } from "@material-ui/core";
import { Store } from "@lauf/lauf-store";
import { AppState } from "../domain/types";
import { DetailRadio } from "./controls/DetailRadio";
import { LengthSlider } from "./controls/LengthSlider";
import { ResetButton } from "./controls/ResetButton";
import { PriorityList } from "./controls/PriorityList";

export const Controls: FC<{ store: Store<AppState> }> = ({ store }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Paper style={{ padding: "5%" }}>
      <Grid container>
        <Grid item xs={6}>
          <DetailRadio store={store} />
        </Grid>
        <Grid item xs={6}>
          <ResetButton store={store} />
        </Grid>
      </Grid>
    </Paper>
    <Paper style={{ padding: "5%" }}>
      <Grid container>
        <Grid item xs={6}>
          <LengthSlider store={store} />
        </Grid>
        <Grid item xs={6}>
          <PriorityList store={store} />
        </Grid>
      </Grid>
    </Paper>
  </div>
);
