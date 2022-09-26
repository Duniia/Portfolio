import React from 'react'
import './testimonials.css'
// import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR2 from '../../assets/avatar2.jpg'
// import AVTR3 from '../../assets/avatar3.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data =  [
//   {
//     avatar: AVTR1,
//     name: 'Tina Snow',
//     review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum voluptate iste asperiores incidunt repudiandae in placeat at distinctio vero! Nam illum velit, reprehenderit odio totam atque exercitationem aliquam ratione cum.',
//   },
// {
//   avatar: AVTR2,
//   name: 'Tina Snow',
//   review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum voluptate iste asperiores incidunt repudiandae in placeat at distinctio vero! Nam illum velit, reprehenderit odio totam atque exercitationem aliquam ratione cum.',
// },
// {
// avatar: AVTR3,
// name: 'Tina Snow',
// review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum voluptate iste asperiores incidunt repudiandae in placeat at distinctio vero! Nam illum velit, reprehenderit odio totam atque exercitationem aliquam ratione cum.',
// },

// {
// avatar: AVTR4,
// name: 'Tina Snow',
// review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum voluptate iste asperiores incidunt repudiandae in placeat at distinctio vero! Nam illum velit, reprehenderit odio totam atque exercitationem aliquam ratione cum.',
// }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      {/* <h5>Review from clients</h5>
      <h2>Testimonials</h2> */}

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={avatar}/>
          </div>
          <h5 className='client_name'>{name}</h5>
            <small className="client_review">{review}</small>
        </SwiperSlide>
            )
          })
        }

        {/* 
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR2} alt="Avatar one" />
            <h5 className='client_name'>Louise mmm</h5>
          </div>
          <small className="client_review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum voluptate iste asperiores incidunt repudiandae in placeat at distinctio vero! Nam illum velit, reprehenderit odio totam atque exercitationem aliquam ratione cum.
            </small>
        </article>

        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR3} alt="Avatar one" />
            <h5 className='client_name'>Louise mmm</h5>
          </div>
          <small className="client_review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum voluptate iste asperiores incidunt repudiandae in placeat at distinctio vero! Nam illum velit, reprehenderit odio totam atque exercitationem aliquam ratione cum.
            </small>
        </article>

        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR4} alt="Avatar one" />
            <h5 className='client_name'>Louise mmm</h5>
          </div>
          <small className="client_review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum voluptate iste asperiores incidunt repudiandae in placeat at distinctio vero! Nam illum velit, reprehenderit odio totam atque exercitationem aliquam ratione cum.
            </small>
        </article> */}
      </Swiper>
    </section>
  )
}

export default Testimonials