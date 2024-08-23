export type ThemeType = "dark" | "light";

export type ContextType = {
  theme: ThemeType;
  setTheme: any;
};

export type BorderType = {
  link: string;
  name: string;
};

export type NativeNameObject = {
  [key: string]: {
    common: string;
    official: string;
  };
};

export type CurrencyType = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};

export type CountryNameType = {
  common: string;
  official: string;
  nativeName: NativeNameObject;
};

export type CountryType = {
  name: CountryNameType;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  borders: string[];
  unMember: boolean;
  currencies: CurrencyType;
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  translations: NativeNameObject;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: {
    [key: string]: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
  postalCode: {
    format: string;
    regex: string;
  };
};

export type DetailsListItem = {
  key: string;
  value: string;
};
