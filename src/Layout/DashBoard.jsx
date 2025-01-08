import { FaAd, FaBars, FaBook, FaCalendar, FaCartPlus, FaHome, FaList, FaMoneyBill, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa"
import { TbMessageStar } from "react-icons/tb";

import { NavLink, Outlet } from "react-router-dom"
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
// TODO: get isAdmin value from database
    const [isAdmin]=useAdmin()
   
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-500">
                <ul className="menu p-6">
                  {
                    isAdmin?<>

<li>
                        <NavLink to="/dashboard/adminHome"> <FaHome></FaHome> Admin Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addItems"> <FaUtensils></FaUtensils> Add Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageItems"> <FaList/> Manage Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageBookings"> <FaBook/> Manage Bookings</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/allUsers"> <FaUser />All Users</NavLink>
                    </li>
                 

                    </>
                    :
                    <>
                      <li>
                        <NavLink to="/dashboard/userHome"> <FaHome></FaHome> User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation"> <FaCalendar></FaCalendar> Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/paymenyHistory"> <FaMoneyBill></FaMoneyBill> Paymeny History</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">  <FaShoppingCart></FaShoppingCart> My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addReview"> <TbMessageStar /> Add Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/myBookings"><FaList /> My Bookings</NavLink>
                    </li>
                    </>
                  }
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"> <FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu"> <FaBars></FaBars> Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad"> <FaCartPlus></FaCartPlus> Shop</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default DashBoard