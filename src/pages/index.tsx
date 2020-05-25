import React from "react";
import { useTitle } from "react-use";
import ApresentationSection from "src/Sections/Apresentation";
import LittleInfo, { LittleInfos } from "src/components/LittleInfo";
import Column from "src/components/Column";

const infos = [
  {
    title: "Get started in 5 minutes",
    description:
      "Once approved, you can use your virtual card right away. You’ll receive physical cards in 3-5 business days. Easy to start, easy to scale.",
    icon: "/icons/little-infos-icons/clock.svg"
  },
  {
    title: "No personal guarantee",
    description:
      "A personal guarantee isn’t required for tech, large ecommerce, or life sciences companies. One less thing to worry about.",
    icon: "/icons/little-infos-icons/closure.svg"
  },
  {
    title: "Live customer support",
    description:
      "With live support in under 2 minutes, Brex is here whenever a question pops up.",
    icon: "/icons/little-infos-icons/shield.svg"
  }
];

const Home: React.FC = () => {
  useTitle("Craton | Home");

  return (
    <>
      <Column>
        <ApresentationSection />
        <LittleInfos>
          {infos.map(({ title, icon, description }, index) => (
            <LittleInfo
              key={index}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </LittleInfos>
      </Column>
    </>
  );
};

export default Home;
