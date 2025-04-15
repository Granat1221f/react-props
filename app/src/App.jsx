import React from 'react';
import CardList from './components/CardList/CardList.jsx';

const cardsData = [
  {
    id: 1,
    title: "Лісова прогулянка",
    description: "Затишний лісовий пейзаж для відпочинку на природі.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Місто вночі",
    description: "Нічне місто з яскравими вогнями та неймовірною атмосферою.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Гірський пейзаж",
    description: "Краєвид величних гір під яскравим сонячним небом.",
    image: "https://images.unsplash.com/photo-1600493304552-106fc07c2883?w=400&h=300&fit=crop"
  }
];

function App() {
  return (
    <div className="App">
      <CardList cards={cardsData} />
    </div>
  );
}

export default App;
