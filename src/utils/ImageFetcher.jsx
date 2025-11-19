import { useState, useEffect } from 'react';

export default function ImageFetcher(searchQuery) {
  const [imageData, setImageData] = useState([]);
  const accessKey = /*API Key goes here*/

  useEffect(()=> {
    if (!searchQuery) return;
    const fetchImage = async () => {
      try {
        const response = await fetch(`https://api.unsplash.com/photos/random?query=${searchQuery}&client_id=${accessKey}&count=20&orientation=portrait`);
        const data = await response.json();
        setImageData(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching iamge:", error);
      }
      
    }

    fetchImage();}, [searchQuery]);

    return {imageData}
}
