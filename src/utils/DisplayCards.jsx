import Card from "../components/Card.jsx";

export default function DisplayCards({ imageData, order, onMemoryCardClick }) {
  return (
    <div className="cards-holder">
      {order.map(id => {
        const img = imageData.find(item => item.id === id);

        if (!img) return null;

        return (
          <Card 
            key={img.id}
            imageUrl={img.urls.small}
            altText={img.alt_description || "Random Photo"}
            onMemoryCardClick={() => onMemoryCardClick(img.id)}
          />
        );
      })}
    </div>
  );
}
