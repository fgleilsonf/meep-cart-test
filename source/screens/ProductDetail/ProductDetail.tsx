import React, {useEffect, useState} from 'react';
import {useRoute, useNavigation, StackActions} from '@react-navigation/native';
import {
  Container,
  Thumbnail,
  Name,
  Price,
  Observation,
  Info,
  QuantityContainer,
} from './styles';
import Input from '../../components/Input';
import {useCart} from '../../context/cart';
import InputQuantity from '../../components/InputQuantity';
import ButtonQuantity from '../../components/ButtonQuantity';
import Button from '../../components/Button';
import {CartItem, Product} from '../../types/entities';
import {find} from 'lodash';

interface params {
  product: Product;
}

const ProductDetail: React.FC = () => {
  const {cart} = useCart();
  const {params} = useRoute();
  const {product} = params as params;
  const [quantity, setQuantity] = useState(0);
  const [observation, setObservation] = useState<string>('');
  const {addProduct} = useCart();
  const {navigate, dispatch} = useNavigation();

  useEffect(() => {
    const cartItem: CartItem = find(cart, {product: product});
    if (cartItem) {
      setObservation(cartItem.observation);
      setQuantity(cartItem.quantity);
    }
  }, [cart]);

  const handleAddProduct = () => {
    addProduct(product, quantity, observation);
    dispatch(StackActions.popToTop());
    navigate('Cart');
  };

  return (
    <Container>
      <Thumbnail source={{uri: product.image}} />
      <Info>
        <Name>{product.name}</Name>
        <Price>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(product.price)}
        </Price>
        <Observation>Observação</Observation>
        <Input
          value={observation}
          onChangeText={text => {
            setObservation(text);
          }}
        />
      </Info>
      <QuantityContainer>
        <ButtonQuantity
          disabled={quantity === 0 ? true : false}
          icon={'remove-outline'}
          onPress={() => {
            setQuantity(quantity - 1);
          }}
        />
        <InputQuantity
          value={String(quantity)}
          onChangeText={(value: string) => setQuantity(value)}
        />
        <ButtonQuantity
          icon={'add-outline'}
          onPress={() => {
            setQuantity(quantity + 1);
          }}
        />
        <Button
          onPress={handleAddProduct}
          title={'Adicionar'}
          style={{
            marginLeft: 8,
            width: '65%',
          }}
        />
      </QuantityContainer>
    </Container>
  );
};

export default ProductDetail;
