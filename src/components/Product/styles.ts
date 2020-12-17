import styled from 'styled-components';

export const Container = styled.div`
  width: 216px;
  height: 400px;
  margin: 15px 30px;
`;

export const Image = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  justify-content: flex-end;
`;

export const Div = styled.div`
  display: flex;
  width: 100%;
  height: 170px;
  align-items: center;
  flex-direction: column;
  padding: 15px 0 0 0;

  button {
    display: flex;
    width: 125px;
    height: 32px;
    background-color: #000;
    color: #fff;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 0;
    opacity: 0;
    font-size: 12px;
    margin-top: 15px;

    &:hover {
      background-color: #111;
    }
  }

  &:hover {
    background-color: #eee;

    button {
      opacity: 1;
    }
  }
`;

export const Title = styled.h2`
  font-size: 12px;
  color: #666;
`;

export const Price = styled.h1`
  font-size: 16px;
  color: #000;
`;

export const PriceOff = styled.h3`
  font-size: 10px;
  color: #666;
  margin-top: 10px;
`;

export const AreaStars = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Triagle = styled.div`
  width: 0;
  height: 0;
  display: flex;
  border-top: 70px solid #f8475f;
  border-left: 70px solid transparent;
`;

export const TitleTiagle = styled.h1`
  display: flex;
  font-size: 12px;
  color: #fff;
  margin-top: -55px;
  margin-left: -30px;
`;
