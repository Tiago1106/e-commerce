import React from 'react';

import { FaHeadphonesAlt } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import Patrocionios from '../../assets/patrocinio.png';

import Button from '../Button';

import {
  Container,
  Line,
  SubTitleLoc,
  TitleLoc,
  AreaButton,
  AreaLoc,
  AreaPat,
} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <AreaLoc>
        <TitleLoc>Localização</TitleLoc>
        <Line />
        <SubTitleLoc>Avenida Andrômeda, 2000. Bloco 6 e 8</SubTitleLoc>
        <SubTitleLoc>Alphavile SP</SubTitleLoc>
        <SubTitleLoc>brasil@corebiz.ag</SubTitleLoc>
        <SubTitleLoc>+55 11 3090 1039</SubTitleLoc>
      </AreaLoc>
      <AreaButton>
        <Button icon={MdMail}>ENTRE EM CONTATO</Button>
        <Button icon={FaHeadphonesAlt}>
          FALE COM O NOSSO CONSULTOR ONLINE
        </Button>
      </AreaButton>
      <AreaPat>
        <img src={Patrocionios} alt="patrocionios" width={200} />
      </AreaPat>
    </Container>
  );
};

export default Footer;
