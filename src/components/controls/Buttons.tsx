import React, { FC } from "react";
import { Button } from "@material-ui/core";
import { Store } from "@lauf/lauf-store";
import type { AppState } from "../../types";
import { downloadPdf } from "../../util";
import { INITIAL_APPSTATE } from "../../logic";

export const DownloadButton: FC<{ store: Store<AppState> }> = ({
  store,
  ...props
}) => (
  <Button onClick={() => downloadPdf(store)} {...props}>
    Download
  </Button>
);

export const ResetButton: FC<{ store: Store<AppState> }> = ({
  store,
  ...props
}) => (
  <Button onClick={() => store.write(INITIAL_APPSTATE)} {...props}>
    Reset
  </Button>
);

export const LinkButton: FC<{ href: string }> = ({
  href,
  children,
  ...props
}) => (
  <Button href={href} {...props}>
    {children}
  </Button>
);
