import './Resume.css'
import {useState, useEffect } from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function Resume() {
    const [isResumeLarge, setIsResumeLarge] = useState(false);
    const [alreadyDownload, setAlreadyDownload] = useState(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/static/BrianResume.pdf';  // Path relative to public folder
        link.download = 'BrianResume.pdf';      // Filename for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setAlreadyDownload(true);
    }

    useEffect(() => {
        setTimeout(() => {
            if (isResumeLarge) {
            window.scrollTo({
                top: document.querySelector('.resume').offsetTop - 100, // Adjust for header height
                behavior: 'smooth'
            });
        }
        }, 300)
        
        
    }, [isResumeLarge])

    return (
        <div className="resume-container">

            <h2>My Resume</h2>
            <img className={`resume ${isResumeLarge ? 'large' : ''}`} onClick={() => {setIsResumeLarge(!isResumeLarge)}} src="/static/BrianResume.jpg" alt="resume"/>
            <h3 id="click">Click To {!isResumeLarge ? 'Enlarge' : 'Reduce'}</h3>
            <button className="download-button" onClick={handleDownload}>
                Download {alreadyDownload ? 'Again' : ''}<br></br>
                <FaCloudDownloadAlt className="download-icon"/>
            </button>


        </div>
    )
}