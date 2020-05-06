import styled, { css } from "src/lib/StyledComponents";
import OffsetedLink from "../OffsetedLink";

export const Container = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.darkDarkGray};
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
  @media (max-width: 1020px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const DarkLogo = styled.img.attrs({
  src: "/icons/logos/dark.svg"
})`
  width: 10rem;
  height: 10rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  margin-right: 1rem;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    left: -2rem;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    width: 3px;
    background-color: ${props => props.theme.darkGray};
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const baseLinkStyles = css`
  color: ${props => props.theme.lightGray1};
  font-size: 2.3rem;
  margin: 0.1rem 0;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

export const Link = styled(OffsetedLink)`
  ${baseLinkStyles}
  cursor: pointer;
`;
export const Anchor = styled.a`
  ${baseLinkStyles}
  text-decoration: none;
`;

export const Title = styled.h1`
  color: ${props => props.theme.darkGray};
  font-size: 3rem;
  margin: 0.5rem 0;
`;

export const Copyright = styled.p`
  font-size: 2rem;
  color: ${props => props.theme.darkGray};
  width: 100%;
  text-align: center;
  font-weight: bold;
  margin: 1rem 0;
`;

const StrokeStyles = css`
  width: 100rem;
  height: 4rem;
  position: absolute;
  bottom: 0;
  right: -2rem;
  transform: rotate(-45deg);
  transform-origin: right;
  @media screen and (max-width: 500px) {
    height: 2rem;
  }
`;

export const PrimaryStroke = styled.div`
  ${StrokeStyles}
  bottom: 18rem;
  background-color: ${props => props.theme.primary};
  @media screen and (max-width: 500px) {
    bottom: 8rem;
  }
`;

export const SecondaryStroke = styled.div`
  ${StrokeStyles}
  background-color: ${props => props.theme.white};
  bottom: 10rem;
  @media screen and (max-width: 500px) {
    bottom: 3rem;
  }
`;
