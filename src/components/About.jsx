import SectionTitle from './SectionTitle';
import img from '../assets/hello.svg';
const About = () => {
  return (
    <section
      className='align-element flex flex-col md:flex-row justify-evenly items-center py-20 gap-10'
      id='about'
    >
      <img src={img} alt='hello.svg' className='sm:w-1/2' />

      <article>
        <SectionTitle text={'about me'} />
        <p className=' text-m text'>
          Hello! I'm Bilal, a junior front-end developer passionate about
          crafting engaging user experiences. Currently studying at the Faculty
          of Information Technologies in Mostar, I specialize in React and React
          Native development for both web and mobile applications. I love diving
          into coding challenges and turning ideas into reality through clean,
          efficient code. Beyond coding, I'm a dedicated fan of Dr. Who and an
          avid gamer.
        </p>
      </article>
    </section>
  );
};
export default About;
