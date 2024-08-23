import { useParams } from "react-router-dom";
import { CountryType, DetailsListItem } from "../types";
import BordersList from "../components/BordersList";
import styled from "styled-components";
import Btn from "../components/Btn";
import useGetData from "../hooks/getData";
import Page404 from "../components/Page404";
import { objectToString } from "../utils/utils";
import DetailsList from "../components/DetailsList";

// Styles
const BackSection = styled.div`
  display: flex;
  margin: 0 0 45px;
  @media screen and (max-width: 980px) {
    margin: 0 0 30px;
  }
`;
const ImgSection = styled.div`
  img {
    display: block;
  }
  @media screen and (max-width: 980px) {
    margin: 0 0 30px;
  }
`;

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
    { key: "Population", value: country.population.toString() },
    { key: "Region", value: country.region },
    { key: "Sub Region", value: country.subregion },
    { key: "Capital", value: country.capital[0] },
    { key: "Top Level Domain", value: country.tld.join(", ") },
    { key: "Currencies", value: objectToString(country.currencies, "name") },
    { key: "Languages", value: objectToString(country.languages, null) },
  ];

  return (
    <div>
      <BackSection>
        <Btn url="/" name="Back" size="large" back />
      </BackSection>
      <div className="grid grid-2">
        <ImgSection>
          <img src={country.flags.svg} alt="" />
        </ImgSection>
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
