import { useParams } from "react-router-dom";
import { CountryType, DetailsListItem } from "../types";
import BordersList from "../components/BordersList";
import Btn from "../components/Btn";
import useGetData from "../hooks/getData";
import Page404 from "../components/Page404";
import { objectToString, transformString } from "../utils/utils";
import DetailsList from "../components/DetailsList";
import Image from "../components/Image";

const DetailPage = (): JSX.Element => {
  const { slug } = useParams();

  const { data, isLoading, isError } = useGetData<CountryType[]>({
    key: ["detail"],
    uri: `/alpha/${slug}`,
  });

  if (isLoading) return <Page404 />;
  if (isError) return <div>Server error</div>;

  const country = data![0];

  const detailedList: DetailsListItem[] = [
    {
      key: "Native Name",
      value: objectToString(country.name.nativeName, "official"),
    },
    { key: "Population", value: transformString(country.population) },
    { key: "Region", value: country.region },
    { key: "Sub Region", value: country.subregion },
    { key: "Capital", value: country.capital[0] },
    { key: "Top Level Domain", value: country.tld.join(", ") },
    { key: "Currencies", value: objectToString(country.currencies, "name") },
    { key: "Languages", value: objectToString(country.languages, null) },
  ];

  return (
    <div>
      <div className="back_section">
        <Btn url="/" name="Back" size="large" back />
      </div>
      <div className="grid grid-2">
        <Image img={country.flags.svg} />
        <div>
          <h1>{country.name.common}</h1>
          <DetailsList list={detailedList} />
          <BordersList
            param={country && country.borders && country.borders.join(",")}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
