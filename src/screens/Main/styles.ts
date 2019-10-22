import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import colors from '../../global/colors';

export const Creator = styled.Text`
  font-size: 16px;
  color: ${colors.text.dark};
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const Description = styled.View`
  flex: 1;
  padding: 10px;
  margin-left: 10px;
  border-bottom-width: 0.2px;
  border-bottom-color: ${colors.grey.g02};
`;

export const IconVector = styled(Icon)`
  margin-right: 10px;
  color: ${colors.grey.g01};
`;

export const Info = styled.View``;

export const List = styled.ScrollView.attrs({})`
  padding: 27px 10px;
`;

export const ListItem = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Placeholder = styled.View`
  padding: 10px 0;
  align-items: center;
  justify-content: center;
`;

export const PlaceholderText = styled.Text`
  font-size: 14px;
  color: ${colors.grey.g01};
`;

export const Repository = styled.Text`
  font-size: 14px;
  color: ${colors.grey.g01};
`;

export const SafeArea = styled.SafeAreaView`
  background-color: ${colors.white};
`;

export const Title = styled.Text`
  font-size: 35px;
  font-weight: bold;
  text-align: left;
  padding: 20px;
  color: ${colors.dark};
`;

export const Thumbnail = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  resize-mode: contain;
`;
