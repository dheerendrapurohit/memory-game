import React, { useState, useEffect } from 'react';
import Scoreboard from './components/Scoreboard';
import CardList from './components/CardList';
import { fetchPokemon } from './components/services/api';
import './components/App.css'

const App = () => {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const fetchData = async () => {
      const cardData = await fetchPokemon();
      setCards(shuffleArray(cardData));
    };
    fetchData();
  }, []);

  const handleCardClick = (id) => {
    setCards(shuffleArray(cards));
    setScore(score + 1);
    if (score + 1 > bestScore) {
      setBestScore(score + 1);
    }
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Scoreboard score={score} bestScore={bestScore} />
      <CardList cards={cards} onCardClick={handleCardClick} />
    </div>
  );
};

export default App;