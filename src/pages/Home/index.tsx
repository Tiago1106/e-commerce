import React, { useEffect, useState, useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../services/api';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import CardProduct from '../../components/Product';
import Input from '../../components/Input';
import Footer from '../../components/Footer';

import { useToast } from '../../hooks/toast';

import { ProductDtos } from '../../dtos';

import {
  Container,
  AreaTitle,
  Line,
  Title,
  DivForm,
  DivInput,
  Body,
} from './styles';

interface ParticipateFormData {
  name: string;
  email: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductDtos[]>([]);
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  useEffect(() => {
    async function requestProduct(): Promise<void> {
      const { data } = await api.get('/products');
      setProducts(data);
    }
    requestProduct();
  }, []);

  const handleParticipate = useCallback(
    async (data: ParticipateFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail valido'),
          name: Yup.string().required('Nome obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/newsletter', data);
        addToast({
          type: 'success',
          title: 'Sucesso',
          description: 'Você já está participando!',
        });
      } catch (err) {
        err.errors.map((error: string) => {
          return addToast({
            type: 'error',
            title: error,
            description: 'Erro ao tentar participar',
          });
        });
      }
    },
    [addToast],
  );

  return (
    <>
      <Header />
      <Body>
        <Banner />
        <AreaTitle>
          <Title>Mais vendidos</Title>
          <Line />
        </AreaTitle>
        <Container>
          {products.map((product: ProductDtos) => (
            <CardProduct
              key={product.productId}
              image={product.imageUrl}
              name={product.productName}
              installment={product.installments[0]}
              listPrice={product.listPrice}
              price={product.price}
              stars={product.stars}
            />
          ))}
        </Container>
        <DivForm>
          <h1>Participe de nossas news com promoções e novidade!</h1>
          <DivInput ref={formRef} onSubmit={handleParticipate}>
            <Input name="name" placeholder="Digite seu nome" />
            <Input name="email" placeholder="Digite seu email" />
            <button type="submit">Eu quero!</button>
          </DivInput>
        </DivForm>
      </Body>
      <Footer />
    </>
  );
};

export default Home;
