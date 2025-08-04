import React, { useState } from 'react';
import '../App.css';

const FrontPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    role: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert('User added successfully!');
      setForm({ name: '', email: '', age: '', role: '' });
    } else {
      const error = await res.json();
      alert('Error: ' + error.error);
    }
  } catch (err) {
    alert('Request failed: ' + err.message);
  }
};
  return (
  <div className='main'>
    <div className="form-page">
      <div className="form-box">
        <h2>Enter your Information</h2>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" value={form.age} onChange={handleChange} />
        <input type="text" name="role" placeholder="Role" value={form.role} onChange={handleChange} />
        <button onClick={handleSubmit}>AddUser</button>
      </div>
    </div>
    </div>
  );
};

export default FrontPage;
