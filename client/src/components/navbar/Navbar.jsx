import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import saved from './assets/saved.png';
import user from './assets/user.png';
import { setUserDetails } from '../../redux/user/userSlice.js';
import { Location } from 'react-router-dom';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [allSuggestions, setAllSuggestions] = useState([]);

  useEffect(() => {
    // Fetch data from your API or other source
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/auth/getSymptom');
        const data = await response.json();

        // Assuming the data is an array of symptom objects with a 'name' property
        const symptomNames = data.map((symptom) => symptom.name);
        // console.log(symptomNames);
        // Set the array of all symptom names
        setAllSuggestions(symptomNames);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
// const allSuggestions = ['Fever', 'Cold', 'Headache', 'Digestion', 'Stress', 'Blood in Stool'];


  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    // Filter suggestions based on the current input value
    const filteredSuggestions = allSuggestions.filter((term) =>
      term.toLowerCase().includes(inputValue.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    setSelectedSuggestion(suggestion);
    console.log('Selected Suggestion: ', suggestion);
  };

  const isAuthenticated = useSelector((state) => state.user.userDetails);
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log('Logging Out');
    dispatch(setUserDetails(null));
    localStorage.removeItem('root');
  };

  return (
    <div className=''>
      <nav className="navbar bg-white shadow-md px-14 py-3 z-50 ">
      {/* <nav className="navbar bg-white shadow-md px-14 py-3 z-50 fixed w-4/5 top-4 right-4"> */}
      {/* <nav className="navbar bg-white shadow-md px-14 py-3 z-50 top-4"> */}
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <span className="text-gray-800 text-lg font-bold">Dashboard</span>
          </div>
          <div className="max-w-lg mx-4 flex-1">
            <input
              type="text"
              placeholder="Search here ..."
              onChange={handleInputChange}
              value={query}
              className="w-full px-4 py-2 rounded bg-gray-300 focus:outline-none focus:shadow-outline transition-all duration-400 hover:bg-gray-300"
            />
            {suggestions.length > 0 && (
              <ul className="border border-gray-300 bg-white absolute z-10 mt-1 w-[32rem]">
                {query &&
                  suggestions.map((term, index) => (
                    <li
                      key={index}
                      className={`p-2 hover:bg-gray-200 cursor-pointer w-[32rem] ${
                        selectedSuggestion === term ? 'bg-gray-300' : ''
                      }`}
                      onClick={() => handleSuggestionClick(term)}
                    >
                      {term}
                    </li>
                  ))}
              </ul>
            )}
          </div>

          {isAuthenticated ? (
            // If the user is authenticated, show the main options
            <div className="flex items-center space-x-8">
              <Link
                to="/savedFormulations"
                className="text-gray-800 hover:text-gray-600 transition-all duration-300"
              >
                <img src={saved} alt="Saved Formulations" className="w-8 h-8 rounded-full" />
              </Link>

              <Link
                to="/symptom-analysis"
                className="text-gray-800 hover:text-gray-600 transition-all duration-300"
              >
                Symptom Analysis
              </Link>

              <Link
                to="/profile"
                className="text-gray-800 hover:text-gray-600 transition-all duration-300"
              >
                <img src={user} alt="profile" height={30} width={30} />
                {/* Profile */}
              </Link>

              <button
                className="text-gray-800 hover:text-gray-600 transition-all duration-300"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-10">
              <Link to="/support" className="text-black">
                Support
              </Link>

              <Link to="/signin" className="text-black">
                Login
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
