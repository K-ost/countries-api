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
