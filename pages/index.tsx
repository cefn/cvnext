import React, { FunctionComponent } from "react";
import { BasicStore } from "@lauf/lauf-store";
import {
  createStyles,
  Grid,
  Theme,
  Typography,
  withStyles
} from "@material-ui/core";
import { Resume, Viewport, Controls } from "../src/components";
import { AppState } from "../src/types";
import { ensurePriorityEntries, INITIAL_APPSTATE } from "../src/logic";
import { PDFZoomViewer } from "../src/components/PdfZoomViewer";

const store = new BasicStore<AppState>(INITIAL_APPSTATE);

ensurePriorityEntries(store);

const Index: FunctionComponent = () => {
  return (
    <Viewport>
      <React.StrictMode>
        <Grid container style={{ height: "100%" }}>
          <Grid item container xs={12} sm={4}>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                component="p"
                style={{ padding: "3%" }}
              >
                A Typescript{" "}
                <a href="https://www.npmjs.com/package/@lauf/lauf-store">
                  @lauf/lauf-store
                </a>{" "}
                experiment targeting Desktop Chrome. Construct PDF CVs for Cefn
                Hoile
              </Typography>
              <Controls store={store} />
            </Grid>
          </Grid>
          <Grid item container xs={12} sm={8} suppressHydrationWarning>
            {process.browser ? (
              <PDFZoomViewer
                style={{ height: "100%", width: "100%" }}
                zoom="70"
              >
                <Resume store={store} />
              </PDFZoomViewer>
            ) : (
              <p>Please enable Javascript to load this CV</p>
            )}
          </Grid>
        </Grid>
      </React.StrictMode>
    </Viewport>
  );
};

const styles = (theme: Theme) =>
  createStyles({
    "@global": {
      html: {
        fontSize: 12,
        [theme.breakpoints.up("sm")]: {
          fontSize: 8
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 11
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 14
        }
      }
    }
  });

export default withStyles(styles)(Index);
