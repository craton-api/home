import styled from "src/lib/StyledComponents";
import React from "react";

export const TeamMateCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border-radius: 3px;
  overflow: hidden;
`;

export const Image = styled.img.attrs({
  src: "/members/placeholder.png"
})`
  width: 30rem;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const Info = styled.div`
  background-color: #434343;
  padding: 0.5rem 0;
`;

export const Name = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin: 0.5rem 0;
  color: white;
`;

export const Occupation = styled.p`
  text-align: center;
  font-size: 1.8rem;
  margin: 0.5rem 0;
  color: ${props => props.theme.primary};
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Icon = styled(({ type, href = "#", ...props }) => (
  <a href={href}>
    <img src={`/social/${type}.svg`} {...props} alt={type} />
  </a>
))<{
  href?: string;
  type: "linkedin" | "github" | "email";
}>`
  width: 3.5rem;
  margin: 0.5rem 1rem;
`;
