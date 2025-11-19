import { useEffect, useState } from 'react';
import './styles/App.css';
import ImageFetcher from './utils/ImageFetcher.jsx';
import GameArea from './components/GameArea.jsx';
function App() {
    
    const { imageData } = ImageFetcher("plants");

    // Data is not loaded yet
    if (!imageData || imageData.length === 0) {
      return <p>Loading...</p>;
    }
  
    // When loaded, use the first image
    return (
        <GameArea imageData={imageData}/>
    );
  }

export default App;
