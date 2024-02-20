import LeftSideBar from "@/components/ProductDash/LeftSideBar"
import Nav1 from "@/components/ProductDash/Nav1"
import { Outlet } from "react-router-dom"
import AllProducts from "./AllProducts"

function Products() {
  return (
    <>
      <div className='flex '>
        <LeftSideBar/>
        <div className='grow'>
          <Nav1/>
          <AllProducts/>
          <div className='overflow-y-scroll grow main-content'>
            <Outlet/>
          </div>

        </div>

      </div>
       
    </>
  )
}

export default Products
