import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {FaNodeJs} from 'react-icons/fa'
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3, SiReact, SiAdobephotoshop, SiAdobexd, SiAdobepremierepro, SiCanva, SiAdobeindesign} from 'react-icons/si'
import {DiJavascript, DiRubyRough} from 'react-icons/di'
import {CgFigma} from 'react-icons/cg'
import {} from 'react-icons/'
import {} from 'react-icons/'
import {} from 'react-icons/'



const Experience = () => {
  return (
    <section id='experience'>
      <h5>De færdigheder jeg har</h5>
      <h2>Mine erfaringer</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Web Udvikling</h3>
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

            <article className="experience_details">
              <FaNodeJs className='experience_details-icon'/>
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Nybegynder</small>
              </div>
            </article>
            <article className="experience_details">
              <DiRubyRough className='experience_details-icon'/>
              <div>
              <h4>(Liquid/Ruby) Shopify</h4>
              <small className='text-light'>Nybegynder</small>
              </div>
            </article>


          </div>
        </div>

{/* END OF FRONTEND */}

        <div className="experience_backend">
        <h3>UX/UI</h3>
          <div className="experience_content">


            <article className="experience_details">
              <SiAdobephotoshop className='experience_details-icon'/>
              <div>
              <h4>Photoshop</h4>
              <small className='text-light'>Erfaren</small>
              </div>
            </article>
            <article className="experience_details">
              <SiAdobexd className='experience_details-icon'/>
              <div>
              <h4>Adobe XD</h4>
              <small className='text-light'>Erfaren</small>
              </div>
            </article>

            <article className="experience_details">
              <SiAdobepremierepro className='experience_details-icon'/>
              <div>
              <h4>Premiere Pro</h4>
              <small className='text-light'>Erfaren</small>
              </div>
            </article>

            <article className="experience_details">
              <CgFigma className='experience_details-icon'/>
              <div>
              <h4>Figma</h4>
              <small className='text-light'>Erfaren</small>
              </div>
            </article>

            <article className="experience_details">
              <SiAdobeindesign className='experience_details-icon'/>
              <div>
              <h4>inDesign</h4>
              <small className='text-light'>Erfaren</small>
              </div>
            </article>

            <article className="experience_details">
              <SiCanva className='experience_details-icon'/>
              <div>
              <h4>Canva</h4>
              <small className='text-light'>Erfaren</small>
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