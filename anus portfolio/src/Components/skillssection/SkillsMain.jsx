import React from 'react'
import SkillsText from './SkillsText'
import AllSkills from './AllSkills'
import AllSkillSM from './AllSkillSM'

const SkillsMain = () => {
  return (
    <div id='skills'>
        <div className='max-w-[1200px] px-4 mx-auto min-h-[400px] relative overflow-hidden'>

        <SkillsText/>
        </div>
        <div className='mb-[50px] lg:block sm:hidden '>

        <AllSkills/>
        </div>
        <div className='sm:block lg:hidden'>
            <AllSkillSM/>
        </div>

    </div>
  )
}

export default SkillsMain