import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Adminlogin from "./adminlogin/adminlogin"
import Admindashboard from './admindashboard/admindashboard';
import Createcompanion from './createcompanion/createcompanion';
import Editcompanionprofile from './editcompanionprofile/editcompanionprofile';
import Ticket from './ticket/ticket';
import Ticketchat from './ticketchat/ticketchat';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/ticketchat' element={<Ticketchat/>}/>
    <Route path='/ticket' element={<Ticket/>}/>
    <Route path='/editcompanionprofile' element={<Editcompanionprofile/>}/>
    <Route path='/createcompanion' element={<Createcompanion/>}/>
    <Route path='/admindashboard' element={<Admindashboard/>}/>
      <Route path='/' element={<Adminlogin/>}/>
      
    </Routes>
    </BrowserRouter>
  );
};

export default App;
