import React, { FC } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";
import { Store } from "@lauf/lauf-store";
import type { AppState } from "../types";
import { DetailRadio } from "./controls/DetailRadio";
import { LengthSlider } from "./controls/LengthSlider";
import { PriorityList } from "./controls/PriorityList";
import { DownloadButton, SourceButton, ResetButton } from "./controls/Buttons";

export const Controls: FC<{ store: Store<AppState> }> = ({ store }) => {
  let theme = createMuiTheme({
    typography: {
      fontSize: 12
    }
  });
  theme = responsiveFontSizes(theme);
  return (
    <MuiThemeProvider theme={theme}>
      <div
        style={{ display: "flex", flexDirection: "column" }}
        suppressHydrationWarning
      >
        <Paper style={{ padding: "5%" }}>
          <Grid container>
            <Grid item xs={6}>
              <DetailRadio store={store} />
            </Grid>
            <Grid item xs={6}>
              <Grid container direction="column" spacing={3}>
                <Typography variant="body1" component="p" gutterBottom>
                  This app is a Typescript{" "}
                  <a href="https://www.npmjs.com/package/@lauf/lauf-store">
                    @lauf/lauf-store
                  </a>{" "}
                  experiment targeting the Chrome Desktop browser to construct
                  PDF CVs for Cefn Hoile
                </Typography>
                <DownloadButton store={store} />
                <SourceButton />
                <ResetButton store={store} />
              </Grid>
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
    </MuiThemeProvider>
  );
};
