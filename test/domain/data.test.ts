import { ALL_ENTRIES } from "../../src/data";
import { getCategory } from "../../src/util";
describe("Data integrity", () => {
  test("No Entries are missing a CATEGORY tag", () => {
    expect(
      ALL_ENTRIES.find((entry) => getCategory(entry) === null)
    ).toBeFalsy();
  });
});
