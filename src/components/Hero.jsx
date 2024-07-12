import img from '../assets/bilal-softic.jpeg';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
const githubLink = 'https://github.com/BilalSoftic';
const linkedInLink = 'https://www.linkedin.com/in/bilalsoftic/';
const Hero = () => {
  return (
    <section className='bg-blue-400  '>
      <div className='align-element grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-4 py-10 '>
        <div className='flex flex-col items-center text-center sm:text-start sm:items-start justify-center gap-2 capitalize'>
          <p className='text-blue-700 text-7xl  font-bold'>Bilal Softić</p>
          <p className='text-3xl'>front-end developer</p>
          <p className='text-base'>
            crafting responsive experiences for web and mobile
          </p>
          <div className='flex flex-row text-white gap-x-3'>
            <a href={githubLink} target='_blank'>
              <BsGithub className='h-8 w-8 hover:text-blue-700 duration-500' />
            </a>
            <a href={linkedInLink} target='_blank'>
              <BsLinkedin className='h-8 w-8  hover:text-blue-700 duration-500' />
            </a>
          </div>
        </div>

        <div className='flex justify-center  items-center '>
          <img
            src={img}
            alt='bilal-softic.jpeg'
            className='rounded-full w-2/3  '
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
