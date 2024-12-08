import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-blue-500 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-lg font-bold'>RBAC System</h1>
        <nav className='space-x-4'>
          <Link to='/' className='hover:underline'>
            Dashboard
          </Link>
          <Link to='/users' className='hover:underline'>
            Users
          </Link>
          <Link to='/roles' className='hover:underline'>
            Roles
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
