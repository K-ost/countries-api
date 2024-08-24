import styled from "styled-components";
import { CountryType } from "../types";
import { Link } from "react-router-dom";

type ItemProps = {
  el: CountryType;
  index: number;
};

// Styled
const Itembox = styled(Link)`
  background: var(--color-header);
  border-radius: 4px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);
  color: var(--color-text);
  display: block;
  min-height: 100%;
  text-decoration: none;
  transition: var(--animate);
  &:hover {
    transform: translateY(-4px);
  }
`;
const ItemImg = styled.img`
  border-radius: 4px 4px 0 0;
  display: block;
  height: 160px;
  object-fit: cover;
  width: 100%;
`;
const ItemDetails = styled.span`
  display: block;
  padding: 24px;
  span {
    display: block;
    margin: 0 0 4px;
    &:last-child {
      margin: 0;
    }
  }
`;
const ItemTitle = styled.span`
  display: block;
  font-size: var(--fs2);
  font-weight: 600;
  margin: 0 0 12px !important;
`;

const Item = (props: ItemProps): JSX.Element => {
  const { el, index } = props;
  const slug = el.cca3.toLowerCase();

  return (
    <div data-testid={`countryItem-${index}`}>
      <Itembox to={slug}>
        <ItemImg src={el.flags.svg} alt="" />
        <ItemDetails>
          <ItemTitle>{el.name.common}</ItemTitle>
          <span>Population: {el.population}</span>
          <span>Region: {el.region}</span>
          <span>Capital: {el.capital}</span>
        </ItemDetails>
      </Itembox>
    </div>
  );
};

export default Item;
