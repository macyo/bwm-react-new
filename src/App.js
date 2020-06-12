import React from 'react';
import Header from './components/Shared/Header'
import RentalHome from './pages/RentalHome'
import Login from './pages/login'
import Register from './pages/register';


function App() {


  const renderPage = () => {
    const { pathname } = window.location
  debugger
    switch(pathname) {
      case '/':
        return <RentalHome />
      case '/login':
        return <Login />
      case '/register':
        return <Register />
      default:
        return <RentalHome /> 
      }
  }
  return (
    <div>
    <Header />
    { renderPage() }
    </div>

  )
}

export default App;
