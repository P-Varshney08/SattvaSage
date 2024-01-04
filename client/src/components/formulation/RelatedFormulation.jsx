import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const RelatedFormulations = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const formulations = location.state && location.state.symptoms;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFormulations = async () => {
      try {
        setLoading(true);
        // Fetch formulations data from API if needed
        // const response = await axios.post('http://localhost:8080/api/use/getSymptom', { symptoms });
        // setFormulations(response.data);
      } catch (error) {
        setError('Error fetching formulations');
      } finally {
        setLoading(false);
      }
    };

    fetchFormulations();
  }, [formulations]);
  
  const handleClick = async (e, formulationName) => {
    e.preventDefault();
    console.log(formulationName);
    try {
      const res = await axios.get(`http://localhost:8080/api/use/getFormulation?name=${formulationName}`);
      const formulationDetails = res.data;
      console.log("related formulation page pr: ", formulationDetails);
      navigate(`/formulationDetails`, { state: { formulationDetails } });
    } catch (error) {
      console.error("Error fetching formulation details:", error);
    }
  };
  

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold text-black text-center mb-6">Related Formulations</h2>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {loading && <p className="text-gray-700">Loading...</p>}

        {error && <p className="text-red-500">Error: {error}</p>}

        {formulations && formulations.length === 0 && (
          <p className="text-gray-700">No formulations found for the given symptoms.</p>
        )}

        {formulations &&
          formulations.length > 0 &&
          formulations.map((formulation) => (
            <div
              key={formulation._id}
              className="bg-white rounded overflow-hidden shadow-lg p-4 hover:shadow-xl transition duration-300"
            >
              <strong className="text-xl text-green-800">{formulation.name}</strong>
              <p className="text-gray-700">Dosage: {formulation.form}</p>
              <button className="bg-green-500 text-white py-2 px-4 rounded mt-2 hover:bg-green-600" onClick={(e) => handleClick(e, formulation.name)}>
                View Details
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RelatedFormulations;
