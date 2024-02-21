import Chart from 'chart.js/auto';
import { Pie, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

import { Doughnut } from "react-chartjs-2";
import { getProduct, getTopics, reviewSentimentScore } from '@/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewEmotion from '../Products/ReviewEmotion';




export const data1 = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

function SellerProductPage() {
  const {productId} = useParams()
  const [sentiment,setSentiment] = useState()
  const [product,setProduct] = useState()
  const [dataArray,setDataArray] = useState([])
  const [topics,setTopics] = useState()
  useEffect(()=>{
    const fetchSentiment = async ()=>{
      try{
        const response = await getProduct(Number(productId))
        const response1 = await reviewSentimentScore(Number(productId))
        const response2 = await getTopics(Number(productId))
        setTopics(response2.data.topics)
        setProduct(response.data["product-info"])
        setSentiment(response1.data.avgScore)
        setDataArray(convertToCountArray(response1.data.review_scores))
      }
      catch(e){
        console.log(e)
      }
    }
    fetchSentiment();
  },[])
  function convertToCountArray(reviews) {
    const countArray = [0, 0, 0, 0, 0]; // Initialize count array with 5 zeros
    
    // Iterate over reviews and count occurrences of each score
    reviews.forEach(review => {
      countArray[review.score - 1]++;
    });
    
    return countArray;
  }
  const data = {
    labels: [1,2,3,4,5],
    datasets: [
      {
        label: '# of Votes',
        data: dataArray,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  console.log(dataArray)
  return (
    <>
    {
      product &&
    <div className="flex justify-center"> {/* Container */}
      <div className="flex flex-col justify-center p-8">
      <div className="flex justify-center p-8">
        <div className="max-w-4xl flex justify-center border rounded-lg shadow-xl bg-white">
          <div className="w-1/2 p-8 flex flex-col justify-center">
            < img src={product.image_url}  />
          </div>
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">{product.name}</h1>
            <div className="border-red-500 border-2 rounded-md p-4 text-lg font-bold text-black mb-6">Average Sentiment Score of All the Reviews: {sentiment}</div>
            {topics && <div>The common topics in the reviews are {topics.map((item)=>(<div className="font-bold">{item}</div>))}</div>}
            
          </div>
        </div>
      </div>

        <div className="flex flex-col items-center mt-10"> {/* Centered Stats Container */}
          <div className='text-[30px] font-bold'>Product Stats</div>
          <div className='max-w-[500px]'>
            <Pie data={data} />
            <div className='text-center'>Breakdown of Ratings</div>
          </div>
          {/* <div className='max-w-[500px]'>
          <Radar data={data1} />
            <div className='text-center'>The calculated sentiment Score</div>
          </div> */}
        </div>
      <ReviewEmotion id={Number(productId)}/>
      </div>
    </div>
    }
  </>
  

  );
}

export default SellerProductPage;
