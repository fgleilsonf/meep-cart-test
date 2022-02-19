import React, {useState} from 'react';

import {Container, TotalLabel, TotalValue, FooterCart} from './styles';
import {Alert, FlatList} from 'react-native';
import {useCart} from '../../context/cart';
import ProductItem from '../../components/ProductItem';
import Button from '../../components/Button';
import EmptyView from '../../components/EmptyView';
import {useNavigation} from '@react-navigation/native';
import {Product} from '../../types/entities';
import Loading from '../../components/Loading';
import {Api} from '../../services/api';

const Cart = ({}) => {
  const {cart, totalValue, addProduct, clearCart} = useCart();
  const [loading, setLoading] = useState(false);
  const {navigate} = useNavigation();

  const sendCart = (): Promise => {
    const promise = new Promise(async (resolve)=> {
      const payload = cart.map(item => ({
        product_id: item.product.id,
        quantity: item.quantity,
        observation: item.observation,
      }));

      await Api.Products.list(); // Simulação da API de enviar pedido

      setTimeout(()=> {
        resolve();
      }, 2000);
    });

    return promise;
  }

  const handleSubmit = async () => {
    if (!cart.length) {
      Alert.alert('Não há itens no carrinho!');
      return;
    }

    try {
      setLoading(true);
      await sendCart();

      await clearCart();
      navigate('CartSuccess');
    } catch (e) {
      Alert.alert('Não foi possível enviar o pedido! Tente novamente!');
    } finally {
      setLoading(false);
    }
  };

  const handleAddProduct = (product: Product, quantity: number) => {
    addProduct(product, quantity);
  };

  if (loading) {
    return <Loading>Enviando pedido...</Loading>;
  }

  return (
    <>
      <Container>
        <FlatList
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          data={cart}
          keyExtractor={item => String(item.product.id)}
          ListEmptyComponent={
            <EmptyView
              title={'Não há itens no carrinho'}
              icon={'add-shopping-cart'}
            />
          }
          renderItem={({item}) => {
            console.log('item', item);
            return (
              <ProductItem
                isQuantity={true}
                quantity={item.quantity}
                observation={item.observation}
                product={item.product}
                handleRemove={handleAddProduct}
                handleAdd={handleAddProduct}
              />
            );
          }}
        />
        <FooterCart>
          <TotalLabel>Total</TotalLabel>
          <TotalValue>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(totalValue)}
          </TotalValue>
        </FooterCart>
        <Button
          disabled={cart.length === 0}
          onPress={handleSubmit}
          title={'Enviar Pedido'}
        />
      </Container>
    </>
  );
};

export default Cart;
