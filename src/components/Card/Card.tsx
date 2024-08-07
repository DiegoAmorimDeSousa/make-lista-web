import React from 'react';
import { Container, Title, Content } from './styles';

interface CardProps {
  item: {
    comodo: string;
    itens: string[];
  };
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <Container>
      <Title>{item.comodo}</Title>
      <Content>
        {item.itens.map((i, index) => (
          <div className='input-box' key={index}>
            <div className='input-group'>
              <input type="checkbox" />
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
  );
}

export default Card;
