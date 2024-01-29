import './App.css'
import LoginPage from './components/LoginPage'
import OrderPage from './components/OrderPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/order" element={<OrderPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App
