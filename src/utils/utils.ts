import { CountryType } from "../types";

export const searchInArray = (
  data: CountryType[],
  search: string,
  select: string
): CountryType[] => {
  return data.filter((el) => {
    const searchMatch = el.name.common
      .toLowerCase()
      .includes(search.toLowerCase());
    const selectMatch = el.region.toLowerCase().includes(select.toLowerCase());
    if (searchMatch && selectMatch) {
      return el;
    }
  });
};

export const objectToString = (obj: any, field: string | null): string => {
  return Object.values(obj)
    .map((el: any) => (field ? el[field] : el))
    .join(", ");
};

type SimpleCountry = {
  name: string;
  region: "America" | "Europe" | "Asia" | "Africa" | "Oceania";
  capital: string[];
};

export const testCountries: SimpleCountry[] = [
  { name: "Canada", region: "America", capital: ["Toronto"] },
  {
    name: "Norway",
    region: "Europe",
    capital: ["Oslo"],
  },
  {
    name: "Hungary",
    region: "Europe",
    capital: ["Budapest"],
  },
  {
    name: "Taiwan",
    region: "Asia",
    capital: ["Taipei"],
  },
  {
    name: "Sierra Leone",
    region: "Africa",
    capital: ["Freetown"],
  },
  {
    name: "Grenada",
    region: "America",
    capital: ["St. George's"],
  },
  {
    name: "Ivory Coast",
    region: "Africa",
    capital: ["Yamoussoukro"],
  },
  {
    name: "Italy",
    region: "Europe",
    capital: ["Rome"],
  },
  {
    name: "France",
    region: "Europe",
    capital: ["Paris"],
  },
  {
    name: "Spain",
    region: "Europe",
    capital: ["Madrid"],
  },
  {
    name: "United States",
    region: "America",
    capital: ["Washington, D.C."],
  },
  {
    name: "Mexico",
    region: "America",
    capital: ["Mexico City"],
  },
];
