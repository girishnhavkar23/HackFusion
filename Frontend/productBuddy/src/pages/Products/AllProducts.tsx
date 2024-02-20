import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getAllProducts } from "@/api";

function AllProducts() {

  const [products,setProducts] = useState([])
  useEffect(()=>{
    const fetchProducts = async ()=>{
      try{
        const response = await getAllProducts()
        setProducts(response.data)
      }
      catch(e){
        console.log(e)
      }
    }
    fetchProducts();
  },[])


  return (
    <div className="m-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
          products.map((item)=>(
            <ProductCard title={item.name}/>
          ))
        }
      </div>
    </div>
  );
}

export default AllProducts;
