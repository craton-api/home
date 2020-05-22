import React from "react";
import {
  Container,
  Image,
  Info,
  Name,
  Occupation,
  Social,
  Icon
} from "./styles";

export { TeamMateCards } from "./styles";

interface Props {
  name: string;
  ocuppation: string;
}

const TeamMateCard: React.FC<Props> = ({ name, ocuppation }) => {
  return (
    <Container>
      <Image />
      <Info>
        <Name>{name}</Name>
        <Occupation>{ocuppation}</Occupation>
        <Social>
          <Icon type="linkedin" />
          <Icon type="github" />
          <Icon type="email" />
        </Social>
      </Info>
    </Container>
  );
};

export default TeamMateCard;
