import { useEffect, useState } from 'react';
import './styles/App.css';
import ImageFetcher from './utils/ImageFetcher.jsx';
import GameArea from './components/GameArea.jsx';
function App() {
    
  const [searchQuery, setSearchQuery] = useState('plants');
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [clickedId, setClickedId] = useState([]);

  const handleSearch = (newQuery) => {
    confirm("Your current progress will be lost!");
    setSearchQuery(newQuery);
  };

  const handleMemoryCardClick = (id) => { 
    if (clickedId.includes(id)) {
      //Game Over
      console.log("Game Over")
      setClickedId([])
      setCurrentScore(0)
      if(currentScore > bestScore) {
        setBestScore(currentScore)
      }
      return
    }
    setClickedId(prev => [...prev, id]);
    setCurrentScore(prev => prev+1)
  }

  useEffect(() => {
    if (currentScore > 19) {
      alert("You have won!");
      setBestScore(currentScore);
    }
  }, [currentScore]);

  useEffect(() => {
    console.log(clickedId)}, [clickedId])

  const handleRestart = () => {
    confirm("Your current progress will be lost!");
    setCurrentScore(0);
    setClickedId([])
  }

    const { imageData } = ImageFetcher(searchQuery);

    // Data is not loaded yet
    if (!imageData || imageData.length === 0) {
      return <p>Loading...</p>;
    }
  
    // When loaded, use the first image
    return (
        <GameArea 
          imageData={imageData} 
          onClickSearch={handleSearch} 
          onClickReset={handleRestart} 
          bestScore={bestScore} 
          currentScore={currentScore} 
          onMemoryCardClick={handleMemoryCardClick}/>
    );
  }

export default App;
