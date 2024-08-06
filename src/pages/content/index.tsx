import { Container } from './styles';
import Card from '../../components/Card/Card';
import Logo from '../../assets/title.png';

const ITEMS = [
  {
    comodo: 'Cozinha',
    itens: [
      'item 1',
      'item 2',
      'item 3'
    ]
  }
];

function Content() {
  return (
    <Container>
      <img src={Logo} alt="Logo" />
      {ITEMS.map(item => (
        <Card key={item.comodo} item={item} />
      ))}
    </Container>
  );
}

export default Content;
