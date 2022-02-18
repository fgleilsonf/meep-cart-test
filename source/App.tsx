import React, {useRef} from 'react';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Navigation from './navigation';
import CartProvider from './context/cart';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <CartProvider>
      <Navigation />
      <StatusBar barStyle={'light-content'} backgroundColor={'#ed011d'} />
    </CartProvider>
  );
};

export default App;
