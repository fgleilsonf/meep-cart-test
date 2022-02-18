import styled from 'styled-components/native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: rgba(0, 0, 0, 0.54);
  font-size: 20px;
  line-height: 22px;
`;

export const CartIcon = styled(MaterialIcons)`
  padding-right: 10px;
`;
