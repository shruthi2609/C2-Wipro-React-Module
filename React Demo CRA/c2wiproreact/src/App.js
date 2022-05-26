import ProductCatalog from "./components/ProductCatalog"
import SignUpComponent from "./components/SPA Components/SignUpComponent"
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
import HomePage from "./components/SPA Components/HomePage"
import {DashBoard} from "./components/SPA Components/DashBoard"
import SearchComponent from "./components/SPA Components/SearchComponent"
function App(){
  return(
    <div>
   <BrowserRouter>
   
 { /* <Link to="/dashboard">DashBoard</Link>*/}
   <Routes>
     <Route path="/" element={<HomePage></HomePage>}></Route>
     <Route path="/signup" element={<SignUpComponent></SignUpComponent>}></Route>
     <Route path="/dashboard/:username/:email/:country" element={<DashBoard></DashBoard>}></Route>
     <Route path="/search" element={<SearchComponent></SearchComponent>}></Route>

   </Routes>

   </BrowserRouter>
    </div>
  )
}
export default App