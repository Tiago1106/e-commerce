import styled, { css } from 'styled-components';

interface PropsColor {
  position: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 430px;
  background-position: center;
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

export const AreaInfo = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AreaTitle = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
`;

export const AreaCircle = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Circle = styled.div<PropsColor>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #666;
  margin: 2.5px;

  ${(props) =>
    props.position &&
    css`
      background-color: #f8475f;
    `}
`;

export const Title = styled.span`
  font-size: 16px;
  color: #fff;
`;

export const SubTitle = styled.span`
  font-size: 18px;
  color: #fff;
`;
