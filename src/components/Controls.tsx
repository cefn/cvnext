import { FC } from "react";
import { Grid } from "@material-ui/core";
import { Store } from "@lauf/lauf-store";
import { AppState } from "../domain/types";
import { DetailRadio } from "./controls/DetailRadio";
import { LengthSlider } from "./controls/LengthSlider";
import { ResetButton } from "./controls/ResetButton";

export const Controls: FC<{ store: Store<AppState> }> = ({ store }) => (
  <div style={{ flexGrow: 1 }}>
    <Grid container direction="row" justify="center" alignItems="stretch">
      <Grid item xs={2}>
        <DetailRadio store={store} />
      </Grid>
      <Grid item xs={4}>
        <LengthSlider store={store} />
      </Grid>
      <Grid item xs={6}>
        <ResetButton store={store} />
      </Grid>
    </Grid>
  </div>
);
