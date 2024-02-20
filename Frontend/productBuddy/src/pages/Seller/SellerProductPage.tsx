import Chart from 'chart.js/auto';
import { Pie, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

import { Doughnut } from "react-chartjs-2";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { reviewSentimentScore } from '@/api';
import SpinnerCircular from '@/components/ui/SpinnerCircular';





function SellerProductPage() {
  const {productId} = useParams()
  const [sentiment,setSentiment] = useState()
  const [isLoading,setIsLoading] =useState(false)
  const [scores,setScores] = useState([])
  function convertToCountArray(reviews) {
    const countArray = [0, 0, 0, 0, 0]; // Initialize count array with 5 zeros
    
    // Iterate over reviews and count occurrences of each score
    reviews.forEach(review => {
      countArray[review.score - 1]++;
    });
    
    return countArray;
  }
  useEffect(()=>{
    const fetchSentiment = async ()=>{
      try{
        setIsLoading(true)
        const response1 = await reviewSentimentScore(Number(productId))
        setSentiment(response1.data)
        setScores(convertToCountArray(response1.data.review_scores))
      }
      catch(e){
        console.log(e)
      }
      finally{
        setIsLoading(false)
      }
    }
    fetchSentiment();
  },[])
  console.log(scores)
  const data = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
      {
        label: '# of Votes',
        data: scores,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
    <div className="flex justify-center"> {/* Container */}
      <div className="flex flex-col justify-center p-8">
        <div className="max-w-4xl flex justify-center">
          <div className="w-1/2">
            <img src="https://images.unsplash.com/photo-1589365252845-092198ba5334?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='rounded-md'/>
          </div>
          <div className="w-1/2 p-8">
            <h1 className="text-3xl font-semibold mb-4">Product Title</h1>
            <p className="text-lg text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum cursus auctor semper. 
              Sed bibendum tortor ut libero accumsan, sit amet consequat sapien pulvinar.
            </p>
            <div className="text-xl mb-6">Price: $99.99</div>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Buy Now</button>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10"> {/* Centered Stats Container */}
          <div className='text-[30px] font-bold'>Product Stats</div>
          {
            isLoading&&<SpinnerCircular/>

          }{
            !isLoading &&
          <div className='max-w-[500px]'>
            <Pie data={data} />
            <div className='text-center'>Breakdown of Rating Sentiment Scores</div>
          </div>
          }
          {/* <div className='max-w-[500px]'>
          <Radar data={data1} />
            <div className='text-center'>The calculated sentiment Score</div>
          </div> */}
        </div>
      </div>
    </div>
  </>
  

  );
}

export default SellerProductPage;
