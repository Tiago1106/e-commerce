import React from 'react';

import Image from '../../assets/Banner.png';

import {
  Container,
  SubTitle,
  Title,
  AreaInfo,
  AreaCircle,
  AreaTitle,
  Circle,
} from './styles';

const Banner: React.FC = () => {
  return (
    <Container style={{ backgroundImage: `url(${Image})` }}>
      <AreaInfo>
        <AreaTitle>
          <Title>Olá, o que você está buscando?</Title>
          <SubTitle>Criar ou migrar seu e-commerce?</SubTitle>
        </AreaTitle>
        <AreaCircle>
          {[0, 1, 2, 3].map((element: number, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <Circle key={index} position={index === 0} />
          ))}
        </AreaCircle>
      </AreaInfo>
    </Container>
  );
};

export default Banner;
