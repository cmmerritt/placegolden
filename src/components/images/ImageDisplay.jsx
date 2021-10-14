import { useParams } from 'react-router-dom';

const ImageDisplay = () => {
  const { width, height } = useParams();
  return (
    <>
      Now showing image with dimensions {width} {height}
      <img src='/{width}/{height}' alt='requested'>
      </img>
    </>
  )
}

export default ImageDisplay;
