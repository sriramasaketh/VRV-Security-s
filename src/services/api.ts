// Mock API calls for User and Role Management

export interface User {
  id: number
  name: string
  email: string
  role: string
  status: string // e.g., Active or Inactive
}

export interface Role {
  id: number
  name: string
  permissions: string[]
}

// Mock Data
let users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Editor',
    status: 'Inactive',
  },
]

let roles: Role[] = [
  {id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete']},
  {id: 2, name: 'Editor', permissions: ['Read', 'Write']},
  {id: 3, name: 'Viewer', permissions: ['Read']},
]

// Simulated API calls

// User API
export const fetchUsers = async (): Promise<User[]> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(users), 500)
  })
}

export const addUser = async (newUser: Omit<User, 'id'>): Promise<User> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const user = {id: Date.now(), ...newUser}
      users.push(user)
      resolve(user)
    }, 500)
  })
}

export const updateUser = async (
  id: number,
  updatedUser: Partial<User>,
): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = users.findIndex(user => user.id === id)
      if (index === -1) {
        reject(new Error('User not found'))
        return
      }
      users[index] = {...users[index], ...updatedUser}
      resolve(users[index])
    }, 500)
  })
}

export const deleteUser = async (id: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = users.findIndex(user => user.id === id)
      if (index === -1) {
        reject(new Error('User not found'))
        return
      }
      users.splice(index, 1)
      resolve()
    }, 500)
  })
}

// Role API
export const fetchRoles = async (): Promise<Role[]> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(roles), 500)
  })
}

export const addRole = async (newRole: Omit<Role, 'id'>): Promise<Role> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const role = {id: Date.now(), ...newRole}
      roles.push(role)
      resolve(role)
    }, 500)
  })
}

export const updateRole = async (
  id: number,
  updatedRole: Partial<Role>,
): Promise<Role> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = roles.findIndex(role => role.id === id)
      if (index === -1) {
        reject(new Error('Role not found'))
        return
      }
      roles[index] = {...roles[index], ...updatedRole}
      resolve(roles[index])
    }, 500)
  })
}

export const deleteRole = async (id: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = roles.findIndex(role => role.id === id)
      if (index === -1) {
        reject(new Error('Role not found'))
        return
      }
      roles.splice(index, 1)
      resolve()
    }, 500)
  })
}
