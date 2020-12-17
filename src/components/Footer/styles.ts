import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 213px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: #000;
  padding: 10px 300px;
`;

export const AreaLoc = styled.div`
  width: 33%;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const AreaButton = styled.div`
  width: 33%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const AreaPat = styled.div`
  width: 33%;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;

export const TitleLoc = styled.h1`
  font-size: 16px;
  color: #fff;
  margin-bottom: 10px;
`;

export const Line = styled.div`
  width: 50px;
  height: 7px;
  border-radius: 5px;
  background-color: #fff;
`;

export const SubTitleLoc = styled.h2`
  font-size: 12px;
  color: #fff;
  margin-top: 5px;
`;
