import styled, { css } from "src/lib/StyledComponents";

export const Container = styled.footer`
  width: 100%;
  background-color: #282828;
  padding: 1rem 2rem;
  position: relative;
  overflow: hidden;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 1000px;
  padding: 2rem;
  flex-wrap: wrap;
  @media (max-width: 1020px) {
    width: 100%;
  }
  /* @media screen and (max-width: 700px) {
    flex-direction: column;
  } */
`;

export const DarkLogo = styled.img.attrs({
  src: "/icons/logos/dark.svg"
})`
  width: 15rem;
  height: fit-content;
  @media screen and (max-width: 600px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  margin-right: 1rem;
  position: relative;
  @media screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
    margin: 1rem 0;
  }
`;

export const baseLinkStyles = css`
  color: #626262;
  font-size: 1.5rem;
  margin: 0.1rem 0;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.primary};
  }
  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const Link = styled.a`
  ${baseLinkStyles}
  cursor: pointer;
`;
export const Anchor = styled.a`
  ${baseLinkStyles}
  text-decoration: none;
`;

export const Title = styled.h1`
  color: #e7e7e7;
  font-size: 2rem;
  font-weight: normal;
  margin: 0.5rem 0;
  @media screen and (max-width: 600px) {
    font-size: 3rem;
  }
`;

export const Copyright = styled.p`
  font-size: 2rem;
  color: #444444;
  width: 100%;
  text-align: center;
  font-weight: bold;
  margin: 0.5rem 0;
`;
