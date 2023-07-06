import React from 'react'
import "./Portfolio.css"
import ProjectImg from "../../Assets/ProfileImg.png"
const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: ProjectImg,
      title: 'Project Name',
      github: 'https://github.com/TyRoopam9599/',
      demo: 'Demo Link'
    },
    {
      id: 2,
      image: ProjectImg,
      title: 'Project Name',
      github: 'https://github.com/TyRoopam9599/',
      demo: 'Demo Link'
    },
    {
      id: 3,
      image: ProjectImg,
      title: 'Project Name',
      github: 'https://github.com/TyRoopam9599/',
      demo: 'Demo Link'
    },
    {
      id: 4,
      image: ProjectImg,
      title: 'Project Name',
      github: 'https://github.com/TyRoopam9599/',
      demo: 'Demo Link'
    },
    {
      id: 5,
      image: ProjectImg,
      title: 'Project Name',
      github: 'https://github.com/TyRoopam9599/',
      demo: 'Demo Link'
    },
    {
      id: 6,
      image: ProjectImg,
      title: 'Project Name',
      github: 'https://github.com/TyRoopam9599/',
      demo: 'Demo Link'
    },
    {
      id: 7,
      image: ProjectImg,
      title: 'Project Name',
      github: 'https://github.com/TyRoopam9599/',
      demo: 'Demo Link'
    }
  ]
  
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt='project_image' />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} target='blank' className='btn'>Github</a>
                  <a href={demo} target='blank' className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio