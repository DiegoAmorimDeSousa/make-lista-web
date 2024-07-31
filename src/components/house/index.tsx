import React from 'react';

import { Container } from './styles';

import Base from '../base';
import Roof from '../roof';

const house: React.FC = () => {
  return <Container>
    <Base />
    <Roof />
  </Container>;
}

export default house;