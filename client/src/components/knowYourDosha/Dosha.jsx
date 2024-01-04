import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoshaCalculator = () => {
    const navigate = useNavigate();
    const quotes = [
        "Balance is the key to health and well-being.",
        "Harmony of body, mind, and spirit leads to a balanced life.",
        "Understanding your Dosha can help you make healthier choices.",
    ];

    const handleCalculate = () => {
        navigate('/know');
    };

  return (
    <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg shadow-lg p-6 md:p-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf5lBcY4WIYoHijUIjCVf5EdivqQ5gR14n0PPzNfI6WXPVi3xl96A6jInPgEWDyeo_JcY&usqp=CAU" 
            src="https://media.istockphoto.com/id/1126161039/vector/three-doshas-vata-pitta-kapha-ayurvedic-symbols-of-body-constitution-types-designed-with-the.jpg?s=612x612&w=0&k=20&c=zTBh9vLQEh-_FGNfIzrqs2jLAaw12qxsbudeWuzEkDo=" 
            alt="Dosha Image"
            className="w-full h-auto rounded-lg mb-4 md:mb-0"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-black">Know Tridoshas</h2>
          <div className="space-y-4">
            {quotes.map((quote, index) => (
              <p key={index} className="text-sm md:text-base text-black">
                &ldquo;{quote}&rdquo;
              </p>
            ))}
          </div>
          <button
            className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 active:scale-95 mt-6"
            onClick={handleCalculate}
          >
            Calculate Your Dosha
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoshaCalculator;
