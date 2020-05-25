import styled from "styled-components";

export const LittleInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 700px) {
    /* width: 90%; */
    flex-direction: column;
    /* margin: 1rem auto; */
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  flex: 1;
`;

export const Icon = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 0.5rem 0;
`;

export const Title = styled.h2`
  margin: 0.5rem 0;
`;

export const Description = styled.p``;
