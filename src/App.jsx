import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Adminlogin from "./adminlogin/adminlogin"
import Admindashboard from './admindashboard/admindashboard';
import Createcompanion from './createcompanion/createcompanion';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/createcompanion' element={<Createcompanion/>}/>
    <Route path='/admindashboard' element={<Admindashboard/>}/>
      <Route path='/' element={<Adminlogin/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
