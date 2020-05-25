import styled from "src/lib/StyledComponents";

export const ApresentationImage = styled.img.attrs({
  src: "/images/apresentation.svg"
})`
  width: 40%;
  max-width: 300rem;
  margin: 1rem 3rem;
  @media (max-width: 800px) {
    width: 90%;
    margin: 1rem auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export const ApresentationInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 3rem;
  @media (max-width: 800px) {
    margin: 1rem auto;
  }
`;

export const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  border: none;
  border-radius: 4px;
  margin: 1rem 0;
  padding: 1rem 4rem;
  width: fit-content;
  cursor: pointer;
`;

export const BigText = styled.h1`
  font-size: 4.5rem;
  font-weight: bold;
  color: ${props => props.theme.white};
  margin: 0.5rem 0;
`;

export const Description = styled.p`
  font-size: 2rem;
  margin: 0.5rem 0;
  color: #dcdcdc;
  color: ${props => props.theme.white};
`;
