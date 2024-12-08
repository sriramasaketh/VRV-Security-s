import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-64 bg-gray-800 text-white h-screen p-4'>
      <h2 className='text-lg font-bold mb-4'>RBAC Dashboard</h2>
      <nav>
        <ul className='space-y-2'>
          <li>
            <Link to='/' className='block p-2 hover:bg-gray-700 rounded'>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to='/users' className='block p-2 hover:bg-gray-700 rounded'>
              User Management
            </Link>
          </li>
          <li>
            <Link to='/roles' className='block p-2 hover:bg-gray-700 rounded'>
              Role Management
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
