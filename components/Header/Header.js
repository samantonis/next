import styled from "styled-components";
import Navigation from "../Navigation/Navigation";

const StyledHeader = styled.header`
  .bar {
    border-bottom: 5px solid ${props => props.theme.black};
    a {
      margin: 10px;
    }
  }
  .sub-bar {
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Navigation />
    </div>
  </StyledHeader>
);

export default Header;
