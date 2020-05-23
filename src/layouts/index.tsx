import React from "react";
import { createGlobalStyle, ThemeProvider } from "src/lib/StyledComponents";
import { theme } from "src/theme";
import Nav from "src/components/Nav";
import Footer from "src/components/Footer";
import { useLocation } from "react-use";

const GlobalStyle = createGlobalStyle`

  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  #__next{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  html{
    font-size: 62.5%;
    background-color: ${props => props.theme.background};
  }

  div{
    /* padding: 2rem; */
    &#__next{
      padding: 0;
    }
  }

  @media (max-width: 1080px) {
    html {
      font-size: 58%;
    }
  }

  @media (max-width: 600px) {
    html{
      font-size: 50%;
    }
  }

  p {
    font-size: 1.4rem;
  }

`;
const getDocsFromLocation = (path: string | undefined) => {
  if (typeof path !== "string") {
    return false;
  }
  const paths = path.split("/");
  if (paths[1] === "docs") return true;
  return false;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isDocs = getDocsFromLocation(location.pathname);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav />
      {children}
      {!isDocs && <Footer />}
    </ThemeProvider>
  );
};

export default Layout;
