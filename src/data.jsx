import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-skyBlue' />,
    text: 'Experienced in HTML & CSS, creating visually appealing and responsive websites for a great user experience.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-skyBlue' />,
    text: 'Experienced in JavaScript, building interactive and dynamic web applications for smooth user interactions and functionality.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-skyBlue' />,
    text: 'Experienced in React, developing efficient and interactive front-end applications with a focus on component-based architecture.',
  },
];
