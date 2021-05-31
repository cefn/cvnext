import { ALL_ENTRIES } from "../../src/domain/data";
import { getCategory } from "../../src/domain/types";
describe("Data integrity", () => {
  test("No Entries are missing a CATEGORY tag", () => {
    expect(
      ALL_ENTRIES.find((entry) => getCategory(entry) === null)
    ).toBeFalsy();
  });
});
