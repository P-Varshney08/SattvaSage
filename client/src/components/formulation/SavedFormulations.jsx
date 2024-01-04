import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const SavedFormulations = () => {
  const user = useSelector((state) => state.user.userDetails);
  const [savedFormulations, setSavedFormulations] = useState([]);

  useEffect(() => {
    const fetchSavedFormulations = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/use/getSavedFormulations/${user._id}`);
        setSavedFormulations(response.data);
      } catch (error) {
        console.error('Error fetching saved formulations', error);
      }
    };

    fetchSavedFormulations();
  }, [user._id]);

//   const handleRemove = async (formulationId) => {
//     try {
//       await axios.post('http://localhost:8080/api/use/removeFromCollection', {
//         formulationId,
//         userId: user._id
//       });
//       // Update the state to reflect the removal
//       setSavedFormulations(savedFormulations.filter((formulation) => formulation._id !== formulationId));
//     } catch (error) {
//       console.error('Error removing formulation from collection', error);
//     }
//   };
const handleRemove = async(fId) => {
    try {
        await axios.post('http://localhost:8080/api/use/removeSavedFormulation', { fId, userId: user._id });
        setSavedFormulations(savedFormulations.filter((formulation)=> formulation._id!==fId));
        alert('Removed Successfully');
    } catch (error) {
        console.log('Error removing Formulation', error);
    }
}

  return (
    <div className="container mx-auto mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {savedFormulations.map((formulation) => (
        <div
          key={formulation._id}
          className="bg-white rounded-md overflow-hidden shadow-lg p-4 hover:shadow-xl transition duration-300"
        >
          <h2 className="text-xl font-bold mb-2 text-blue-500">{formulation.name}</h2>
          <p className="text-gray-700 mb-2">Ingredients: {formulation.ingredients.join(', ')}</p>
          <p className="text-gray-700 mb-2">Dosage: {formulation.dosage}</p>
          <p className="text-gray-700 mb-2">Anupana: {formulation.anupana}</p>
          <p className="text-gray-700 mb-4">
            Therapeutic Uses: {formulation.therapeuticUses.join(', ')}
          </p>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            onClick={() => handleRemove(formulation._id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default SavedFormulations;
