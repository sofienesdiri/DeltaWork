
import './App.css';

import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";

import Errors from "./component/Errors";
import Home from './component/Home'
import FreelancerProfile from './component/User/FreelancerProfile'
import Register from './component/Register'
import SignIn from './component/SignIn';
import EditFreelancer from './component/User/EditFreelancer'
import EditClient from './component/User/EditClient'
import ListAnnonces from './component/Annonce/ListAnnonces';
import CardDetail from './component/Annonce/CardDetail';
import ProfileClient from './component/User/ProfileClient'
import Admin from './component/Admin'
import AddAnnonce from './component/Annonce/AddAnnonce';
import EditPassword from './component/User/EditPassword';
import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import { current } from './Redux/Actions/UserActions';
import { CompleteProfile } from './component/User/CompleteProfile';
import EditAnnonce from './component/Annonce/EditAnnonce';
import ViewProfilByClient from './component/User/ViewProfilByClient';
import HomeAnnonces from './component/Annonce/HomeAnnonces';

function App() {

  const [rech,setRech] = useState('')

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(current())
  },[])
  return (
    <div>
      
      <Errors/>
        <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path='/Profile' element={<PrivateRoute><FreelancerProfile setRech={setRech}/></PrivateRoute>}/> 

          <Route path='/Register' element={<Register/>}/>
          <Route path='/SignIn' element={<SignIn/>}/>
          <Route path='/EditFreelancer/:id' element={<PrivateRoute><EditFreelancer/></PrivateRoute>}/>
          <Route path='/EditClient/:id' element={<PrivateRoute><EditClient/></PrivateRoute>}/>

          <Route path='/ListAnnonces' element={<PrivateRoute><ListAnnonces rech={rech}/></PrivateRoute>}/>

          <Route path='/HomeAnnonces'  element={<HomeAnnonces/>}/>

          <Route path='/AnnonceDetail/:id' element={<PrivateRoute><CardDetail/></PrivateRoute>}/>
          <Route path='/ProfileClient' element={<PrivateRoute><ProfileClient/></PrivateRoute>}/>
          <Route path='/Admin' element={<Admin/>}/>
          <Route path='/AddAnnonce' element={<PrivateRoute><AddAnnonce/></PrivateRoute>}/>
          <Route path='/EditPassword/:id' element={<PrivateRoute><EditPassword/></PrivateRoute>}/>
          <Route path='/CompleteProfile/:id' element={<PrivateRoute><CompleteProfile/></PrivateRoute>}/>
          <Route path='/EditAnnonce/:id' element={<PrivateRoute><EditAnnonce/></PrivateRoute>}/>
          
          <Route path='/ViewProfilByClient/:id'  element={<ViewProfilByClient/>}/>
        </Routes>
        
      

      
    </div>
  );
}

export default App;
