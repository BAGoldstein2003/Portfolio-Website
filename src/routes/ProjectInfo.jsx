import './ProjectInfo.css'

export default function ProjectInfo({project}) {


    return (
        <div className="info-container">
            <div className="about-container">
                <h1>Why {project.projectName}?</h1>
                <h3>{project.about}</h3>
            </div>
            <div className="images-container">
                <h1>Screenshots:</h1>
                <img src="/static/myResume.jpg" width="200px" alt="resume"></img>
            </div>
        </div>
    )
}