import React from "react";
// import Footer from "src/components/Footer";
import { useTitle } from "react-use";
import { Description, Title } from "src/styles/pricing";
import Column from "src/components/Column";
import TeamMateCard, { TeamMateCards } from "src/components/TeamMateCard";

const Team: React.FC = () => {
  useTitle("Craton | Team");

  return (
    <>
      <Column>
        <Title>About our Team</Title>
        <Description>
          Nec quis bibendum vestibulum at eget enim. Nec blandit lacus posuere
          nunc semper mattis nec nisi, interdum. Ultrices eget tincidunt
          pulvinar orci varius a urna scelerisque orci. Quis dignissim nunc
          blandit quam accumsan. Elit aenean nibh interdum in non felis.
        </Description>
        <Title>Our Team</Title>
        <TeamMateCards>
          <TeamMateCard
            name="Danilo de Jesus"
            ocuppation="Frontend Developer"
          />
          <TeamMateCard name="Leones" ocuppation="Backend Developer" />
        </TeamMateCards>
      </Column>
    </>
  );
};

export default Team;
