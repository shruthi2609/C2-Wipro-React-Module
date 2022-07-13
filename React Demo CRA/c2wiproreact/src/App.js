/*import ProductCatalog from "./components/ProductCatalog"
import SignUpComponent from "./components/SPA Components/SignUpComponent"
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
import {DashBoard} from "./components/SPA Components/DashBoard"
import SearchComponent from "./components/handlingsessions/SearchComponent"
import ClassLifeCyle from "./components/Network calls/ClassLifeCycle"
import HomePageComponent from "./coxmponents/handlingsessions/HomePage"

import { DashBoardComponent } from "./components/handlingsessions/DashBoard"*/
import ViewContact from "./components/Contact Manager/ViewContacts"
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
import AddContact from "./components/Contact Manager/AddContact"
import DeleteContact from "./components/Contact Manager/DeleteContact"
import SignInComponent from "./components/IntegrationAuthentication/SignInComponent"
import DashBoard from "./components/IntegrationAuthentication/DashBoard"
function App(){
  return(
    <div>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<SignInComponent></SignInComponent>}></Route>
     <Route path="/dashboard/:email" element={<DashBoard></DashBoard>}></Route>
     
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

