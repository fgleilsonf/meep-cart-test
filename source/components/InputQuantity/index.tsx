import React from 'react';
import {TextInputAndroidProps} from 'react-native';
import {Container} from './styles';

interface inputProps extends TextInputAndroidProps {
  quantity: number;
}

const InputQuantity: React.FC<inputProps> = ({quantity, ...rest}) => {
  return (
    <>
      <Container
        value={String(quantity)}
        placeholder={'0'}
        placeholderTextColor={'#000'}
        returnKeyType={'next'}
        keyboardAppearance={'dark'}
        keyboardType={'numeric'}
        style={{textAlign: 'center'}}
        {...rest}
      />
    </>
  );
};

export default InputQuantity;
