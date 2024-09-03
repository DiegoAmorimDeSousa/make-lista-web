import * as React from 'react';
import { Container, Title, Content } from './styles';

import ChooseProductModal from '../Modal/ChooseProductModal/ChooseProductModal';

interface CardProps {
  item: {
    place: string;
    itens: string[];
    map: any;
  };
  place: string;
}

const Card: React.FC<CardProps> = ({ item, place }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState({title: '', price: '', quantity: 0})
    
  return (
    <>
      {showModal && <ChooseProductModal item={selectedProduct} setShowModal={setShowModal} />}
      <Container>
        <Title>{place}</Title>
        <Content>
          {item && item?.map((i: any, index: any) => (
            <div className='input-box' key={index}>
              <div className='input-group'>
                <input type="checkbox" onChange={(e) => {
                  if(e.target.checked){
                    setSelectedProduct({ title: i.name, price: 'R$ 40,00', quantity: 5 });
                    setShowModal(!showModal)
                  }
                }}/>
                <label>{i.name}</label>
              </div>
              <div className='sub-item'>
                <a href={i.link} target='_blank' rel="noreferrer">Ir para a loja</a>
              </div>
              <div className='sub-item'>
                Quantidade disponível: {i.quantity}
              </div>
              <div className='sub-item'>
                Preço médio: R$ {i.price}
              </div>
            </div>
          ))}
        </Content>
      </Container>
    </>
  );
}

export default Card;
