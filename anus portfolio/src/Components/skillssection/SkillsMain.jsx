import React from 'react'
import SkillsText from './SkillsText'
import AllSkills from './AllSkills'

const SkillsMain = () => {
  return (
    <div id='skills'>
        <div className='max-w-[1200px] px-4 mx-auto min-h-[400px] relative overflow-hidden'>

        <SkillsText/>
        </div>
        <div className='mb-[50px]  '>

        <AllSkills/>
        </div>
    </div>
  )
}

export default SkillsMain