import * as React from 'react';
import { Container, Title, Content } from './styles';

import ChooseProductModal from '../Modal/ChooseProductModal/ChooseProductModal';

interface CardProps {
  item: {
    comodo: string;
    itens: string[];
  };
}

const Card: React.FC<CardProps> = ({ item }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState({title: '', price: '', quantity: 0})
    
  return (
    <>
      {showModal && <ChooseProductModal item={selectedProduct} setShowModal={setShowModal} />}
      <Container>
        <Title>{item.comodo}</Title>
        <Content>
          {item.itens.map((i, index) => (
            <div className='input-box' key={index}>
              <div className='input-group'>
                <input type="checkbox" onChange={(e) => {
                  if(e.target.checked){
                    setSelectedProduct({ title: i, price: 'R$ 40,00', quantity: 5 });
                    setShowModal(!showModal)
                  }
                }}/>
                <label>{i}</label>
              </div>
              <div className='sub-item'>
                <a href="https://is.gd/5MwQGP" target='_blank' rel="noreferrer">Ir para a loja</a>
              </div>
              <div className='sub-item'>
                Quantidade disponível: 5
              </div>
              <div className='sub-item'>
                Preço médio: R$ 40,00
              </div>
            </div>
          ))}
        </Content>
      </Container>
    </>
  );
}

export default Card;
