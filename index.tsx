import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './index.css'
import UserTable from './UserTable'
import RoleTable from './RoleTable'
import Header from './Header'

const App = () => {
  return (
    <Router>
      <div className='app'>
        {/* Application Header */}
        <Header />

        {/* Navigation Links */}
        <nav className='navbar'>
          <Link to='/users' className='nav-link'>
            Users
          </Link>
          <Link to='/roles' className='nav-link'>
            Roles
          </Link>
        </nav>

        {/* Main Content Area */}
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<h2>Welcome to the RBAC System</h2>} />
            <Route path='/users' element={<UserTable />} />
            <Route path='/roles' element={<RoleTable />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
