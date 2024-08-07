import { Container } from './styles';
import Card from '../../components/Card/Card';
import Logo from '../../assets/title.png';

const ITEMS = [
  {
    comodo: 'Cozinha',
    itens: [
      'Jogo de prato',
      'Escorredor',
      'Apoio de prato'
    ]
  },
  {
    comodo: 'Quarto',
    itens: [
      'Jogo de lençol',
      'Cobertor',
      'Ventilador'
    ]
  },
  {
    comodo: 'Banheiro',
    itens: [
      'Limpador',
      'Toalha de rosto',
      'Toalha de banho'
    ]
  }
];

function Content() {
  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <div className='card-content'>
        {ITEMS.map(item => (
          <Card key={item.comodo} item={item} />
        ))}
      </div>
    </Container>
  );
}

export default Content;
