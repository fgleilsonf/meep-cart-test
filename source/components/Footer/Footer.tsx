import React from 'react';

import {
  CartIcon,
  CartLabel,
  Container,
  Info,
  ProductsQuantity,
  TotalValue,
} from './styles';
import { TouchableOpacityProps } from "react-native";

interface FooterProps extends TouchableOpacityProps {
  countItems: number;
  amount: number;
}

const Footer: React.FC<FooterProps> = ({countItems, amount, ...rest}) => {
  return (
    <Container {...rest}>
      <ProductsQuantity>{countItems} Produtos</ProductsQuantity>
      <Info>
        <CartIcon name={countItems > 0 ? 'cart' : 'cart-outline'} size={22} />
        <CartLabel>Carrinho</CartLabel>
        <TotalValue>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(amount)}
        </TotalValue>
      </Info>
    </Container>
  );
};

export default Footer;
