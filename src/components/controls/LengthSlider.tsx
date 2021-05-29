import { FC } from "react";
import { Store } from "@lauf/lauf-store";
import { FormControl, FormLabel, Slider } from "@material-ui/core";
import { AppState } from "../../domain/types";
import { ENTRIES } from "../../domain/data";

/**
 * Mapping natural direction for document length measure (increasing length downwards)
 * No support for reversed sliders per https://github.com/mui-org/material-ui/issues/18690
 */
const sliderPos = (value: number) => ENTRIES.length - value;

const marks = [
  { label: "Empty", value: sliderPos(0) },
  ...[0.25, 0.5, 0.75].map((share) => {
    const count = Math.floor(share * ENTRIES.length);
    return { label: count, value: sliderPos(count) };
  }),
  { label: "All", value: sliderPos(ENTRIES.length) },
];

export const LengthSlider: FC<{ store: Store<AppState> }> = ({ store }) => (
  <FormControl component="fieldset" style={{ height: "80%", padding: "5%" }}>
    <FormLabel style={{ height: "16%" }} component="label" color={"primary"}>
      Items
    </FormLabel>
    <Slider
      style={{ height: "64%" }}
      orientation={"vertical"}
      defaultValue={sliderPos(ENTRIES.length)}
      min={sliderPos(ENTRIES.length)}
      max={sliderPos(0)}
      aria-labelledby="entries-slider-label"
      step={1}
      valueLabelDisplay="auto"
      valueLabelFormat={(value) => ENTRIES.length - value}
      marks={marks}
    />
  </FormControl>
);
