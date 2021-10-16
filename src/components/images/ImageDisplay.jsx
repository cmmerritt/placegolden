import { useParams, Redirect } from 'react-router-dom';

const ImageDisplay = (props) => {
  const { width, height } = useParams();
  return (
      <Redirect to={{
        pathname: `/.netlify/functions/server/api/${width}/${height}`
      }} />
  )
}

export default ImageDisplay;
