import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../redux/manager/authSlice';
import { login_api } from '../../apis/common/authApi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login_api(email, password);
      const  token = data.token;
      const role = data.user.role;

      dispatch(loginSuccess({ token, role }));
      console.log('Login successful:', data);
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      if (role === 'manager') {
        navigate('/manager-home');
      } else if (role === 'employee') {
        navigate('/employee-home');
      } else if (role === 'doctor') {
        navigate('/doctor-home');
      } else {
        navigate('/');
      }

    } catch (error) {
      alert(error.message || 'Login failed');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#F9F7F7',
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#DBE2EF',
          padding: '2.5rem 2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 24px rgba(17,45,78,0.08)',
          minWidth: '320px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <h2 style={{
          color: '#112D4E',
          textAlign: 'center',
          marginBottom: '0.5rem',
          letterSpacing: '1px',
        }}>Login</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="email" style={{ color: '#3F72AF', fontWeight: 500 }}>Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{
              padding: '0.7rem',
              border: '1px solid #3F72AF',
              borderRadius: '6px',
              outline: 'none',
              fontSize: '1rem',
              background: '#F9F7F7',
              color: '#112D4E',
            }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="password" style={{ color: '#3F72AF', fontWeight: 500 }}>Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{
              padding: '0.7rem',
              border: '1px solid #3F72AF',
              borderRadius: '6px',
              outline: 'none',
              fontSize: '1rem',
              background: '#F9F7F7',
              color: '#112D4E',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            background: '#3F72AF',
            color: '#F9F7F7',
            border: 'none',
            borderRadius: '6px',
            padding: '0.8rem',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onMouseOver={e => (e.target.style.background = '#112D4E')}
          onMouseOut={e => (e.target.style.background = '#3F72AF')}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
