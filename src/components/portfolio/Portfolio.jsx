import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'E-commerce Website Challenge',
    github:'https://github.com/89fernando/frontend-challenge-junior'
  },
  {
    id:2,
    image: IMG2,
    title: 'Clone Netflix Website',
    github:'https://github.com/89fernando/CloneNetflixComApi'
  },
  {
    id:3,
    image: IMG3,
    title: 'Search Marvel Characters',
    github:'https://github.com/89fernando/Project-Marvel-Api'
  },
  {
    id:4,
    image: IMG4,
    title: 'Tetris Game',
    github:'https://github.com/89fernando/tetris-game-react'
  },
  {
    id:5,
    image: IMG5,
    title: 'To do List',
    github:'https://github.com/89fernando/todo-list-react'
  },
  {
    id:6,
    image: IMG6,
    title: 'Dashboards',
    github:'https://github.com/89fernando'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt="portfolio" />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn btn-primary' target='blank'>Github</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio;
