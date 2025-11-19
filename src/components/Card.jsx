import '../styles/Card.css';

export default function Card({ imageUrl, altText }) {
  return (
    <button className="memory-card">
      <img className="card-image" src={imageUrl} alt={altText} />
    </button>
  );
}
