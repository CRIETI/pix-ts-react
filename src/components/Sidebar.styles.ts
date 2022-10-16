import styled, { css } from "styled-components";

interface RadioProps {
  isActive: boolean;
}

export const SidebarContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 96px;
  margin-left: 6rem;

  border-bottom: 1px solid ${(props) => props.theme["gray-200"]}; ;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.56rem 7rem;
  margin-right: 6rem;

  h1 {
    font-weight: 600;
    font-size: 2.25rem;
  }
`;

export const FilterContainer = styled.form`
  display: flex;
  align-items: center;
  width: 30rem;
  margin-top: 1.6875rem;
`;

export const UserFilter = styled.div`
  display: flex;
  align-items: center;
  width: 30rem;

  input {
    background: none;
    border: none;
    border-bottom: 1px solid var(--gray-900);
    width: 12.5rem;
    line-height: 26px;
    margin-left: 0.5rem;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Para chegar nesse resultado, fui pesquisando no google maneiras, peguei um pouco de cada explicação e construí meu próprio Radio Button :)
export const Radio = styled.div<RadioProps>`
  input {
    display: none;
  }
  label {
    margin: 0 1rem;
    color: ${(props) => props.theme.fontColor};
    font-weight: 700;
    line-height: 26px;

    ${({ isActive }) =>
      isActive &&
      css`
        border-bottom: 2px solid ${(props) => props.theme.primary};
      `}
  }
`;

export const ButtonContainer = styled.button`
  width: 7rem;
  height: 2rem;
  font-weight: 500;
  font-size: 1rem;
  border: none;
  border-radius: 8px;

  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
`;
