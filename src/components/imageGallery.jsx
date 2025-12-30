import ImageCard from "./imageCard";

const images = [
  {
    id: 1,
    url: "https://picsum.photos/300/200?1",
    title: "Mountain View",
    description: "A beautiful mountain landscape"
  },
  {
    id: 2,
    url: "https://picsum.photos/300/200?2",
    title: "Beach",
    description: "Relaxing beach scenery"
  },
  {
    id: 3,
    url: "https://picsum.photos/300/200?3",
    title: "Forest",
    description: "Green forest environment"
  },
  {
    id: 4,
    url: "https://picsum.photos/300/200?4",
    title: "City",
    description: "Modern city skyline"
  }
];

const ImageGallery = () => {
  return (
    <>
      <h1 className="gallery-title">Image Gallery</h1>

      <div className="gallery">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
