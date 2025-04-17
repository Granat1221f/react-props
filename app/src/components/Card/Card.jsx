import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 8px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin: 12px 0;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const CardButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding:  10px 16px;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

function Card({ title, description, image }) {
  return (
    <CardWrapper>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardButton onClick={() => alert(title)}>Дізнатися більше</CardButton>
    </CardWrapper>
  );
}

export default Card;
