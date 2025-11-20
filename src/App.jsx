import { useEffect, useState } from 'react';
import './styles/App.css';
import ImageFetcher from './utils/ImageFetcher.jsx';
import GameArea from './components/GameArea.jsx';

function App() {
  const [searchQuery, setSearchQuery] = useState('plants');
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [clickedId, setClickedId] = useState([]);
  const [order, setOrder] = useState([]);


  const { imageData } = ImageFetcher(searchQuery);


  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };


  useEffect(() => {
    if (imageData?.length > 0) {
      const newOrder = imageData.map(img => img.id);
      setOrder(newOrder);     
      setClickedId([]);       
      setCurrentScore(0);     
    }
  }, [imageData]);


  const handleMemoryCardClick = (id) => { 
    if (clickedId.includes(id)) {
      // GAME OVER
      alert("Game Over!")

      if (currentScore > bestScore) setBestScore(currentScore);


      setClickedId([]);
      setCurrentScore(0);
      setOrder(order => shuffleArray(order));
      return;
    }

    setClickedId(prev => [...prev, id]);
    setCurrentScore(prev => prev + 1);


    setOrder(prev => shuffleArray(prev));
  };


  useEffect(() => {
    if (currentScore > 19) {
      alert("You have won!");
      setBestScore(currentScore);
    }
  }, [currentScore]);

  const handleSearch = (phrase) => {
    if (!confirm("Your current progress will be lost!")) return;
    setClickedId([]);
    setCurrentScore(0);
    setSearchQuery(phrase)
  }

  const handleRestart = () => {
    if (!confirm("Your current progress will be lost!")) return;

    setClickedId([]);
    setCurrentScore(0);


    if (imageData.length > 0) {
      setOrder(shuffleArray(imageData.map(img => img.id)));
    }
  };


  if (!imageData || imageData.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <GameArea 
      imageData={imageData}
      onClickSearch={handleSearch}
      onClickReset={handleRestart}
      bestScore={bestScore}
      currentScore={currentScore}
      onMemoryCardClick={handleMemoryCardClick}
      order={order}
    />
  );
}

export default App;
