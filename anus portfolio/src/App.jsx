import React from 'react'
import Navabarmain from './Components/Navabar/Navabarmain'
import HeroMain from './Components/herosection/HeroMain'
import AboutMeMain from './Components/Aboutmesection/AboutMeMain'
import HelperSection from './Components/HelperSection'
import HeroGrandient from './Components/herosection/HeroGrandient'
import SubHeroSection from './Components/herosection/SubHeroSection'
import SkillsMain from './Components/skillssection/SkillsMain'
import SubSkills from './Components/skillssection/SubSkills'

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
  <HelperSection/>
</main>
  )
}

export default App