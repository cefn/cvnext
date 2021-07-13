import React, { FC } from "react";
import ReactDOMServer from "react-dom/server";

import {
  createMuiTheme,
  ServerStyleSheets,
  ThemeProvider
} from "@material-ui/core/styles";
import { Controls } from "./Controls";
import { createStore } from "@lauf/store";
import { AppState } from "../types";
import { INITIAL_APPSTATE } from "../logic";

const ssrStore = createStore<AppState>(INITIAL_APPSTATE);
const sheets = new ServerStyleSheets();
// Render the component to a string.
ReactDOMServer.renderToString(
  sheets.collect(
    <ThemeProvider theme={createMuiTheme()}>
      <Controls store={ssrStore} />
    </ThemeProvider>
  )
);

export const Viewport: FC = ({ children }) => {
  return (
    <>
      <style id="jss-server-side">${sheets.toString()}</style>
      <style global jsx>
        {`
          html,
          body,
          #__next {
            height: 100%;
          }
        `}
      </style>
      {children}
    </>
  );
};
