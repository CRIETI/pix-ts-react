import styled, { css } from "styled-components";

interface DivContainerProps {
  isNew: boolean;
}

interface TypePixProps {
  type: number;
}

export const DivContainer = styled.div<DivContainerProps>`
  width: 100%;
  height: 5.5rem;
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 8px;

  ${({ isNew }) =>
    isNew &&
    css`
      background: ${(props) => props.theme["primary-gradient"]};
    `}

  strong {
    flex: 1;
    font-weight: 700;
    font-size: 1.25rem;
    margin-left: 3rem;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 3.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewPixContainer = styled.div`
  width: 3.5rem;
  height: 1.6875rem;
  background: var(--green-100);
  border-radius: 8px;

  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -3rem;
  margin-top: 2rem;

  span {
    color: var(--white);
  }
`;

export const TypePix = styled.strong<TypePixProps>`
  ${({ type }) =>
    type === 1
      ? css`
          color: ${(props) => props.theme["green-200"]};
        `
      : css`
          color: ${(props) => props.theme["red-500"]};
        `}
`;
