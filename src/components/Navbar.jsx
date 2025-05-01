
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

//Navigation component
export default function Navbar() {
  const location = useLocation();
  
  return (
    <div className="navbar">
      <div className='links'>
        <Link to='/' className={`link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link to='/projects' className={`link ${location.pathname.includes('/projects') ? 'active' : ''}`}>Projects</Link>
        <Link to='/contact' className={`link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Me</Link>
      </div>
      <div className="social-links">
        <a href="https://github.com/BAGoldstein2003" target="_blank" rel="noreferrer">
          <FaGithub className = "github-icon"  size={50}></FaGithub>
        </a>
        <a href="https://www.linkedin.com/in/brian-goldstein-softdev/" target="_blank" rel="noreferrer">
          <CiLinkedin className = "linkedin-icon" size={50}></CiLinkedin>
        </a>
        </div>
    </div>
  )
}

