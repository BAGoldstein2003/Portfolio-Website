import './ProjectInfo.css'

export default function ProjectInfo({project}) {


    return (
        <div className="info-container">
            <div className="about-container">
                <h1>Why did I create an {project.projectName}?</h1>
                <h3>{project.about}</h3>
            </div>
        </div>
    )
}