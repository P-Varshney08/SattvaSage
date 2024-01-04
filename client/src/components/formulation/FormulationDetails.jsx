import React from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux';

const FormulationDetails = () => {
  const location = useLocation();
  const formulationDetails = location.state.formulationDetails;

  const user = useSelector((state)=> state.user.userDetails);
  const isLogin = !!user;
  const handleSave = async(e, formulationId) => {
    try {
        const res = await axios.post('http://localhost:8080/api/use/saveFormulation', {formulationId, userId: user._id});
        alert('Formulation saved');
    } catch (error) {
        console.log('Error saving Formulation', error);
    }
  }

  if (!formulationDetails) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg">Formulation details not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8 p-6 bg-white rounded-md shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">{formulationDetails.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Ingredients:</h3>
          <ul className="list-disc pl-4">
            {formulationDetails.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-600">{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Dosage:</h3>
          <p className="text-gray-600">{formulationDetails.dosage}</p>
          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700">Anupana:</h3>
          <p className="text-gray-600">{formulationDetails.anupana}</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Therapeutic Uses:</h3>
        <ul className="list-disc pl-4">
          {formulationDetails.therapeuticUses.map((use, index) => (
            <li key={index} className="text-gray-600">{use}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Reference Books:</h3>
        <p className="text-gray-600">{formulationDetails.referenceBook}</p>
      </div>
      {isLogin && <button className="mt-8 bg-[#24b565] text-white py-2 px-4 rounded hover:bg-[#1f9956]" onClick={(e)=> handleSave(e, formulationDetails._id) }>
        Save Formulation
      </button>}
    </div>
  );
};

export default FormulationDetails;
