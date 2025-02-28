import React from 'react'
import Navabarmain from './Components/Navabar/Navabarmain.jsx'
import HeroMain from './Components/herosection/HeroMain.jsx'
import AboutMeMain from './Components/Aboutmesection/AboutMeMain.jsx'
// import HelperSection from './Components/HelperSection.jsx'
import HeroGrandient from './Components/herosection/HeroGrandient.jsx'
import SubHeroSection from './Components/herosection/SubHeroSection.jsx'
import SkillsMain from './Components/skillssection/SkillsMain.jsx'
import SubSkills from './Components/skillssection/SubSkills.jsx'
import ExperienceMain from './Components/experiencesection/ExperienceMain.jsx'
import ProjectMain from './Components/projectsection/ProjectMain.jsx'
import ContactMeMain from './Components/contactmesection/ContactMeMain.jsx'
import FooterMain from './Components/footer/FooterMain.jsx'

const App = () => {
  return (
<main className='font-body'>
  <Navabarmain/>
  <HeroMain/>
  <HeroGrandient/>
  <SubHeroSection/>
  <AboutMeMain/>
  <SkillsMain/>
  <SubSkills/>
  <ExperienceMain/>
  <ProjectMain/>
  <ContactMeMain/>
  {/* <HelperSection/> */}
  <FooterMain/>
</main>
  )
}

export default App