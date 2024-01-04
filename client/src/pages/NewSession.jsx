import React, { useState } from 'react';
// import bgImage from '../components/sidebar/assets/yoga2.jpg';
import bgImage from '../components/sidebar/assets/b3.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewCheckupForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    patientName: '',
    age: 0,
    gender: '',
    symptoms: '',
    agniFactor: 0,
    durationValue: 1,
    durationUnit: 'days',
    doshaImbalance: {
      vata: 0,
      pitta: 0,
      kapha: 0,
    },
    climate: 'summer',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDoshaChange = (e) => {
    setFormData({
      ...formData,
      doshaImbalance: {
        ...formData.doshaImbalance,
        [e.target.name]: parseFloat(e.target.value),
      },
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);

    const MainSymptom = await axios.post('http://localhost:8080/api/use/getSymptom', formData);
    const data = MainSymptom.data.formulations;
    console.log(data);
    // data.map((form)=>{
    //   alert(`${form.name}\n\n ${form.form}`);
    // })
    navigate('/relatedFormulation', { state:{ symptoms: data } });
  };


  return (
    <div className="bg-purple-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto md:w-4/5 lg:w-2/3 xl:w-1/2 p-4">
        <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
          <div className="w-1/2 p-4">
            <img
              src={bgImage}
              alt="Background"
              className="w-full h-full object-cover rounded"
              style={{ margin: 'auto' }}
            />
          </div>
          <form className="w-1/2 p-6 md:p-8" style={{ maxHeight: '80vh', overflowY: 'auto' }} onSubmit={handleSubmit}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800 text-center">
              New Checkup
            </h2>
            <div className="mb-4">
              <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">
                Patient Name
              </label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                placeholder="Enter patient's name"
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="Enter patient's age"
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-purple-500"
              >
                <option value="" disabled defaultValue>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700">
                Symptoms
              </label>
              <input
                type="text"
                id="symptoms"
                name="symptoms"
                placeholder="Enter patient's symptoms"
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="mb-4">
                <label htmlFor="agniFactor" className="block text-sm font-medium text-gray-700">
                    Agni Factor
                </label>
                <div className="flex items-center">
                    <input
                    type="range"
                    id="agniFactor"
                    name="agniFactor"
                    min="1"
                    max="10"
                    defaultValue={0}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-purple-500"
                    />
                    <span className="ml-2 text-purple-600">{formData.agniFactor}</span>
                </div>
            </div>


            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Duration</label>
              <div className="flex items-center">
                <input
                  type="number"
                  id="durationValue"
                  name="durationValue"
                  placeholder="Enter duration value"
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-purple-500"
                />
                <select
                  id="durationUnit"
                  name="durationUnit"
                  onChange={handleChange}
                  className="ml-2 p-3 border rounded-md focus:outline-none focus:border-purple-500"
                >
                  <option value="days">Days</option>
                  <option value="weeks">Weeks</option>
                  <option value="months">Months</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Dosha Imbalance</label>
              <div className="flex">
                <div className="mr-4">
                  <label htmlFor="vata" className="block text-sm text-gray-700">
                    Vata
                  </label>
                  <input
                    type="number"
                    id="vata"
                    name="vata"
                    step="0.1"
                    placeholder="0"
                    onChange={handleDoshaChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div className="mr-4">
                  <label htmlFor="pitta" className="block text-sm text-gray-700">
                    Pitta
                  </label>
                  <input
                    type="number"
                    id="pitta"
                    name="pitta"
                    step="0.1"
                    placeholder="0"
                    onChange={handleDoshaChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="kapha" className="block text-sm text-gray-700">
                    Kapha
                  </label>
                  <input
                    type="number"
                    id="kapha"
                    name="kapha"
                    step="0.1"
                    placeholder="0"
                    onChange={handleDoshaChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="climate" className="block text-sm font-medium text-gray-700">
                Climate
              </label>
              <select
                id="climate"
                name="climate"
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-purple-500"
              >
                <option value="summer">Summer</option>
                <option value="winter">Winter</option>
                <option value="monsoon">Monsoon</option>
              </select>
            </div>

            <div className="flex items-center justify-between mb-4">
              <button
                type="submit"
                className="w-full bg-purple-600 text-white p-3 md:p-4 rounded-md hover:bg-purple-700"
              >
                Submit Checkup
              </button>
            </div>
          </form>
        </div>
      </div>
    // </div>
  );
};

export default NewCheckupForm;
