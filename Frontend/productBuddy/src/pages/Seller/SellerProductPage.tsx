import Chart from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

import { Doughnut } from "react-chartjs-2";


const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
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
function SellerProductPage() {
  return (
    <>
      <div className="flex flex-col justify-center p-8">
        <div className="max-w-4xl flex justify-center">
          <div className="w-1/2">
            <img src="https://images.unsplash.com/photo-1589365252845-092198ba5334?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
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
          <div className='max-w-[200px]'>
          <Pie data={data} />

          </div>
        </div>
    </>
  );
}

export default SellerProductPage;
