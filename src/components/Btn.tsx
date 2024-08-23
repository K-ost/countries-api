import { Link } from "react-router-dom";
import styled from "styled-components";
import arrow from "../assets/arrow.svg";
import arrowDark from "../assets/arrow-dark.svg";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { ContextType, ThemeType } from "../types";

type BtnSize = "small" | "large";

type BtnProps = {
  back?: boolean;
  name: string;
  size?: BtnSize;
  url?: string;
  btn?: boolean;
  handler?: () => void;
};

// ButtonCommonStyles
const ButtonCommonStyles = {
  backgroundColor: "var(--color-header)",
  borderRadius: "5px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  color: "var(--color-text)",
  display: "inline-block",
  lineHeight: "20px",
  transition: "var(--animate)",
};

// Styles
const Btnlink = styled(Link)<{
  $size: BtnSize;
  $back?: boolean;
  $theme: ThemeType;
}>`
  ${ButtonCommonStyles}
  ${(props) =>
    props.$back &&
    `
    background-image: url(${props.$theme === "dark" ? arrow : arrowDark});
    background-position: 20px center;
    background-size: 24px;
    background-repeat: no-repeat;
  `}
  font-size: var(${(props) => (props.$size === "small" ? "--fs" : "--fs2")});
  margin: 0 10px 10px 0;
  padding: ${(props) => (props.$size === "small" ? "5px 20px" : "10px 30px")};
  ${(props) => props.$back && "padding-left: 54px;"}
  text-decoration: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const BtnButton = styled.button`
  ${ButtonCommonStyles}
  border: 0;
  cursor: pointer;
  font-size: var(--fs2);
  outline: none;
  padding: 10px 30px;
  -webkit-appearance: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Btn = (props: BtnProps): JSX.Element => {
  const { back, name, size = "small", url, btn, handler } = props;
  const context = useContext<ContextType | null>(ThemeContext);
  if (btn) return <BtnButton onClick={handler}>{name}</BtnButton>;
  return (
    <Btnlink to={url!} $size={size} $back={back} $theme={context!.theme}>
      {name}
    </Btnlink>
  );
};

export default Btn;
