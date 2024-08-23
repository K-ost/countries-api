import styled from "styled-components";
import { DetailsListItem } from "../types";

type DetailsListProps = {
  list: DetailsListItem[];
};

const Wrapper = styled.ul`
  column-count: 2;
  column-gap: 30;
  margin: 0 0 70px;
  padding: 0;
  @media screen and (max-width: 980px) {
    margin: 0 0 30px;
  }
  @media screen and (max-width: 700px) {
    column-count: auto;
    column-gap: auto;
  }
`;
const Item = styled.li`
  display-inline: block;
  list-style: none;
  margin: 0 0 10px;
  width: 100%;
  b {
    font-weight: 600;
    margin-right: 8px;
  }
`;

const DetailsList = (props: DetailsListProps) => {
  const { list } = props;

  return (
    <Wrapper>
      {list.map((item, index) => (
        <Item key={index}>
          <b>{item.key}</b>: {item.value}
        </Item>
      ))}
    </Wrapper>
  );
};

export default DetailsList;
