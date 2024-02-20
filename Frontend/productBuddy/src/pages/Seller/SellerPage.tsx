import Nav1 from "@/components/ProductDash/Nav1"
import { Outlet } from "react-router-dom"

function SellerPage() {
  return (
    <div>
      <Nav1/>
      <Outlet/>
    </div>
  )
}

export default SellerPage
