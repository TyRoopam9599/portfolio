import React from 'react'
import "./Certification.css"
import {Swiper, SwiperSlide, } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination'
import {HtmlCertification, Kaggle, React_TCS} from "../../Assets/Images"

const Certifications = () => {
  const data = [
    {
      id: 1,
      title: 'TCS AsCenD',
      Img: React_TCS,
      Org: 'TCS' 
    },
    {
      id: 2,
      title: 'HTML',
      Img: HtmlCertification,
      Org: 'Linkedln Learning'
    },
    {
      id: 3,
      title: 'Certification Title',
      Img: Kaggle,
      Org: 'Kaggle'
    }
  ]
  return (
    <section id='certifications'>
      <h5>I'm Certified</h5>
      <h2>Certifications</h2>

      <Swiper className='container certification__container'
        modules={[Pagination, Autoplay]} 
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay:2500,
          disableOnInteraction: true
        }}
        scrollbar={{draggable:true}}
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