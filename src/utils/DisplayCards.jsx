import Card from '../components/Card.jsx'

export default function DisplayCards ({ imageData, onMemoryCardClick }) {

    return (
        <div className="cards-holder">
             {imageData.map((img) => (
        <Card 
          key={img.id || img.urls.regular} 
          imageUrl={img.urls.small}
          id={img.id}
          altText={img.alt_description || "Random Photo"}
          onMemoryCardClick={() => onMemoryCardClick(img.id)}
        />
      ))}
        </div>
    )
}