import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { TiShoppingCart } from 'react-icons/ti';

import logoImg from '../../assets/logo.png';

import { useCart } from '../../hooks/cart';

import Input from '../InputSearch';

import {
  Container,
  AreaMyAccount,
  TextAccount,
  AreaCart,
  CircleCount,
  Count,
} from './styles';

const Header: React.FC = () => {
  const { cart } = useCart();

  return (
    <Container>
      <img src={logoImg} alt="logoCorebiz" />
      <Input name="search" placeholder="O que está procurando?" />
      <AreaMyAccount>
        <AiOutlineUser size={15} />
        <TextAccount>Minha conta</TextAccount>
      </AreaMyAccount>
      <AreaCart>
        <TiShoppingCart size={20} />
        <CircleCount>
          <Count>{cart}</Count>
        </CircleCount>
      </AreaCart>
    </Container>
  );
};

export default Header;
