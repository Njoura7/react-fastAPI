import { useEffect, useState } from 'react';
import { createUser, fetchUsers, deleteUser } from './api/users';
import type { UserCreate, UserOut } from './types/user';
import { Trash } from 'lucide-react';

function App() {
  const [users, setUsers] = useState<UserOut[]>([]);
  const [formData, setFormData] = useState<UserCreate>({ name: '', email: '' });

  const loadUsers = async () => {
    const data = await fetchUsers();
    setUsers(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createUser(formData);
    setFormData({ name: '', email: '' });
    loadUsers(); // refresh list
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Users</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <button type="submit">Create</button>
      </form>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
            <button
              onClick={async () => {
                await deleteUser(u.id);
                loadUsers()
              }}>
              Delete <Trash />
            </button>
          </li>
        ))}
      </ul>
    </div >
  );
}

export default App;
