import { links } from '../data';
import logo from '../assets/coding.svg';
import Animation from './Animation';
const Navbar = () => {
  return (
    <nav className='bg-midnight'>
      <div className='align-element flex  flex-col sm:flex-row items-center justify-start py-4 gap-10 '>
        <Animation />
        <div className=' flex h-full gap-x-5 capitalize text-white   px-5'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                href={href}
                key={id}
                className=' py-2 flex justify-center items-center h-full min-w-24 border-2 border-white text-white rounded-lg hover:bg-skyBlue hover:border-skyBlue duration-500 font-bold'
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
