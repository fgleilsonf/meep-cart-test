import styled from 'styled-components/native';
import {colors} from '../../values';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  height: 40px;
  border-width: 1px;
  border-color: ${props => (props.disabled ? '#ddd' : colors.primary_color)};
  border-radius: 8px;

  justify-content: center;
  align-items: center;
  background-color: ${props => (props.disabled ? '#fff' : colors.primary_color)};
`;

export const Title = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${props => (props.disabled ? '#000' : '#fff')};
`;
