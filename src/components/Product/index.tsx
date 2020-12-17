import React from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';

import { useCart } from '../../hooks/cart';

import { Installments } from '../../dtos';

import {
  Container,
  Image,
  Div,
  Title,
  Price,
  PriceOff,
  AreaStars,
  Triagle,
  TitleTiagle,
} from './styles';

interface ProductProps {
  image: string;
  name: string;
  price: number;
  listPrice: number | null;
  installment: Installments | undefined;
  stars: number;
}

const Product: React.FC<ProductProps> = ({
  image,
  installment,
  listPrice,
  name,
  price,
  stars,
}) => {
  const { addToCart } = useCart();

  return (
    <Container>
      <Image style={{ backgroundImage: `url(${image})` }}>
        {listPrice !== null && (
          <Triagle>
            <TitleTiagle>OFF</TitleTiagle>
          </Triagle>
        )}
      </Image>
      <Div>
        <Title>{name}</Title>
        <AreaStars>
          {[1, 2, 3, 4, 5].map((element: number) => {
            if (element <= stars) {
              return <BsStarFill key={element} size={15} color="#F8475F" />;
            }
            return <BsStar key={element} size={15} color="#F8475F" />;
          })}
        </AreaStars>
        {listPrice !== null ? (
          <PriceOff>{`de R$ ${(listPrice / 100).toFixed(2)}`}</PriceOff>
        ) : (
          <AreaStars />
        )}
        <Price>{`por R$ ${(price / 100).toFixed(2)}`}</Price>
        {installment !== undefined ? (
          <PriceOff>
            {`ou em ${installment.quantity}x de R$ ${(
              installment.value / 100
            ).toFixed(2)}`}
          </PriceOff>
        ) : (
          <AreaStars />
        )}
        <button type="button" onClick={() => addToCart()}>
          COMPRAR
        </button>
      </Div>
    </Container>
  );
};

export default Product;
