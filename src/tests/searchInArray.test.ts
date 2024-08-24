import { describe, expect, it } from "vitest";
import { objectToString, searchInArray } from "../utils/utils";
import { mockedCountry, testedObject, testedObjectSimple } from "./factories";

const countries = mockedCountry.buildList(12);

describe("Utils", () => {
  it("Search request is empty", () => {
    const list = searchInArray(countries, "ddd", "");
    expect(list).toHaveLength(0);
  });

  it("Search request is matched", () => {
    const list = searchInArray(countries, "unit", "");
    expect(list).toHaveLength(1);
  });

  it("Region is matched", () => {
    const list = searchInArray(countries, "", "Europe");
    expect(list).toHaveLength(5);
  });

  it("Region is matched 2", () => {
    const list = searchInArray(countries, "", "America");
    expect(list).toHaveLength(4);
  });

  it("Region is empty", () => {
    const list = searchInArray(countries, "", "Oceania");
    expect(list).toHaveLength(0);
  });

  it("objectToString - internal object", () => {
    const result = objectToString(testedObject, "name");
    expect(result).toStrictEqual("first, second, third");
  });

  it("objectToString - simple object", () => {
    const result = objectToString(testedObjectSimple, null);
    expect(result).toStrictEqual("first, second, third");
  });

  it("objectToString - internal object second key", () => {
    const result = objectToString(testedObject, "age");
    expect(result).toStrictEqual("45, 32, 27");
  });
});
