import { Store } from "@lauf/lauf-store";
import React, { FunctionComponent } from "react";
import { Profile } from "../pages";
import { ENGAGEMENTS } from "./data";

export const Controls: FunctionComponent<{ store: Store<Profile> }> = ({
  store,
}) => {
  const max = ENGAGEMENTS.length;
  return (
    <>
      <label>
        Number of Engagements{" "}
        <input
          type="range"
          id="limit"
          min={0}
          max={max}
          step={1}
          defaultValue={max}
          onChange={(event) =>
            store.edit(
              (draft) => void (draft.limit = Number(event.target.value))
            )
          }
          list="ticks"
        />
        <datalist id="ticks" style={{ display: "inline" }}>
          {Array.from({ length: max }).map((_, tick) => (
            <option value={tick}></option>
          ))}
        </datalist>
      </label>
    </>
  );
};
