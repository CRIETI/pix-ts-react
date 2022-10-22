import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  margin: 3rem 10rem 3rem 5rem;
`;

export const CreatePix = styled.button`
  width: 7rem;
  height: 3rem;
  font-weight: 500;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
`;
