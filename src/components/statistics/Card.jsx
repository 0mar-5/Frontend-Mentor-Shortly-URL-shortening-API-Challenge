import "./Card.css";

function Card({ imgURL, title, description, className = "" }) {
  return (
    <div className={`${className} card `}>
      <div className="icon">
        <img src={imgURL} alt="icon img" />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Card;
