import { useEffect, useState } from 'react';
import './styles/App.css';
import ImageFetcher from './utils/ImageFetcher.jsx';
import Card from './components/Card.jsx'
function App() {
  ImageFetcher("dog");
  
  return <Card imageUrl="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MzI2MTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM1NDI2MzB8&ixlib=rb-4.1.0&q=80&w=400" title='Cute Dog'/>
}

export default App;
