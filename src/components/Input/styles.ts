import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 10px;
  border: 2px solid;
  border-color: #fff;
  width: 280px;
  height: 48px;
  color: #000;
  margin-right: 10px;
  display: flex;
  align-items: center;
  padding: 5px;


  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #000-;
      border-color: #ddd;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ddd;
    `}

  input {
    flex: 1;
    background-color: transparent;
    border: 0;
    color: #222;
    font-size: 14px;

    &::placeholder {
      color: #444;
      font-size: 14px;
    }
  }
`;
