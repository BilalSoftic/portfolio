const SkillCard = ({ skill }) => {
  const { icon, title, text } = skill;
  return (
    <article className='grid grid-cols-1'>
      <span>{icon}</span>
      <p className='text-2xl font-extrabold mt-3'>{title}</p>
      <p className='mt-1 sm:mt-0 text-base'>{text}</p>
    </article>
  );
};
export default SkillCard;
