import { FunctionComponent } from "react";
import { Store } from "@lauf/lauf-store";
import { Profile } from "../domain/types";
import { ENTRIES } from "../domain/data";

export const Controls: FunctionComponent<{ store: Store<Profile> }> = ({
  store,
}) => {
  const max = ENTRIES.length;
  return (
    <>
      <label>
        Number of Entries{" "}
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
