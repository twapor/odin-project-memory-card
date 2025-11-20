import '../styles/Card.css';

export default function Card({ imageUrl, altText, onMemoryCardClick, id }) {
  return (
    <button className="memory-card" onClick={onMemoryCardClick}>
      <img className="card-image" src={imageUrl} alt={altText} id={id} />
    </button>
  );
}
