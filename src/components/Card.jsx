import '../styles/Card.css';

export default function Card({ imageUrl, title }) {
  return (
    <button className="memory-card">
      <img className="card-image" src={imageUrl} alt={title} />
      <h3 className="card-title">{title}</h3>
    </button>
  );
}
