import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Container} from './styles';

const Loader = (props: any = {}) => (
  <Container>
    <ActivityIndicator />
  </Container>
);

export default Loader;
