import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: #fff;
  padding: 10px 10%;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  img {
    margin-right: 40px;
  }
`;

export const AreaMyAccount = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 0 10px;
`;

export const TextAccount = styled.span`
  font-size: 12px;
  color: #444;
`;

export const AreaCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const CircleCount = styled.div`
  display: flex;
  width: 12px;
  height: 12px;
  background-color: #f8475f;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const Count = styled.span`
  font-size: 8px;
  color: #fff;
`;
