import MenuItem from "../../Components/MenuItem"
import Cover from "../Shared/Cover"

const MenuCategory = ({items,title,coverImg}) => {
  return (
    <div className="pt-8">
         {title && <Cover img={coverImg} title={title} ></Cover>}
          <div className='grid grid-cols-2 gap-6 mt-16 mb-12'>
        {
            items.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
        }
        </div>
    </div>
  )
}

export default MenuCategory