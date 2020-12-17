import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, AreaIcon, AreaTitle } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
interface ButtonPropsIcon {
  icon: React.ComponentType<IconBaseProps>;
}

const Button: React.FC<ButtonProps & ButtonPropsIcon> = ({
  children,
  icon: Icon,
  ...rest
}) => (
  <Container type="button" {...rest}>
    <AreaIcon>
      <Icon size={20} color="#000" />
    </AreaIcon>
    <AreaTitle>{children}</AreaTitle>
  </Container>
);

export default Button;
