import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {FaNodeJs} from 'react-icons/fa'
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3} from 'react-icons/si'
import {DiJavascript} from 'react-icons/di'
import {SiReact} from 'react-icons/si'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>De færdigheder jeg har</h5>
      <h2>Mine erfaringer</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <ImHtmlFive className='experience_details-icon'/>
              <div><h4>HTML</h4>
              <small className='text-light'>Middel</small>
              </div>
            </article>

            <article className="experience_details">
              <SiCss3 className='experience_details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Middel</small>
              </div>
            </article>

            <article className="experience_details">
              <DiJavascript className='experience_details-icon'/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Nybegynder</small>
              </div>
            </article>

            <article className="experience_details">
              <SiReact className='experience_details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Nybegynder</small>
              </div>
            </article>
          </div>
        </div>

{/* END OF FRONTEND */}

        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaNodeJs className='experience_details-icon'/>
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Nybegynder</small>
              </div>
            </article>

            {/* <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Ingen</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Ingen</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Ingen</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Ingen</small>
              </div>
            </article> */}
            
          </div>
          </div>
      </div>
    </section>
  )
}

export default Experience