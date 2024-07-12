import { links } from '../data';
import logo from '../assets/coding.svg';
const Navbar = () => {
  return (
    <nav className='bg-blue-400 '>
      <div className='align-element flex  flex-col sm:flex-row items-center justify-start py-4 gap-10 '>
        <img src={logo} alt='coding.svg' className='h-16' />
        <div className=' flex  gap-x-5 capitalize text-white '>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                href={href}
                key={id}
                className=' hover:text-blue-700 duration-500'
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
