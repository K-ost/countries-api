import * as Factory from "factory.ts";
import { CountryType } from "../types";
import { testCountries } from "../utils/utils";

// Country
export const mockedCountry = Factory.Sync.makeFactory<CountryType>({
  name: Factory.each((i) => ({
    common: testCountries[i].name,
    official: "common name",
    nativeName: {
      deu: { official: "official", common: "common" },
    },
  })),
  region: Factory.each((i) => testCountries[i].region),
  tld: ["tld"],
  cca2: "cca2",
  ccn3: "ccn3",
  cca3: Factory.each((i) => `cca${i}`),
  independent: true,
  status: "status",
  borders: ["borders"],
  unMember: true,
  currencies: {
    usd: {
      name: "Dollar",
      symbol: "usd",
    },
  },
  idd: {
    root: "root",
    suffixes: ["suffix"],
  },
  capital: Factory.each((i) => testCountries[i].capital),
  altSpellings: ["altSpelling"],
  subregion: "subregion",
  languages: {
    en: "eng",
  },
  translations: {
    transl: {
      common: "common",
      official: "official",
    },
  },
  latlng: [1, 2],
  landlocked: false,
  area: Factory.each((i) => i),
  demonyms: {
    dem: {
      f: "f",
      m: "m",
    },
  },
  flag: "flag",
  maps: {
    googleMaps: "google",
    openStreetMaps: "openStreet",
  },
  population: 30000000,
  car: {
    signs: ["sign"],
    side: "side",
  },
  timezones: ["timezones"],
  continents: ["continents"],
  flags: {
    png: "png",
    svg: "svg",
  },
  coatOfArms: {
    png: "png",
    svg: "svg",
  },
  startOfWeek: "startOfWeek",
  capitalInfo: {
    latlng: [2500, 5000],
  },
  postalCode: {
    format: "format",
    regex: "regex",
  },
});

export const testedObject = {
  first: { name: "first", age: 45 },
  second: { name: "second", age: 32 },
  third: { name: "third", age: 27 },
};

export const testedObjectSimple = {
  first: "first",
  second: "second",
  third: "third",
};
