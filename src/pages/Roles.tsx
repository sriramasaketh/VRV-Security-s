import React, { useState } from 'react';

interface Role {
  id: number;
  name: string;
  permissions: string[];
}

const Roles = () => {
  const [roles, setRoles] = useState<Role[]>([
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'User', permissions: ['Read'] },
  ]);

  const [form, setForm] = useState<Partial<Role>>({ name: '', permissions: [] });
  const [permissionInput, setPermissionInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addPermission = () => {
    if (permissionInput.trim() && form.permissions) {
      setForm({ ...form, permissions: [...form.permissions, permissionInput.trim()] });
      setPermissionInput('');
    }
  };

  const removePermission = (permission: string) => {
    if (form.permissions) {
      setForm({ ...form, permissions: form.permissions.filter((p) => p !== permission) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.id) {
      setRoles(roles.map((r) => (r.id === form.id ? { ...form } as Role : r)));
    } else {
      setRoles([...roles, { id: Date.now(), ...form } as Role]);
    }
    setForm({ name: '', permissions: [] });
  };

  const handleEdit = (role: Role) => {
    setForm(role);
  };

  const handleDelete = (id: number) => {
    setRoles(roles.filter((r) => r.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Role Management</h1>

      <form onSubmit={handleSubmit} className="mb-4 space-y-4">
        <div>
          <label className="block font-medium">Role Name</label>
          <input
            type="text"
            name="name"
            value={form.name || ''}
            onChange={handleInputChange}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Permissions</label>
          <div className="flex items-center space-x-2 mb-2">
            <input
              type="text"
              value={permissionInput}
              onChange={(e) => setPermissionInput(e.target.value)}
              className="border rounded w-full p-2"
              placeholder="Add permission"
            />
            <button
              type="button"
              onClick={addPermission}
              className="bg-green-500 text-white py-2 px-4 rounded"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap space-x-2">
            {form.permissions?.map((permission) => (
              <span key={permission} className="bg-gray-200 px-3 py-1 rounded">
                {permission}{' '}
                <button
                  type="button"
                  onClick={() => removePermission(permission)}
                  className="text-red-500 ml-1"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          {form.id ? 'Update Role' : 'Add Role'}
        </button>
      </form>

      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Role Name</th>
            <th className="border px-4 py-2">Permissions</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td className="border px
