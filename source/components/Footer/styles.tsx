import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  padding: 10px;
  border-top-width: 1px;
  border-top-color: #8e8c8c;
  background-color: #eee;

  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  align-self: center;
  bottom: 0px;
`;

export const Info = styled.View`
  flex-direction: row;
`;

export const ProductsQuantity = styled.Text`
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const CartLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const TotalValue = styled.Text`
  font-size: 18px;
  margin-left: 10px;
`;

export const CartIcon = styled(Ionicons)`
  padding-right: 10px;
`;
