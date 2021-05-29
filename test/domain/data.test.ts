import { Immutable } from "@lauf/lauf-store";
import { ENTRIES } from "../../src/domain/data";
import { getCategory } from "../../src/domain/types";
describe("Data integrity", () => {
  test("No Entries are missing a CATEGORY tag", () => {
    expect(ENTRIES.find((entry) => getCategory(entry) === null)).toBe(false);
  });
});
