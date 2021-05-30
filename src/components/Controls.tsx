import { FC } from "react";
import { FormLabel, Grid, Paper } from "@material-ui/core";
import { Store } from "@lauf/lauf-store";
import { AppState } from "../domain/types";
import { DetailRadio } from "./controls/DetailRadio";
import { LengthSlider } from "./controls/LengthSlider";
import { ResetButton } from "./controls/ResetButton";
import { PriorityList } from "./controls/PriorityList";

export const Controls: FC<{ store: Store<AppState> }> = ({ store }) => (
  <div style={{ flexGrow: 1 }}>
    <Grid container direction="row" justify="center" alignItems="stretch">
      <Grid item xs={2}>
        <Paper style={{ height: "95%", padding: "5%" }}>
          <DetailRadio store={store} />
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper style={{ height: "95%", padding: "5%" }}>
          <LengthSlider store={store} />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper style={{ height: "95%", padding: "5%" }}>
          <PriorityList store={store} />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper style={{ height: "95%", padding: "5%" }}>
          <ResetButton store={store} />
        </Paper>
      </Grid>
    </Grid>
  </div>
);
