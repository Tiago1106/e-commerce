import styled from 'styled-components';
import { Form } from '@unform/web';

export const Body = styled.div``;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px 0;
`;

export const AreaTitle = styled.div`
  display: flex;
  width: 100%;
  padding-left: 17%;
  flex-direction: column;
  margin-top: 10px;
`;

export const Title = styled.h1`
  font-size: 14px;
  color: #000;
`;

export const Line = styled.div`
  width: 50px;
  height: 7px;
  border-radius: 5px;
  background-color: #666;
`;

export const DivForm = styled.div`
  width: 100%;
  height: 150px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #000;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const DivInput = styled(Form)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  button {
    width: 140px;
    height: 48px;
    color: #fff;
    background-color: #000;
    border-radius: 5px;
    border: 0;

    &:hover {
      background-color: #111;
    }
  }
`;
