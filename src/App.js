import { Routes, Route} from "react-router-dom"




import MasterView from "./Components/MasterView";
import StudentView from "./Components/StudentView";
import StudentLogin from "./Components/StudentLogin";
import Home from "./Components/Home"
import MasterLogin from "./Components/MasterLogin";

const App = () => (
   <Routes>
    <Route exact path = "/" element = {<Home/>}/>
    <Route path = "/student-login" element = {<StudentLogin/>}/>
    <Route  path = "/master-login" element = {<MasterLogin/>}/>
    <Route  path = "/master-view" element = {<MasterView/>}/>
    <Route  path = "/student-view" element = {<StudentView/>}/>
  </Routes>
)
;
export default App;