import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useColorScheme} from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

import Products from '../screens/Products';
import ProductDetail from "../screens/ProductDetail";
import Cart from "../screens/Cart";
import ProductSuccess from "../screens/CartSuccess";

const RootNavigation = createNativeStackNavigator();

const RootStack = () => {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigation.Navigator
        screenOptions={{
          headerShown: true,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          headerStyle: {
            backgroundColor: '#ed011d',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <RootNavigation.Screen
          options={{
            title: 'Catálogo',
          }}
          name="ProductsList"
          component={Products}
        />

        <RootNavigation.Screen
          options={{
            title: 'Produto',
          }}
          name="ProdcutDetail"
          component={ProductDetail}
        />
        <RootNavigation.Screen
          options={{
            title: 'Carrinho',
          }}
          name="Cart"
          component={Cart}
        />
        <RootNavigation.Screen
          options={{
            title: 'Sucesso ',
          }}
          name="CartSuccess"
          component={ProductSuccess}
        />
      </RootNavigation.Navigator>
    </NavigationContainer>
  );
};

const AppNavigation: React.FC = () => RootStack();

export default AppNavigation;
