import { useState, useEffect } from 'react';

export default function ImageFetcher(searchQuery)) {
  const [imageData, setImageData] = useState([]);

  useEffect(()=> {
    if (!searchQuery) return;
    const fetchImage = async () => {
      try {
        const response = await fetch(/*API URL goes here*/);
      }
    }
  })
}
