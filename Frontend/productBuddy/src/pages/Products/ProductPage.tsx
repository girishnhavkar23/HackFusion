import React, { useEffect, useState } from 'react';
import Nav1 from '@/components/ProductDash/Nav1';
import { useParams } from 'react-router-dom';
import ReviewEmotion from './ReviewEmotion';
import { getProduct, reviewSentimentScore } from '@/api';

function ProductPage({title}:{title:string}) {
  const {productId} = useParams()
  const [sentiment,setSentiment] = useState()
  const [product,setProduct] = useState()
  useEffect(()=>{
    const fetchSentiment = async ()=>{
      try{
        const response = await getProduct(Number(productId))
        const response1 = await reviewSentimentScore(Number(productId))
        setProduct(response.data["product-info"])
        setSentiment(response1.data.avgScore)
      }
      catch(e){
        console.log(e)
      }
    }
    fetchSentiment();
  },[])
  console.log(product)

  return (
    <>
      <Nav1 />
      {product &&

      <div className="flex justify-center p-8">
        <div className="max-w-4xl flex justify-center border rounded-lg shadow-xl bg-white">
          <div className="w-1/2 p-8">
            <img src={product.image_url} />
          </div>
          <div className="w-1/2 p-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">{product.name}</h1>
            {/* <div className="text-xl text-purple-600 mb-6">Price: $99.99</div> */}
            <div className="border-red-500 border-2 rounded-md p-4 text-lg font-bold text-black mb-6">Average Sentiment Score of All the Reviews: {sentiment}</div>
            
          </div>
        </div>
      </div>
      }
      <ReviewEmotion id={Number(productId)}/>
    </>
  );
}

export default ProductPage;
