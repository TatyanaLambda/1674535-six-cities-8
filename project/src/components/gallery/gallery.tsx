type GalleryProps = {
  image: string;
}

function GalleryScreen({image}: GalleryProps) : JSX.Element{
  return(
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt="Studio" />
    </div>
  );
}
export default GalleryScreen;
