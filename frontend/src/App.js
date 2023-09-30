import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Secondapp from './Secondapp';
import Firstapp from './Firstapp';
import Login from './StudentLogin';
import AdminLogin from './AdminLogin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   <div>
 
     {/* <Secondapp/> */}
     {/* <Login/> */}


<Router>
<Firstapp/>
<Routes>
  <Route path='/' element={<Secondapp/>}/>
  <Route path='/studentlogin' element={<Login/>}/>
  <Route path='/AdminLogin' element={<AdminLogin/>}/>
</Routes>
</Router>


   </div>
    </div>
  );
}

export default App;
