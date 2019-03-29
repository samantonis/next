import React, { Component } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../../constants/theme";
import Header from "../Header/Header";
import Meta from "../Meta/Meta";
import withAuthentication from "../Session/withAuthentication";

const StyledPage = styled.div`
  height: 100vh;
  background: ${props => props.theme.black};
  color: ${props => props.theme.offWhite};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
  }
  ul,ol,dl {
    margin:0 auto;
    padding:0
  } 
  a {
    text-decoration: none;
    color: ${props => props.theme.offWhite};
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <GlobalStyle />
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default withAuthentication(Page);
