import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from "../../values";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Ionicons).attrs({
  size: 50,
})`
  color: ${colors.primary_color};
`;

export const Title = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 24px;
`;
