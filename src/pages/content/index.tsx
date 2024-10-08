import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { Container } from './styles';
import Card from '../../components/Card/Card';
import Logo from '../../assets/title.png';

function Content() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const config = {
          headers: {
            'Custom-Header': 'ValorPersonalizado',
            'Content-Type': 'application/json' 
          }
        };
        const response = await axios.get('https://make-list-seven.vercel.app/itens', config)
        setItems(response.data); 
      } catch (error) {
        console.error('Erro ao buscar os itens:', error);
      }
    }

    fetchItems();
  }, []); 

  useEffect(() => {
    console.log('items', items.map((item: any) => item.kitchen)[0])
  }, [items])

  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <Card key='Cozinha' place="Cozinha" item={items.map((item: any) => item.kitchen)[0]} />
    </Container>
  );
}

export default Content;
