import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import API_BASE_URL from '../config';

export default function Login () {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
            });

            const data = await res.json();

            if (!res.ok) {
            throw new Error(data.message || 'Login gagal');
            }

            // === AMBIL TOKEN ===
            const { token } = data;

            // === SIMPAN TOKEN ===
            localStorage.setItem('token', token);

            // redirect setelah login
            navigate('/dashboard');
        } catch (err) {
            setError(err.message);
        }
    };
    console.log(API_BASE_URL)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <p style={{color: "red"}}>{error}</p>}
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

                <button type="submit">
                    Masuk
                </button>

                <p>
                  Belum punya akun?{' '}
                  <Link to="/register">
                    Register
                  </Link>
                </p>
            </form>
        </div>
    )
    };