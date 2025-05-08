
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import  Profile  from './Profile.js';
import  './Profile.css';
import Register from './Register.js';
import Aboutus from './Aboutus.js';


import { HashRouter as Router, Routes, RouterProvider, Route} from 'react-router-dom';

const router = createBrowserRouter([
    
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/Register",
    element: <Register/>,
  },
  {
    path: "/aboutus",
    element: <Aboutus/>,
  }
])


function App() {

  <RouterProvider router={router} />

  return ( 

    <Router>
      <Routes>

        <Route path='/' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>

      </Routes>
    </Router>
    
  );
  
}


export default App;
