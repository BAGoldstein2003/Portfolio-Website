import './ProjectInfo.css'

export default function ProjectInfo({project}) {


    return (
        <div className="info-container">
            <div className="about-container">
                <h1>Why {project.projectName}?</h1>
                <h3>{project.about}</h3>
            </div>
        </div>
    )
}