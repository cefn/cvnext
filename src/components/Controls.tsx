import React, { FC } from "react";
import { Grid, Paper } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Store } from "@lauf/lauf-store";
import type { AppState } from "../types";
import { DetailRadio } from "./controls/DetailRadio";
import { LengthSlider } from "./controls/LengthSlider";
import { PriorityList } from "./controls/PriorityList";
import { DownloadButton, ResetButton, LinkButton } from "./controls/Buttons";

const GRID_PANE_PROPS = {
  style: {
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingTop: "3%",
    paddingBottom: "3%"
  }
} as const;

export const Controls: FC<{ store: Store<AppState> }> = ({ store }) => {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{ display: "flex", flexDirection: "column" }}
        suppressHydrationWarning
      >
        <Paper>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Grid container direction="column" {...GRID_PANE_PROPS}>
                <Grid item>
                  <DownloadButton store={store} />
                </Grid>
                <Grid item>
                  <LinkButton href="https://github.com/cefn">Github</LinkButton>
                </Grid>
                <Grid item>
                  <LinkButton href="https://stackoverflow.com/users/2257198/cefn">
                    Stackoverflow
                  </LinkButton>
                </Grid>
                <Grid item>
                  <LinkButton href="https://www.linkedin.com/in/cefnhoile">
                    Linkedin
                  </LinkButton>
                </Grid>
                <Grid item>
                  <LinkButton href="https://github.com/cefn/cvnext">
                    About
                  </LinkButton>
                </Grid>
                <Grid item>
                  <ResetButton store={store} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} {...GRID_PANE_PROPS}>
              <DetailRadio store={store} />
            </Grid>
          </Grid>
        </Paper>
        <Paper>
          <Grid container>
            <Grid item xs={12} sm={4} {...GRID_PANE_PROPS}>
              <LengthSlider store={store} />
            </Grid>
            <Grid item xs={12} sm={8} {...GRID_PANE_PROPS}>
              <PriorityList store={store} />
            </Grid>
          </Grid>
        </Paper>
      </div>
    </ThemeProvider>
  );
};
