import React from 'react'
import { Helmet } from 'react-helmet-async'
import Cover from '../Shared/Cover'
import coverBg from '../../assets/menu/banner3.jpg'
import useMenu from '../../hooks/useMenu'
import SectionTitle from '../../Components/SectionTitle'
import MenuCategory from './MenuCategory'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu]=useMenu()
    const dessert=menu.filter(item=> item.category==='dessert')
    const pizza=menu.filter(item=> item.category==='pizza')
    const salad=menu.filter(item=> item.category==='salad')
    const soup=menu.filter(item=> item.category==='soup')
    const drinks=menu.filter(item=> item.category==='drinks')
    const offered=menu.filter(item=> item.category==='offered') 
  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Menu</title>
        </Helmet>
        {/* Main Menu Cover */}
        <Cover img={coverBg} title={'Our Menu'} ></Cover>
       <SectionTitle heading={"Don't miss"} subHeading={"Today's Offer"}></SectionTitle>
       {/* Offer Menu */}
       <MenuCategory items={offered}></MenuCategory>
       {/* Dessert Menu */}
       <MenuCategory items={dessert} coverImg={dessertImg} title={'Dessert'} ></MenuCategory>
       {/* Pizzz Menu */}
       <MenuCategory items={pizza} coverImg={pizzaImg} title={'Pizza'} ></MenuCategory>
       {/* Salad Menu */}
       <MenuCategory items={salad} coverImg={saladImg} title={'Salad'} ></MenuCategory>
       {/* Soap Menu */}
       <MenuCategory items={soup} coverImg= {soupImg} title={'Soup'} ></MenuCategory>
    </div>
  )
}

export default Menu