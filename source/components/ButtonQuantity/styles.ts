import styled from 'styled-components/native';
import Ionicons from "react-native-vector-icons/Ionicons";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  border-width: 1px;
  border-color: #333;
  width: 40px;
  height: 40px;
  background-color: ${props => (props.disabled ? '#ddd' : 'white')};
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Ionicons).attrs({
  size: 20,
})`
  color: #000;
`;
