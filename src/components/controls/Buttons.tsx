import React, { FC } from "react";
import { Button } from "@material-ui/core";
import { Store } from "@lauf/lauf-store";
import type { AppState } from "../../types";
import { downloadPdf } from "../../util";
import { INITIAL_APPSTATE } from "../../logic";

const BUTTON_DEFAULTS = {
  variant: "contained",
  color: "primary",
  style: { width: "80%" }
} as const;

export const DownloadButton: FC<{ store: Store<AppState> }> = ({ store }) => (
  <>
    <Button {...BUTTON_DEFAULTS} onClick={() => downloadPdf(store)}>
      Download
    </Button>
  </>
);

export const ResetButton: FC<{ store: Store<AppState> }> = ({ store }) => (
  <Button {...BUTTON_DEFAULTS} onClick={() => store.write(INITIAL_APPSTATE)}>
    Reset
  </Button>
);

export const LinkButton: FC<{ href: string }> = ({ href, children }) => (
  <Button {...BUTTON_DEFAULTS} href={href}>
    {children}
  </Button>
);
