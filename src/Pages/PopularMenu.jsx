import React, { useEffect, useState } from 'react'
import SectionTitle from '../Components/SectionTitle'
import MenuItem from '../Components/MenuItem'
import useMenu from '../hooks/useMenu'

const PopularMenu = () => {
    const [menu]=useMenu()
    const popular=menu.filter(item=> item.category==='popular')
    // const [menu,setMenu]=useState([])
    // useEffect(()=>{
    //     fetch("menu.json")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const populatItems= data.filter(item=> item.category=== 'popular')
    //         setMenu(populatItems)
    //     })
    // },[])
  return (
    <section className='mb-12'>
        <SectionTitle
        heading='From Our Menu'
        subHeading="Checkout now"
        ></SectionTitle>
        <div className='grid grid-cols-2 gap-6'>
        {
            popular.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
        }
        </div>
    </section>
  )
}

export default PopularMenu