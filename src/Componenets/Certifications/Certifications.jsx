import React from 'react'
import "./Certification.css"
import {Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination'
import ProfileImge from "../../Assets/ProfileImg.png"

const Certifications = () => {
  const data = [
    {
      id: 1,
      title: 'HTML',
      Img: ProfileImge,
      Org: 'Linkedln Learning'
    },
    {
      id: 2,
      title: 'TCS AsCenD',
      Img: ProfileImge,
      Org: 'TCS' 
    },
    {
      id: 3,
      title: 'Certification Title',
      Img: ProfileImge,
      Org: 'Kaggle'
    }
  ]
  return (
    <section id='certifications'>
      <h5>I'm Certified</h5>
      <h2>Certifications</h2>

      <Swiper className='container certification__container'
        modules={[Pagination]} 
        spaceBetween={20}
        slidesPerView={1}
        pagination={{clickable: true}}
        >
          {
            data.map(({title,Img,Org},id) => {
              return (
                <SwiperSlide key={id} className='certifications'>
                  <div className='certificate__image'>
                    <img src={Img} alt='Certificate image'/>
                  </div>
                  <h4 className='certification__name'>{title}</h4>
                  <small className='certification__from'>{Org}</small>
                </SwiperSlide>
              )
            })
          }
      </Swiper>
    </section>
  )
}

export default Certifications