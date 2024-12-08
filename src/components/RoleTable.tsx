import React from 'react'

interface Role {
  id: number
  name: string
  permissions: string[]
}

interface RoleTableProps {
  roles: Role[]
  onEdit: (role: Role) => void
  onDelete: (id: number) => void
}

const RoleTable: React.FC<RoleTableProps> = ({roles, onEdit, onDelete}) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table-auto w-full border'>
        <thead>
          <tr>
            <th className='border px-4 py-2'>Role Name</th>
            <th className='border px-4 py-2'>Permissions</th>
            <th className='border px-4 py-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.id}>
              <td className='border px-4 py-2'>{role.name}</td>
              <td className='border px-4 py-2'>
                {role.permissions.length > 0
                  ? role.permissions.join(', ')
                  : 'No Permissions Assigned'}
              </td>
              <td className='border px-4 py-2'>
                <button
                  onClick={() => onEdit(role)}
                  className='text-blue-500 hover:underline mr-4'
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(role.id)}
                  className='text-red-500 hover:underline'
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

export default RoleTable
