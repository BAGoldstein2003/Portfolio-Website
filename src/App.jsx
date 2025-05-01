import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useEffect} from 'react'
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Home from './routes/Home.jsx';
import Contact from './routes/Contact.jsx';
import Projects from './routes/Projects.jsx';
import ProjectInfo from './routes/ProjectInfo.jsx'





function App() {
  const projects = [
    {
      projectName: 'AI Recipe Generator',
      projectDesc: "This project takes in user-submitted recipe attributes to create delicious recipes faster than you can say Hungry!!",
      skillsStrengthened: ['React.JS', 'CSS', 'OpenAI', 'Flask', 'Full-Stack'],
      imagesPath: "/static/myResume.jpg",
      dates: "2025 - Present",
      about: "This project was made to help people with busy lives who do not want to spend time searching the internet for recipes!"
    },
    {
      projectName: 'AI Timeclock',
      projectDesc: "This full-stack Streamlit application handles user signup/authentication using facial recognition ensuring strengthened security measures.",
      skillsStrengthened: ['Python', 'Streamlit', 'Database Management', 'SQLite', 'User Validation/Authentication'],
      imagePath: '/static',
      dates: "2025 - Present",
      about: "This project was created to help employers secure their timeclock system, ensuring anyone who clocks in to do their job is ACTUALLY who they say they are."
    }
  ];
  const projectToLink = (projectName) => {
    return projectName.replace(' ', '-').toLowerCase()
  }


  //handle refreshes
  useEffect(() => {
    window.addEventListener('load', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }, []);
  

  return (
    <AnimatePresence mode="wait">
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects projectsList = {projects}/>}/>
          {
            projects.map((project) => (
              <Route path={"/projects/" + projectToLink(project.projectName)} element={<ProjectInfo project = {project}/>}/>
            ))
            
          }
        </Routes>
      </BrowserRouter>
      </AnimatePresence>
  );
}



export default App;
