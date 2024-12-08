import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Roles from './pages/Roles'

function App() {
  return (
    <Router>
      <div className='flex'>
        <Sidebar />
        <main className='flex-1 p-4'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/users' element={<Users />} />
            <Route path='/roles' element={<Roles />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
