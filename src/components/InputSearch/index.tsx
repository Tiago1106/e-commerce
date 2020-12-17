import React, { InputHTMLAttributes } from 'react';
import { BsSearch } from 'react-icons/bs';

import { Container } from './styles';

interface InputPros extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
}

const InputSearch: React.FC<InputPros> = ({ name, ...rest }) => {
  return (
    <Container>
      <input {...rest} />
      <BsSearch size={12} />
    </Container>
  );
};

export default InputSearch;
