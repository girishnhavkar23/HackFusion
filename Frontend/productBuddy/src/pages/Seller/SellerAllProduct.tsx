import { useEffect, useState } from "react";

import { getAllProducts } from "@/api";
import SpinnerCircular from "@/components/ui/SpinnerCircular";
import SellerProductCard from "@/components/ProductDash/SellerProductCard";

function AllProducts() {

  const [products,setProducts] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  useEffect(()=>{
    const fetchProducts = async ()=>{
      try{
        setIsLoading(true)
        const response = await getAllProducts()
        setProducts(response.data)
      }
      catch(e){
        console.log(e)
      }
      finally{
        setIsLoading(false)
      }
    }
    fetchProducts();
  },[])


  return (
    <div className="m-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {!isLoading&&
          products.map((item)=>(
            <SellerProductCard title={item.name} id={item.id}/>
          ))
        }
        {
          isLoading &&
          <SpinnerCircular/>
        }
      </div>
    </div>
  );
}

export default AllProducts;
