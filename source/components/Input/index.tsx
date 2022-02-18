import React from 'react';
import {TextInputProps} from "react-native";
import {Container, TextInput} from './styles';

interface InputProps extends TextInputProps {

}

const Input = ({...rest}: InputProps) => {
  return (
    <Container>
      <TextInput
        placeholder={'Observação'}
        placeholderTextColor={'#737373'}
        keyboardAppearance={'dark'}
        {...rest}
      />
    </Container>
  );
};

export default Input;
