import './Projects.css';
import {useState} from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Projects({projectsList}) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase())
  }

  const filteredProjects = projectsList.filter(project =>
    project.projectName.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="projects-page">
      <h1>Projects Page</h1>
      <p>Click on the 'Visit this Project' button to view more info!</p>
      <input className="search-bar"
        onChange={handleSearch} 
        type="search"
        placeholder="Search projects...">
      </input>
      <div className="projects-container">

        {filteredProjects.sort().map((project, idx) => (
          <ProjectCard
            projectName={project.projectName} 
            projectDesc={project.projectDesc}
            skillsStrengthened={project.skillsStrengthened}
            dates={project.dates}
            index = {idx}
            key = {idx}
          />
        ))}

      </div>
    </div>
  )
}