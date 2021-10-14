import { useParams } from 'react-router-dom';

const ImageDisplay = (props) => {
  const { width, height } = useParams();
  return (
      <>
        Now showing image with dimensions {width} {height}
        <img src='/{width}/{height}' alt="whatever">
        </img>
      </>
  )

}

export default ImageDisplay;
