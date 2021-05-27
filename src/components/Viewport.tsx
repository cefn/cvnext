import { FunctionComponent } from "react";

export const Viewport: FunctionComponent = ({ children }) => (
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
