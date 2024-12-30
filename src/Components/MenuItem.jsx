import React from 'react'

const MenuItem = ({item}) => {
    const {name,price,image,recipe}=item;
  return (
    <div className='flex space-x-2'> 
        <img style={{borderRadius: "0px 200px 200px 200px"}} className='w-[120px]' src={image} alt="" />
        <div>
            <p className='uppercase'>{name}</p>
            <p>{recipe}</p> 

        </div>
        <p className='text-yellow-400'>{price}</p>
    </div>
  )
}

export default MenuItem