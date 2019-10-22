import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import colors from '../../global/colors';

export const Container = styled.View`
  flex-direction: row;
  width: 90%;
  align-items: center;
  align-self: center;
  background-color: ${colors.light};
  border-radius: 5px;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 43px;
  padding: 10px;
  color: ${colors.text.grey01};
`;

export const IconVector = styled(Icon)`
  color: ${colors.grey.g01};
  margin-left: 10px;
`;
