import React from 'react'
import SectionTitle from '../../../Components/SectionTitle'
import { useForm } from 'react-hook-form'
import { FaUtensils } from 'react-icons/fa'
import useAxiosPublic from '../../../hooks/useAxiosPublic'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import Swal from 'sweetalert2'

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
  const { register, handleSubmit,reset } = useForm()
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const onSubmit = async (data) => {
    console.log(data)
    // image up to imgbb get url
    const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    if (res.data.success) {
      // send the menu item data to server
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url
      }
      const menuRes = await axiosSecure.post('/menu', menuItem)
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        // show success modal
        reset()

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item Added Succesfully",
          showConfirmButton: false,
          timer: 1500
        });
      }


    }
    console.log('image url', res.data);


  }
  return (
    <div>
      <SectionTitle heading={"add an items"} subHeading={"Whats New?"}></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full my-6 ">
          <label className="label">
            <span className="label-text">Recipe Name *</span>
          </label>
          <input type="text"  {...register("name", { required: true })} placeholder="Recipe Name" className="input input-bordered w-full " />
        </div>

        <div className='flex gap-6'>
          {/* category */}
          <div className="form-control w-full my-6 ">
            <label className="label">
              <span className="label-text">Category Name *</span>
            </label>
            <select defaultValue={"default"} {...register("category", { required: true })} className='select select-bordered w-full '>
              <option disabled value="default">Select a Category</option>
              <option value="salad">salad</option>
              <option value="pizza">pizza</option>
              <option value="soup">soup</option>
              <option value="dessert">dessert</option>
              <option value="drinks">drinks</option>
            </select>
          </div>

          {/* Price */}

          <div className="form-control w-full my-6 ">
            <label className="label">
              <span className="label-text">Price *</span>
            </label>
            <input type="number"  {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />
          </div>

        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe Details</span>
          </div>
          <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>

        </label>
        <div className='form-control w-full my-6'>
          <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
        </div>


        <button className='btn  '>Add Items   <FaUtensils></FaUtensils> </button>
      </form>
    </div>

  )
}

export default AddItems