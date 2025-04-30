import './ProjectCard.css';
import { Link } from 'react-router-dom';

export default function ProjectCard({projectName, projectDesc, skillsStrengthened, imgPath, index, dates}) {
    const projectLink = projectName.replace(' ', '-').toLowerCase()


    return (

        <div className='project-card'>
            <div className="project-header">
                <h2 className="project-title">{projectName}</h2>
            </div>
            <div className="project-desc">
                <h3>{projectDesc}</h3>
            </div>
            <div className="skills-container">Skills Strengthened:
                <ul className="skills-list">
                    {
                        skillsStrengthened.sort().map((skill, idx) => (
                            <li className="skill" key={idx}>{skill}</li>
                        ))
                    }
                </ul>
            </div>
                <p className="dates">{dates}</p>
                <Link to={`${projectLink}`} className="more-info">Visit this Project</Link>
        </div>
    )
}