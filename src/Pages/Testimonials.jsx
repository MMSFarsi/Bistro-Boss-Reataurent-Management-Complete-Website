import React, { useEffect, useState } from 'react'
import SectionTitle from '../Components/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
  return (
    <section className='my-20'>
        <p>{reviews.length}</p>
        <SectionTitle
        heading={'Testimonials'}
        subHeading={'what out client say'}
        ></SectionTitle>
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       {reviews.map(review=>
         <SwiperSlide>
            <div className='m-20 flex flex-col items-center'>
            <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                <p className='py-8'>{review.details}</p>
                <h2 className='text-orange-400 text-2xl'>{review.name}</h2>
            </div>
         </SwiperSlide>
       )}
   
      </Swiper>
    </section>
  )
}

export default Testimonials