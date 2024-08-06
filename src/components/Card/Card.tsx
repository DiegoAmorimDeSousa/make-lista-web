import React from 'react';
import { Container, Title } from './styles';

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
      <div className='content'>
        {item.itens.map((i, index) => (
          <div className='input-box'>
            <input type="checkbox" />
            <label>{i}</label>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Card;
