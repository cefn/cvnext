import { FC } from "react";
import { Button } from "@material-ui/core";
import { Store } from "@lauf/lauf-store";
import { INITIAL_APPSTATE, AppState } from "../../domain/types";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Resume } from "../Resume";
import { downloadPdf } from "../../util";

const BUTTON_DEFAULTS = {
  variant: "contained",
  color: "primary",
} as const;

export const DownloadButton: FC<{ store: Store<AppState> }> = ({ store }) => (
  <>
    {process.browser && (
      <Button
        suppressHydrationWarning
        {...BUTTON_DEFAULTS}
        onClick={() => downloadPdf(store)}
      >
        Download Current PDF
      </Button>
    )}
  </>
);

export const ResetButton: FC<{ store: Store<AppState> }> = ({ store }) => (
  <Button {...BUTTON_DEFAULTS} onClick={() => store.write(INITIAL_APPSTATE)}>
    Reset
  </Button>
);

export const SourceButton = () => (
  <Button {...BUTTON_DEFAULTS} href="https://github.com/cefn/cvnext">
    View Source
  </Button>
);
