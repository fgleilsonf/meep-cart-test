import styled from 'styled-components/native';
import Ionicons from "react-native-vector-icons/Ionicons";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  border: 1px #c3c3c3;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 8px;

  flex-direction: row;
`;

export const Info = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;

export const Thumbnail = styled.Image.attrs({
  resizeMode: 'contain',
})`
  background-color: #dde;
  width: 80px;
  height: 60px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Price = styled.Text`
  font-size: 18px;
`;

export const ButtonQuantity = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  border-width: 1px;
  border-color: #333;
  width: 40px;
  height: 40px;

  justify-content: center;
  align-items: center;
`;

export const QuantityContainer = styled.View`
  flex:1;
  flex-direction: row;
  align-items: flex-end;
 justify-content: flex-end;
`;

export const ButtonQuantityInputContainer = styled.View`
  width: 40px;
  height: 40px;
  border-width: 1px;
  border-color: #333;
  background-color: #ffffff;
  margin-horizontal: 4px;
`;

export const ButtonQuantityIcon = styled(Ionicons).attrs({
  size: 20,
})`
  color: #000;
`;
