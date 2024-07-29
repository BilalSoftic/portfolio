import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import useFetchProjects from '../fetchProjects';
const Projects = () => {
  const { loading, projects } = useFetchProjects();
  return (
    <section className='bg-slate100 pt-10 pb-20' id='projects'>
      <section className='align-element'>
        <SectionTitle text={'my projects'} />
        <div className='grid sm:grid-cols-minmax-250  gap-10'>
          {projects.map((project) => {
            return <ProjectCard project={project} key={project.id} />;
          })}
        </div>
      </section>
    </section>
  );
};
export default Projects;
