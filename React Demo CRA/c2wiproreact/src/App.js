import ProductCatalog from "./components/ProductCatalog"
import SignUpComponent from "./components/SPA Components/SignUpComponent"
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
import HomePage from "./components/SPA Components/HomePage"
import {DashBoard} from "./components/SPA Components/DashBoard"
import SearchComponent from "./components/handlingsessions/SearchComponent"
import ClassLifeCyle from "./components/Network calls/ClassLifeCycle"
import HomePageComponent from "./components/handlingsessions/HomePage"
import SignINComponent from "./components/handlingsessions/SignINComponent"
import { DashBoardComponent } from "./components/handlingsessions/DashBoard"
function App(){
  return(
    <div>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<HomePageComponent></HomePageComponent>}></Route>
     <Route path="/signin" element={<SignINComponent></SignINComponent>}></Route>
     <Route path="/dashboard" element={<DashBoardComponent></DashBoardComponent>}></Route>
     <Route path="/search" element={<SearchComponent></SearchComponent>}></Route>

   </Routes>

   </BrowserRouter>
    </div>
  )
}
export default App
/*import { useState } from "react"
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
}*/

