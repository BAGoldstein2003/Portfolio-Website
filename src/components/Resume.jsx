import './Resume.css'
import {useState, useEffect } from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function Resume() {
    const [isResumeLarge, setIsResumeLarge] = useState(false);
    const [alreadyDownload, setAlreadyDownload] = useState(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/static/Brian-Goldstein-Software-Engineer-FINAL.pdf';  // Path relative to public folder
        link.download = 'BriansResume.pdf';      // Filename for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setAlreadyDownload(true);
    }

    useEffect(() => {
        const element = document.querySelector('.resume'); // or any valid selector

        const rect = element.getBoundingClientRect();
        const resumeMiddle = rect.top + rect.height / 2;
        setTimeout(() => {
            if (isResumeLarge) {
            window.scrollTo({
                top: resumeMiddle,
                behavior: 'smooth'
            });
        }
        }, 300)
        
        
    }, [isResumeLarge])

    return (
        <div className="resume-container">

            <h2>My Resume</h2>
            <img className={`resume ${isResumeLarge ? 'large' : ''}`} onClick={() => {setIsResumeLarge(!isResumeLarge)}} src="/static/Brian-Goldstein-Software-Engineer-FINAL.jpg" alt="resume"/>
            <h3 id="click">Click To {!isResumeLarge ? 'Enlarge' : 'Reduce'}</h3>
            <button className="download-button" onClick={handleDownload}>
                Download {alreadyDownload ? 'Again' : ''}<br></br>
                <FaCloudDownloadAlt className="download-icon"/>
            </button>


        </div>
    )
}