import React from 'react';

import {Container, Input, IconVector as Icon} from './styles';
import {translate} from '../../locales';

const Searchbar = (props: any = {}) => (
  <Container>
    <Icon name="search" size={20} />
    <Input
      value={props.value}
      onChangeText={props.handleInput}
      onBlur={props.handleSearch}
      placeholder={translate(['searchbar', 'placeholder'])}
    />
  </Container>
);

export default Searchbar;
