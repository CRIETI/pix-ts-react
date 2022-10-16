import styled from "styled-components";

export const DivContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10.75rem;

  a {
    width: 17rem;
    height: 5rem;
    font-weight: 500;
    font-size: 2rem;
    border: none;
    border-radius: 8px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
  }
`;
