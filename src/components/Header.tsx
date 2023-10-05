import styled from "styled-components"
import Switcher from "./Switcher"

// Styles
const HeaderBox = styled.header`
  background: var(--color-header);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin: 0 0 45px;
  position: sticky;
  top: 0;
  z-index: 1000;
  .container {
    align-items: center;
    display: flex;
    height: 80px;
    justify-content: space-between;
  }
  @media screen and (max-width: 700px) {
    margin: 0 0 30px;
    .container { height: 60px; }
  }
`
const HeaderName = styled.div`
  font-size: 24px;
  font-weight: 800;
  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`

const Header: React.FC = () => {
  return (
    <HeaderBox>
      <div className="container">
        <HeaderName>Where in the world?</HeaderName>
        <Switcher />
      </div>
    </HeaderBox>
  )
}

export default Header
