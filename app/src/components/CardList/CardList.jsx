import React from 'react';
import styled from 'styled-components';
import Card from '../Card/Card.jsx';

const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 30px;
`;

function CardList({ cards }) {
  return (
    <CardListWrapper>
      {cards.map(card => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </CardListWrapper>
  );
}

export default CardList;
