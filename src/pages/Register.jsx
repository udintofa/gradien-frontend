import { useState } from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Password dan konfirmasi password tidak sama');
      return;
    }

    setError('');

    // nanti ganti ke API backend
    console.log({
      fullName,
      username,
      password,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>

        {error && <p style={{color: "red"}}>{error}</p>}

        <div>
          <label>Nama Lengkap</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Nama lengkap"
            required
          />
        </div>

        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>

        <div>
          <label>Konfirmasi Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>

        <button type="submit">
          Daftar
        </button>
        <p>
            Sudah punya akun?{' '}
            <Link to="/login">
                Login
            </Link>
            </p>
      </form>
    </div>
  );
};

export default Register;
