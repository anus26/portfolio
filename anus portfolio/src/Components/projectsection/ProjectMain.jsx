import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'
const projects=[{
    name:'Bloging App',
    year:'Dec 2025',
    align:'right',
    image:'../../public/images/website-img-1.jpg',
    link:'#'
},
{
    name:'E-commerce App',
    year:'Dec 2024',
    align:'right',
    image:'../../public/images/website-img-1.jpg',
    link:'#'  
},
{
    name:'Weather-App',
    year:'Dec 2024',
    align:'right',
    image:'../../public/images/website-img-1.jpg',
    link:'#'
},
{
    name:'memes',
    year:'Dec 2025',
    align:'right',
    image:'../../public/images/website-img-1.jpg',
    link:'#'
}
]

const ProjectMain = () => {
  return (
    <div>
     <ProjectText/>
   <div>
    {projects.map((item,index)=>{
        return <SingleProject key={index} name={item.name} yerar={item.year} aling={item.align} image={item.image
            
        } link={item.link}/>
    })}
   </div>
    </div>
  )
}

export default ProjectMain