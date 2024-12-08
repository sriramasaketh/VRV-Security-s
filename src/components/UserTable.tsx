import React from 'react'

interface User {
  id: number
  name: string
  email: string
  role: string
  status: string
}

interface UserTableProps {
  users: User[]
  onEdit: (user: User) => void
  onDelete: (id: number) => void
}

const UserTable: React.FC<UserTableProps> = ({users, onEdit, onDelete}) => {
  return (
    <table className='table-auto w-full border'>
      <thead>
        <tr>
          <th className='border px-4 py-2'>Name</th>
          <th className='border px-4 py-2'>Email</th>
          <th className='border px-4 py-2'>Role</th>
          <th className='border px-4 py-2'>Status</th>
          <th className='border px-4 py-2'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td className='border px-4 py-2'>{user.name}</td>
            <td className='border px-4 py-2'>{user.email}</td>
            <td className='border px-4 py-2'>{user.role}</td>
            <td className='border px-4 py-2'>{user.status}</td>
            <td className='border px-4 py-2'>
              <button
                onClick={() => onEdit(user)}
                className='text-blue-500 mr-2'
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(user.id)}
                className='text-red-500'
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable
