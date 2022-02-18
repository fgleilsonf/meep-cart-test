import React from 'react';
import {Container, Title} from './styles';
import {ActivityIndicator} from 'react-native';
import {colors} from '../../values';

interface LoadingProps {
  children: string;
}

const Loading: React.FC<LoadingProps> = ({children}) => {
  return (
    <Container>
      <ActivityIndicator size={'large'} color={colors.primary_color} />
      <Title>{children}</Title>
    </Container>
  );
};
export default Loading;
