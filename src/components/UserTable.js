import React, { useState, useEffect } from "react";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch users error:', err);
        setLoading(false);
      });
  };

  const addUser = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newEmail.trim()) {
      alert("Please enter name and email.");
      return;
    }
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName, email: newEmail })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        setUsers([...users, data.user]);
        setNewName("");
        setNewEmail("");
      } else {
        alert(data.message);
      }
    })
    .catch(err => {
      console.error('Add user error:', err);
      alert('Failed to add user.');
    });
  };

  const updateUser = (id) => {
    const user = users.find(u => u.id === id);
    if (!user) return;
    const newName = prompt("Enter new name:", user.name);
    const newEmail = prompt("Enter new email:", user.email);
    if (newName && newEmail) {
      fetch(`http://localhost:5000/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName, email: newEmail })
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setUsers(users.map(u => u.id === id ? data.user : u));
        } else {
          alert(data.message);
        }
      })
      .catch(err => {
        console.error('Update user error:', err);
        alert('Failed to update user.');
      });
    }
  };

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      fetch(`http://localhost:5000/users/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setUsers(users.filter(u => u.id !== id));
        } else {
          alert(data.message);
        }
      })
      .catch(err => {
        console.error('Delete user error:', err);
        alert('Failed to delete user.');
      });
    }
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div className="card p-3 shadow">
      <h4>User List</h4>

      <form onSubmit={addUser} className="mb-3">
        <div className="row">
          <div className="col">
            <input
              className="form-control"
              placeholder="Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              placeholder="Email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">Add User</button>
          </div>
        </div>
      </form>

      <input
        className="form-control mb-3"
        placeholder="Search user"
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => updateUser(u.id)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => deleteUser(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;