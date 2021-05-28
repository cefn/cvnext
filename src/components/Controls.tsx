import { FunctionComponent } from "react";
import { makeStyles, Grid, Paper, Slider, Typography } from "@material-ui/core";
import { Store } from "@lauf/lauf-store";
import { Profile } from "../domain/types";
import { ENTRIES } from "../domain/data";
import { DetailSlider } from "./controls/DetailSlider";
import { EntriesSlider } from "./controls/EntriesSlider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const Controls: FunctionComponent<{ store: Store<Profile> }> = ({
  store,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <DetailSlider store={store} />
          <EntriesSlider store={store} />
        </Grid>
        <Grid item xs></Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
  // return (
  //   <>
  //     <label>
  //       Number of Entries{" "}
  //       <input
  //         type="range"
  //         id="limit"
  //         min={0}
  //         max={max}
  //         step={1}
  //         defaultValue={max}
  //         onChange={(event) =>
  //           store.edit(
  //             (draft) => void (draft.limit = Number(event.target.value))
  //           )
  //         }
  //         list="ticks"
  //       />
  //       <datalist id="ticks" style={{ display: "inline" }}>
  //         {Array.from({ length: max }).map((_, tick) => (
  //           <option value={tick}></option>
  //         ))}
  //       </datalist>
  //     </label>
  //   </>
  // );
};
