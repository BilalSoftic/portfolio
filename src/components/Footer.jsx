import { FaChevronUp } from 'react-icons/fa';
import { toast } from 'react-toastify';
const Footer = () => {
  const email = 'bilalsoftic99@gmail.com';
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText(`${email}`);
        toast.success('Successfully copied to Clipboard');
      } catch (error) {
        toast.error('Failed to copy to Clipboard');
      }
    } else {
      toast.error('Clipboard access not available');
    }
  };
  return (
    <footer className='bg-midnight h-20'>
      <div className='align-element flex justify-between h-full items-center  text-white text-sm font-thin'>
        <div>
          <h2
            onClick={() => saveToClipboard()}
            className='hover:cursor-pointer hover:text-skyBlue'
          >
            {email}
          </h2>
          <span>Copyright &copy;</span>
        </div>
        <a href='#top ' className='flex flex-row gap-2 hover:text-skyBlue'>
          <FaChevronUp className='h-5 w-5 text-skyBlue' />
          Top
        </a>
      </div>
    </footer>
  );
};
export default Footer;
