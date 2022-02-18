import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, Icon} from './styles';

import {Title} from './styles';

const ProductSuccess = ({}) => {
  const {navigate} = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigate('ProductsList');
    }, 1500);
  }, []);

  return (
    <Container>
      <Icon name={'ios-checkmark-circle-sharp'} size={28} />
      <Title>Pedido realizado com sucesso!</Title>
    </Container>
  );
};
export default ProductSuccess;
