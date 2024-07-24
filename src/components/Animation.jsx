import Lottie from 'lottie-react';
import meditation from '../assets/meditation.json';
const Animation = () => {
  return <Lottie className='h-28' animationData={meditation} loop />;
};
export default Animation;
