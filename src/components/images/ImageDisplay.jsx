import { useParams } from 'react-router-dom';
import { fetchImageByParams } from '../../services/imageService';

const ImageDisplay = () => {
  const { width, height } = useParams();
  const image = fetchImageByParams(width, height);
  console.log(height);
  console.log(image);
  return (
    <>
      Now showing image with dimensions {width} {height}
      <object data={image.data} type="image/svg+xml">
      </object>
    </>
  )
}

export default ImageDisplay;
