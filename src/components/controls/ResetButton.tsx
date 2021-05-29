import { FC } from "react";
import { Button } from "@material-ui/core";
import { Store } from "@lauf/lauf-store";
import { INITIAL_PROFILE, AppState } from "../../domain/types";

export const ResetButton: FC<{ store: Store<AppState> }> = ({ store }) => (
  <Button
    variant="contained"
    color="primary"
    onClick={() => store.write(INITIAL_PROFILE)}
  >
    Reset
  </Button>
);
