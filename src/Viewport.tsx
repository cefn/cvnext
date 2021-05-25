import { FunctionComponent } from "react";

export const FillView: FunctionComponent = ({ children }) => (
  <>
    <style global jsx>{`
      html,
      body,
      #__next {
        height: 100%;
      }
    `}</style>
    {children}
  </>
);
