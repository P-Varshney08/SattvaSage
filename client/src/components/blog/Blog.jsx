import React from 'react';
import img from '../sidebar/assets/a1.png';

const Blog = () => {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6">Ayurveda and Holistic Health</h1>
        <img
          src={img} 
          alt="Blog Post"
          className="mb-4 rounded-lg shadow-md"
        />
        <p className="text-gray-700 mb-4">
          Ayurveda, the ancient science of life, is not just a system of medicine but a way of life. It emphasizes the balance between the mind, body, and spirit for overall well-being. In Ayurveda, health is not merely the absence of disease; it is a state of holistic harmony.
        </p>
        <p className="text-gray-700 mb-4">
          The philosophy of Ayurveda recognizes the unique constitution of each individual, known as Prakriti. It suggests personalized approaches to diet, lifestyle, and herbal remedies based on an individual's Prakriti and imbalances.
        </p>
        <p className="text-gray-700 mb-4">
          Incorporating Ayurvedic principles into your life can lead to improved digestion, better mental clarity, and increased vitality. It's about aligning yourself with the natural rhythms of the universe and understanding your body's innate intelligence.
        </p>
        <p className="text-gray-700 mb-4">
          As you embark on your Ayurvedic journey, remember that small, sustainable changes can have profound effects on your well-being. Listen to your body, nurture your spirit, and embrace the wisdom of Ayurveda for a healthier, more balanced life.
        </p>
        {/* Add more blog content as needed */}
      </div>
    </div>
  );
};

export default Blog;

