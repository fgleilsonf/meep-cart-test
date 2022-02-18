import React, {useCallback, useEffect, useState} from 'react';

import {Container} from './Products.style';
import { FlatList, Text } from "react-native";
import {useCart} from '../../context/cart';
import {Api} from '../../services/api';
import {Product} from '../../types/entities';
import ProductItem from "../../components/ProductItem";
import Footer from "../../components/Footer";
import { useNavigation } from "@react-navigation/native";
import EmptyView from "../../components/EmptyView";

const Products = ({}) => {
  const {cart, totalValue} = useCart();
  const {navigate} = useNavigation();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      const {data} = await Api.Products.list();
      setProducts([...data]);
    } catch (e) {

    } finally {
      setLoading(false);
    }
  }, [setProducts]);

  useEffect(() => {
    loadProducts().then();
  }, [loadProducts]);

  return (
    <>
      <Container>
        <FlatList
          contentContainerStyle={{flexGrow: 1}}
          data={products}
          onRefresh={loadProducts}
          refreshing={loading}
          ListEmptyComponent={
            <EmptyView
              title={'Não há produtos para exibir'}
              icon={'remove-shopping-cart'}
            />
          }
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <ProductItem product={item} />}
        />
      </Container>
      <Footer
        amount={totalValue}
        countItems={cart.length}
        onPress={()=> navigate("Cart")}
      />
    </>
  );
};

export default Products;
