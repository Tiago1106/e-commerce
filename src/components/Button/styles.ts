import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #fff;
  height: 56px;
  width: 250px;
  border-radius: 10px;
  border: 0;
  padding: 0 15px;
  color: #000;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  display: flex;
  flex-direction: row;

  &:hover {
    background: ${shade(0.2, '#fff')};
  }
`;

export const AreaIcon = styled.div`
  width: 40px;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const AreaTitle = styled.div`
  width: 170px;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;
