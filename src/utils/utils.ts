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
};

export const testCountries: SimpleCountry[] = [
  { name: "Canada", region: "America" },
  {
    name: "Norway",
    region: "Europe",
  },
  {
    name: "Hungary",
    region: "Europe",
  },
  {
    name: "Taiwan",
    region: "Asia",
  },
  {
    name: "Sierra Leone",
    region: "Africa",
  },
  {
    name: "Grenada",
    region: "America",
  },
  {
    name: "Ivory Coast",
    region: "Africa",
  },
  {
    name: "Italy",
    region: "Europe",
  },
  {
    name: "France",
    region: "Europe",
  },
  {
    name: "Spain",
    region: "Europe",
  },
  {
    name: "United States",
    region: "America",
  },
  {
    name: "Mexico",
    region: "America",
  },
];
