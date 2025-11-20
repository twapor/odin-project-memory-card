import { useEffect, useState } from 'react';
import './styles/App.css';
import ImageFetcher from './utils/ImageFetcher.jsx';
import GameArea from './components/GameArea.jsx';
function App() {
    
  const [searchQuery, setSearchQuery] = useState('plants')
  const [bestScore, setBestScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)

  const handleSearch = (newQuery) => {
    confirm("Your current progress will be lost!");
    setSearchQuery(newQuery);
  };

  const handleRestart = () => {
    confirm("Your current progress will be lost!");
    setCurrentScore(0);
  }

    const { imageData } = ImageFetcher(searchQuery);

    // Data is not loaded yet
    if (!imageData || imageData.length === 0) {
      return <p>Loading...</p>;
    }
  
    // When loaded, use the first image
    return (
        <GameArea imageData={imageData} onClickSearch={handleSearch} onClickReset={handleRestart} bestScore={bestScore} currentScore={currentScore}/>
    );
  }

export default App;
