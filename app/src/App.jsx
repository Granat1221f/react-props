import React from 'react';
import styled from 'styled-components';
import CardList from './components/CardList/CardList.jsx';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const cardsData = [
  {
    id: 1,
    title: "Лісова прогулянка",
    description: "Затишний лісовий пейзаж для відпочинку на природі.",
    image: "https://zprz.city/uploads/news/resize/w/1200x1200/kp31nje0mtzzjt7cgxh8rj2e1c6j23cn.jpg"
  },
  {
    id: 2,
    title: "Місто вночі",
    description: "Нічне місто з яскравими вогнями та неймовірною атмосферою.",
    image: "https://zakavto.com.ua/images/data/articles/kyiv-5-min.jpg"
  },
  {
    id: 3,
    title: "Гірський пейзаж",
    description: "Краєвид величних гір під яскравим сонячним небом.",
    image: "https://www.gorgany.com/pro/wp-content/uploads/2021/08/87B2965.jpg"
  }
];

function App() {
  return (
    <AppContainer>
      <CardList cards={cardsData} />
    </AppContainer>
  );
}

export default App;
