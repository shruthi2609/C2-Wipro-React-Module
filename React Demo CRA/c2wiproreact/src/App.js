/*import ProductCatalog from "./components/ProductCatalog"
import SignUpComponent from "./components/SPA Components/SignUpComponent"
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
import HomePage from "./components/SPA Components/HomePage"
import {DashBoard} from "./components/SPA Components/DashBoard"
import SearchComponent from "./components/SPA Components/SearchComponent"
import ClassLifeCyle from "./components/Network calls/ClassLifeCycle"
function App(){
  return(
    <div>
   <BrowserRouter>
   
 <Link to="/lfc">lfc</Link>
   <Routes>
     <Route path="/" element={<HomePage></HomePage>}></Route>
     <Route path="/signup" element={<SignUpComponent></SignUpComponent>}></Route>
     <Route path="/dashboard/:username/:country" element={<DashBoard></DashBoard>}></Route>
     <Route path="/search" element={<SearchComponent></SearchComponent>}></Route>
<Route path="/lfc" element={<ClassLifeCyle></ClassLifeCyle>}></Route>
   </Routes>

   </BrowserRouter>
    </div>
  )
}
export default App*/
import { useState } from "react"
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
import { Admin, Contact, Home, Navigation } from "./components/Protected Routes/AllComponents"
export default function App(){
  const [user,setUser]=useState(null)
  const handleLogin=()=>{
    setUser({username:"john",role:"admin"})
  }
  const handleLogout=()=>{
    setUser(null)
  }
  return(
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
    <BrowserRouter>
    <Navigation></Navigation>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/admin" element={<Admin user={user}></Admin>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

