import { useEffect, useState } from 'react';
import './styles/App.css';
import ImageFetcher from './utils/ImageFetcher.jsx';
import DisplayCards from './utils/DisplayCards.jsx'
function App() {
    const { imageData } = ImageFetcher("dog");

    // Data is not loaded yet
    if (!imageData || imageData.length === 0) {
      return <p>Loading...</p>;
    }
  
    // When loaded, use the first image
    return (
      <DisplayCards
        imageData={imageData}
      />
    );
  }

export default App;
