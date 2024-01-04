import React from 'react'
import Footer from '../components/footer/Footer'
import { useSelector } from 'react-redux'
import Dosha from '../components/knowYourDosha/Dosha';

function Home() {
  const user = useSelector((state)=> state.user.userDetails);
  return (
    <div className=''>
      {/* {user ? (<p>{user.username}</p>): (<p>No user Exist</p>)} */}
      
    <div
          className="min-h-screen flex items-center justify-center bg-cover"
      style={{ backgroundImage: `url(${'https://img.freepik.com/free-photo/tropical-leaf-wallpaper-that-is-green-has-black-background_1340-22965.jpg?t=st=1703709599~exp=1703713199~hmac=f1e9c484734e07c5a700ac685c7d8d818390c66ed87724c82264e17e000a20bd&w=996'})` }}
      // style={{ backgroundImage: `url(${'https://img.freepik.com/premium-photo/medicinal-neem-leaves-mortar-pestle-with-paste-twigs-green-wall_136354-7050.jpg?size=626&ext=jpg&ga=GA1.1.966123688.1703420893&semt=ais'})` }}
      // style={{ backgroundImage: `url(${'https://img.freepik.com/premium-photo/green-medical-abstract-background-with-with-stethoscope_877191-205.jpg?ga=GA1.1.966123688.1703420893&semt=ais_ai_generated'})` }}
    >
      <div className="bg-white bg-opacity-25 p-6 rounded-lg backdrop-filter backdrop-blur-md">
        <h1 className="text-4xl font-bold text-white mb-4">Discover the Power of Ayurveda<br/> with SattvaSage</h1>
        <p className="text-lg text-white mb-6">
          Explore the ancient wisdom of Ayurveda to enhance your well-being.
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-all duration-300">
          Search for Formulation
        </button>
        {user ? (
          <p className="text-lg text-white mt-4">Welcome, {user.username}!</p>
          // <p>{user.dosha_scores}</p>
        ) : (
          <p className="text-lg text-white mt-4">Sign in to unlock personalized content.</p>
        )}
      </div>
    </div>
      <Dosha />
      <Footer />
    </div>
  )
}

export default Home