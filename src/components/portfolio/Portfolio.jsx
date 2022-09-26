import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data =  [
  {
    id: 1,
    image: IMG1,
    title: 'Freelance for "Frontstage.dk',
    github: 'https//github.com/Duniia',
  },
  {
    id: 2,
    image: IMG2,
    title: '2. Eksamensprojekt',
    github: 'https//github.com/Duniia',
  },  {
    id: 3,
    image: IMG3,
    title: '1. Eksamensprojekt',
    github: 'https//github.com/Duniia',
  },  {
    id: 4,
    image: IMG4,
    title: 'Animations video',
    github: 'https//github.com/Duniia',
  },  {
    id: 5,
    image: IMG5,
    title: 'Fritidsprojekt',
    github: 'https//github.com/Duniia',
  },  {
    id: 6,
    image: IMG6,
    title: 'Opgaver',
    github: 'https//github.com/Duniia',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mine senester projekter</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio_item">
              <div className="portfolio_item-image"></div>
              <img src={image} alt={title}/>
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
              <a href={github} className="btn" target='_blank'> Github</a>
              <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }


{/* 
        <article className="portfolio_item">
          <div className="portfolio_item-image"></div>
          <img src={IMG2}/>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-cta">
          <a href="https://github.com/" className="btn" target='_blank'> Github</a>
          <a href="https://dribbble.com/Duniia" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image"></div>
          <img src={IMG3}/>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-cta">
          <a href="https://github.com/" className="btn" target='_blank'> Github</a>
          <a href="https://dribbble.com/Duniia" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image"></div>
          <img src={IMG4}/>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-cta">
          <a href="https://github.com/" className="btn" target='_blank'> Github</a>
          <a href="https://dribbble.com/Duniia" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image"></div>
          <img src={IMG5}/>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-cta">
          <a href="https://github.com/" className="btn" target='_blank'> Github</a>
          <a href="https://dribbble.com/Duniia" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

<article className="portfolio_item">
          <div className="portfolio_item-image"></div>
          <img src={IMG6}/>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-cta">
          <a href="https://github.com/" className="btn" target='_blank'> Github</a>
          <a href="https://dribbble.com/Duniia" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article> */}

      </div>
    </section>
  )
}

export default Portfolio