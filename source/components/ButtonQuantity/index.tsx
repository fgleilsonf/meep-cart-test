import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, Icon} from './styles';

interface ButtonQuantityProps extends TouchableOpacityProps {
  icon: string;
}

const ButtonQuantity: React.FC<ButtonQuantityProps> = ({icon, ...rest}) => {
  return (
    <Container {...rest}>
      <Icon name={icon} />
    </Container>
  );
};

export default ButtonQuantity;
