import '../../App.css';
import Intro from './Intro';
import AboutMe from './AboutMe';
import WhyMe from './WhyMe';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';

function Welcome({language}) {
  return(
    <>
      <Navbar language={language}/>
      <Intro language={language}/>
      <WhyMe language={language}/>
      <AboutMe language={language}/>
      <Contact language={language}/>
    </>
  )
}

export default Welcome;