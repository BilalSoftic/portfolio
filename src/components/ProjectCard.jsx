import { BsGithub, BsGlobe } from 'react-icons/bs';

const ProjectCard = ({ project }) => {
  const { title, url, img, source_url, description } = project;
  return (
    <article className=' bg-white rounded-2xl min-w-80 overflow-hidden shadow-md hover:shadow-2xl duration-300'>
      <a
        href={url ? url : source_url}
        target='_blank'
        className='h-full flex flex-col'
      >
        <div className='overflow-hidden h-48 w-full'>
          <img
            src={img}
            alt={title}
            className='w-full h-full object-top object-cover'
          />
        </div>
        <div className='p-3 flex flex-col flex-grow justify-between'>
          <p className='text-2xl capitalize font-semibold'>{title}</p>
          <p className='text-base mt-2'>{description}</p>
          <div className='flex flex-row gap-4 my-3'>
            {source_url && (
              <a href={source_url} target='_blank'>
                <BsGithub className=' h-6 w-6 hover:text-skyBlue duration-500' />
              </a>
            )}
            {url && (
              <a href={url} target='_blank'>
                <BsGlobe className='h-6 w-6 hover:text-skyBlue duration-500' />
              </a>
            )}
          </div>
        </div>
      </a>
    </article>
  );
};
export default ProjectCard;
