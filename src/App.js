import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './components/DashboardPage/Dashboard'
import ButtonPage from './components/ComponentsPage/ButtonsPage/ButtonPage'
import Cards from './components/ComponentsPage/CardsPage/Cards'
import Colors from './components/UtilitiesPage/ColorsPage/Colors'
import Borders from './components/UtilitiesPage/BordersPage/Borders'
import Animations from './components/UtilitiesPage/AnimationsPage/Animations'
import Others from './components/UtilitiesPage/OthersPage/Others'
import Login from './components/AddonPages/Login'
import Register from './components/AddonPages/Register'
import ForgotPassword from './components/AddonPages/ForgotPassword'
import ErrorPage from './components/AddonPages/ErrorPage'
import BlankPage from './components/AddonPages/BlankPage'
import Charts from './components/ChartsPage/Charts'
import Tables from './components/TablesPage/Tables'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/buttons" element={<ButtonPage />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/borders" element={<Borders />} />
        <Route path="/animations" element={<Animations />} />
        <Route path="/others" element={<Others />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/errorpage" element={<ErrorPage />} />
        <Route path="/blankpage" element={<BlankPage />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/tables" element={<Tables />} />
      </Routes>
    </div>
  )
}

export default App
