const ImageCard = ({ image }) => {
  const { url, title, description } = image;

  return (
    <div className="card">
      <img src={url} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ImageCard;
