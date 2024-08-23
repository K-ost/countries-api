import styled from "styled-components";

type ImageProps = {
  img: string;
};

const ImgSection = styled.div`
  img {
    display: block;
  }
  @media screen and (max-width: 980px) {
    margin: 0 0 30px;
  }
`;

const Image = (props: ImageProps) => {
  const { img } = props;
  return (
    <ImgSection>
      <img src={img} alt="" />
    </ImgSection>
  );
};

export default Image;
