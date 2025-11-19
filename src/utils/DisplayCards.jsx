import Card from '../components/Card.jsx'

export default function DisplayCards ({ imageData }) {

    return (
        <div className="cards-holder">
             {imageData.map((img, index) => (
        <Card 
          key={img.id || index} 
          imageUrl={img.urls.small} 
          title={img.alt_description || "Random Photo"}
        />
      ))}
        </div>
    )
}