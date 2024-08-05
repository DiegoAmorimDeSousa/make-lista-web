import { Container } from './styles';

import Card from '../../components/Card/Card';

import Logo from '../../assets/title.png';

function content() {
  return <Container>
    <img src={Logo} />
    <Card />
  </Container>;
}

export default content;