import React, { useEffect, useState } from 'react';
import Nav1 from '@/components/ProductDash/Nav1';
import { useParams } from 'react-router-dom';
import ReviewEmotion from './ReviewEmotion';
import { reviewSentimentScore } from '@/api';

function ProductPage({title}:{title:string}) {
  const {productId} = useParams()
  const [sentiment,setSentiment] = useState()
  useEffect(()=>{
    const fetchSentiment = async ()=>{
      try{
        const response1 = await reviewSentimentScore(Number(productId))
        setSentiment(response1.data.avgScore)
      }
      catch(e){
        console.log(e)
      }
    }
    fetchSentiment();
  },[])


  return (
    <>
      <Nav1 />
      <div className="flex justify-center p-8">
        <div className="max-w-4xl flex justify-center border rounded-lg shadow-xl bg-white">
          <div className="w-1/2 p-8">
            <img src="https://images.unsplash.com/photo-1589365252845-092198ba5334?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product" className="w-full rounded-lg shadow-md mb-8" />
          </div>
          <div className="w-1/2 p-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Product Title</h1>
            <p className="text-lg text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum cursus auctor semper. 
              Sed bibendum tortor ut libero accumsan, sit amet consequat sapien pulvinar.
            </p>
            {/* <div className="text-xl text-purple-600 mb-6">Price: $99.99</div> */}
            <div className="text-md font-bold text-black mb-6">Average Sentiment Score of All the Reviews: {sentiment}</div>
            
          </div>
        </div>
      </div>
      <ReviewEmotion id={Number(productId)}/>
    </>
  );
}

export default ProductPage;
