import { useEffect, useState } from 'react';
import './styles/App.css';
import ImageFetcher from './utils/ImageFetcher.jsx';
function App() {
  ImageFetcher("dog");
}

export default App;
