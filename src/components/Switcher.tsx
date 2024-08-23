import { useContext } from "react";
import moon from "../assets/moon.svg";
import moonfull from "../assets/moon-full.svg";
import styled from "styled-components";
import { ThemeContext } from "../App";
import { ContextType, ThemeType } from "../types";

// Styles
const SwitcherBox = styled.label<{ $style: ThemeType }>`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs2);
  font-weight: 300;
  padding-left: 24px;
  position: relative;
  text-transform: capitalize;
  input {
    position: absolute;
    left: 0;
    opacity: 0;
  }
  &::before {
    background: url(${(props) => (props.$style === "dark" ? moonfull : moon)})
      center center / cover no-repeat;
    content: "";
    display: block;
    height: 18px;
    left: 0;
    position: absolute;
    top: 1px;
    width: 18px;
  }
  @media screen and (max-width: 700px) {
    font-size: var(--fs);
  }
`;

const Switcher = (): JSX.Element => {
  const context = useContext<ContextType | null>(ThemeContext);

  // switchTheme
  const switchTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      document.body.setAttribute("data-theme", "light");
      context?.setTheme("light");
    } else {
      document.body.setAttribute("data-theme", "dark");
      context?.setTheme("dark");
    }
  };

  return (
    <SwitcherBox $style={context!.theme}>
      <input type="checkbox" onChange={switchTheme} />
      {context?.theme} mode
    </SwitcherBox>
  );
};

export default Switcher;
