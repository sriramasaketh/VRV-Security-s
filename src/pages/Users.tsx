import React, {useState} from 'react'

interface User {
  id: number
  name: string
  email: string
  role: string
  status: string
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      status: 'Inactive',
    },
  ])

  const [form, setForm] = useState<Partial<User>>({
    name: '',
    email: '',
    role: '',
    status: 'Active',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.id) {
      setUsers(users.map(u => (u.id === form.id ? ({...form} as User) : u)))
    } else {
      setUsers([...users, {id: Date.now(), ...form} as User])
    }
    setForm({name: '', email: '', role: '', status: 'Active'})
  }

  const handleEdit = (user: User) => {
    setForm(user)
  }

  const handleDelete = (id: number) => {
    setUsers(users.filter(u => u.id !== id))
  }

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>User Management</h1>

      <form onSubmit={handleSubmit} className='mb-4 space-y-4'>
        <div>
          <label className='block font-medium'>Name</label>
          <input
            type='text'
            name='name'
            value={form.name || ''}
            onChange={handleInputChange}
            className='border rounded w-full p-2'
            required
          />
        </div>
        <div>
          <label className='block font-medium'>Email</label>
          <input
            type='email'
            name='email'
            value={form.email || ''}
            onChange={handleInputChange}
            className='border rounded w-full p-2'
            required
          />
        </div>
        <div>
          <label className='block font-medium'>Role</label>
          <input
            type='text'
            name='role'
            value={form.role || ''}
            onChange={handleInputChange}
            className='border rounded w-full p-2'
            required
          />
        </div>
        <div>
          <label className='block font-medium'>Status</label>
          <select
            name='status'
            value={form.status || 'Active'}
            onChange={handleInputChange}
            className='border rounded w-full p-2'
          >
            <option value='Active'>Active</option>
            <option value='Inactive'>Inactive</option>
          </select>
        </div>
        <button
          type='submit'
          className='bg-blue-500 text-white py-2 px-4 rounded'
        >
          {form.id ? 'Update User' : 'Add User'}
        </button>
      </form>

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
                  onClick={() => handleEdit(user)}
                  className='text-blue-500 mr-2'
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className='text-red-500'
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users
