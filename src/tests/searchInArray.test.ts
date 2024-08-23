import { describe, expect, it } from "vitest";
import { searchInArray } from "../utils/utils";
import { mockedCountry } from "./factories";

const countries = mockedCountry.buildList(3);

describe("searchInArray", () => {
  it("Search request is empty", () => {
    const list = searchInArray(countries, "ddd", "");
    expect(list).toHaveLength(0);
  });

  it("Search request is matched", () => {
    const list = searchInArray(countries, "unit", "");
    expect(list).toHaveLength(1);
  });

  it("Region is matched", () => {
    const list = searchInArray(countries, "", "europe");
    expect(list).toHaveLength(1);
  });

  it("Region is matched 2", () => {
    const list = searchInArray(countries, "", "america");
    expect(list).toHaveLength(2);
  });

  it("Region is empty", () => {
    const list = searchInArray(countries, "", "africa");
    expect(list).toHaveLength(0);
  });
});
