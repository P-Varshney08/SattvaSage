import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import History from './pages/History';
import Sidebar from './components/sidebar/Sidebar';
import NewSession from './pages/NewSession';
import ProtectedRoute from './ProtectedRoute.jsx';
import Blog from './components/blog/Blog.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import KnowYourDosha from './components/knowYourDosha/KnowYourDosha.jsx';
import RelatedFormulations from './components/formulation/RelatedFormulation.jsx';
import FormulationDetails from './components/formulation/FormulationDetails.jsx';
import SavedFormulations from './components/formulation/SavedFormulations.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex overflow-auto justify-between bg-[#e6e6e6] p-4 space-x-5">
        <Sidebar />
        <div className='w-4/5'>
          <Navbar />
          <div className='mt-4'>
            <ToastContainer/>
              <Routes>
                <Route path='/' element={<Home/>} ></Route>
                <Route path='/signin' element={<Signin/>} ></Route>
                <Route path='/signup' element={<Signup/>} ></Route>
                <Route path='/blog' element={<Blog/>} ></Route>
                <Route path='/know' element={<KnowYourDosha/>} ></Route>
                <Route path='/relatedFormulation' element={<RelatedFormulations/>} ></Route>
                <Route path='/formulationDetails' element={<FormulationDetails/>} ></Route>

                <Route element={<ProtectedRoute/>}>
                  <Route path='/map' element={<Home/>} ></Route>
                  <Route path='/history' element={<History/>} ></Route>
                  <Route path='/newSession' element={<NewSession/>} ></Route>
                  <Route path='/savedFormulations' element={<SavedFormulations/>} ></Route>
                </Route>
              </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
