import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  ButtonQuantity,
  ButtonQuantityIcon,
  Container,
  Info,
  Name,
  Price,
  QuantityContainer,
  Thumbnail,
} from './styles';
import InputQuantity from '../InputQuantity';
import {CartItem, Product} from '../../types/entities';
import {useCart} from '../../context/cart';
import {find} from 'lodash';

interface ProductItemProps {
  isQuantity?: boolean;
  product: Product;
  observation?: string;
  handleRemove?: any;
  handleAdd?: any;
}

const ProductItem: React.FC<ProductItemProps> = ({
  isQuantity,
  product,
  handleRemove,
  handleAdd,
  observation,
}) => {
  const {navigate} = useNavigation();
  const [quantity, setQuantity] = useState(0);
  const {cart} = useCart();

  useEffect(() => {
    const cartItem: CartItem = find(cart, {product: product});
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cart]);

  function navigateToDetail(product: Product) {
    navigate('ProdcutDetail', {
      product,
      quantity,
      observation,
    });
  }

  return (
    <Container onPress={() => navigateToDetail(product)}>
      <Thumbnail
        source={{
          uri: product.image,
        }}
      />
      <Info>
        <Name>{product.name}</Name>
        <Price>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(product.price)}
        </Price>
      </Info>
      {isQuantity ? (
        <QuantityContainer>
          <ButtonQuantity
            disabled={quantity === 0 ? true : false}
            onPress={() => {
              handleRemove(product, quantity - 1);
            }}>
            <ButtonQuantityIcon name={'remove-outline'} />
          </ButtonQuantity>
          <InputQuantity
            quantity={quantity}
            onSubmitEditing={()=> {
              handleAdd(product, quantity);
            }}
            onChangeText={(quantityChange) => {
              setQuantity(quantityChange);
            }}
          />

          <ButtonQuantity
            onPress={() => {
              handleAdd(product, quantity + 1);
            }}>
            <ButtonQuantityIcon name={'add-outline'} />
          </ButtonQuantity>
        </QuantityContainer>
      ) : null}
    </Container>
  );
};

export default ProductItem;
