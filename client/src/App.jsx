import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FrontDesk from './pages/FrontDesk'
import Rooms from './pages/Rooms'
import Revenue from './pages/Revenue'
import Security from './pages/Security'
import RestaurantAndBar from './pages/RestaurantAndBar'
import Employees from './pages/Employees'
import Housekeeping from './pages/HouseKeeping'

function App() {
  

  return (
    <BrowserRouter basename='/hotel-mangement-system'>
      <Routes>
        <Route path='/' element={<FrontDesk/>}/>
        <Route path='/rooms' element={<Rooms/>}/>
        <Route path='/revenue' element={<Revenue/>}/>
        <Route path='/security' element={<Security/>}/>
        <Route path='/restaurantandbar' element={<RestaurantAndBar/>}/>
        <Route path='/employees' element={<Employees/>}/>
        <Route path='/housekeeping' element={<Housekeeping/>}/>
      </Routes>
      

    </BrowserRouter>
      
      
    
  )
}

export default App
