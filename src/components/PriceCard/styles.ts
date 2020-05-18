import styled from "src/lib/StyledComponents";

export const PriceCards = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  width: calc(33.3% - 2rem);
  display: flex;
  flex-direction: column;
  background-color: #3d3d3d;
  margin: 1rem;
  @media screen and (max-width: 600px) {
    width: 90%;
    margin: 1rem auto;
  }
`;

export const Head = styled.div`
  background-color: #4f4f4f;
  color: white;
  padding: 0.5rem 0;
  text-align: center;
  font-size: 2.5rem;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1.5rem 1rem;
  align-items: center;
`;

export const Number = styled.p`
  color: ${props => props.theme.primary};
  font-size: 5rem;
  margin: 0;
`;

export const Time = styled.p`
  color: white;
  font-size: 3rem;
  margin: 0;
`;

export const Advantages = styled.ul`
  width: 100%;
  margin: 0;
  padding: 1rem 0;
`;

export const Advantage = styled.li`
  text-align: center;
  list-style: none;
  margin: 0.5rem 0;
  color: #bfbfbf;
  font-size: 2rem;
  padding: 0 0.5rem;
`;

export const Button = styled.button`
  width: 80%;
  margin: 1rem auto;
  color: white;
  background-color: ${props => props.theme.primary};
  border: none;
  padding: 1rem 2rem;
  font-size: 2rem;
`;
