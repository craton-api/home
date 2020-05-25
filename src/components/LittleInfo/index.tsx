import React from "react";
import { Container, Icon, Title, Description } from "./styles";

export { LittleInfos } from "./styles";

interface Props {
  title: string;
  icon: string;
  description: string;
}

const LittleInfo: React.FC<Props> = ({ title, icon, description }) => {
  return (
    <Container>
      <Icon src={icon} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default LittleInfo;
