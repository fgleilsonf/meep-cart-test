import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export const Thumbnail = styled.Image.attrs({
  resizeMode: 'contain',
})`
  border-width: 1px;
  border-color: #dde;
  background-color: #eee;
  width: 100%;
  height: 40%;
  border-radius: 20px;
`;

export const Info = styled.View`
  padding: 0 16px;
`;

export const QuantityContainer = styled.View`
  top: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.Text`
  margin-top: 16px;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;
export const Price = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #000;
`;

export const Observation = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;
