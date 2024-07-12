import SectionTitle from './SectionTitle';
import { skills } from '../data';
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <section className=' bg-slate-100 py-10 ' id='skills'>
      <div className='align-element  capitalize'>
        <SectionTitle text={'tech stack'} />
        <div className=' grid grid-cols-minmax-300  gap-10'>
          {skills.map((skill) => {
            return <SkillCard skill={skill} key={skill.id} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Skills;
