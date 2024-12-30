import React from 'react'
import SectionTitle from '../Components/SectionTitle'
import featuredImg from "../assets/home/featured.jpg"
import './featured.css'

const Featured = () => {
  return (
    <div className='featured-item bg-fixed text-white pt-8 my-20'>
        <SectionTitle subHeading='check it out' heading='Featured Item'></SectionTitle>
        <div className="md:flex justify-center bg-slate-500 bg-opacity-30 items-center pb-20 pt-12 px-36">
            <div><img src={featuredImg} alt="" /></div>
            <div className='md:ml-10'>
                <p>Dec 31, 2024</p>
                <p className='uppercase'>Where can i get some</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident consequuntur reiciendis quidem, deleniti in ex. Vel voluptatibus non, sed dicta ratione dolore incidunt sit fugit cupiditate eveniet eos quam facilis.</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default Featured