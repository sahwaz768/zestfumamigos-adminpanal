import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adminlogin from "./adminlogin/adminlogin";
import Admindashboard from "./admindashboard/admindashboard";
import Createcompanion from "./createcompanion/createcompanion";
import Editcompanionprofile from "./editcompanionprofile/editcompanionprofile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/editcompanionprofile"
          element={<Editcompanionprofile />}
        />
        <Route path="/createcompanion" element={<Createcompanion />} />
        <Route path="/admindashboard" element={<Admindashboard />} />
        <Route path="/" element={<Adminlogin />} />
        <Route path="*" element={<p>404 Page</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
