import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 500px;
  height: 30px;
  padding: 0 5px;
  border-bottom: 1px solid #333;
  margin: 0 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  input {
    display: flex;
    height: 30px;
    width: 100%;
    background-color: transparent;
    border: 0;
    color: #333;
    font-size: 12px;

    &::placeholder {
      color: #666360;
      font-size: 10px;
    }
  }
`;
