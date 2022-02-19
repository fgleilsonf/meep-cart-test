import React, {useEffect, useState} from 'react';
import {Keyboard, TouchableOpacityProps} from 'react-native';

import {Container, Title} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  style?: object;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({title, style, disabled, ...rest}) => {
  const [isKeyBoardVisible, setBoardVisible] = useState(false);

  useEffect(() => {
    const KeyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setBoardVisible(true);
      },
    );
    const KeyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setBoardVisible(false);
      },
    );
    return () => {
      KeyboardDidShowListener.remove();
      KeyboardDidHideListener.remove();
    };
  }, []);

  if (isKeyBoardVisible) {
    return null;
  }

  return (
    <Container disabled={disabled} style={style} {...rest}>
      <Title disabled={disabled}>{title}</Title>
    </Container>
  );
};
export default Button;
