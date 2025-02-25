import React from 'react'
import SingleExperience from './SingleExperience'

const experiences=[
    {
        job:'Front-End Developer ',
        company:'ABC Company',
        duration:'Jan 2024 - Present',
        responsibilities:[
            'Implementing reusable components','Participating in large scale application ','Working on the performance of web application ','Generating new ideas for better user experience '
        ],

        

    }
]
const AllExperience = () => {
  return (
    <div fle>
        {experiences.map((experience,index)=>{
            return<SingleExperience key={index} experience={experience}/>
        })}
    </div>
  )
}

export default AllExperience