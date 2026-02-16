import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { logout, getMe } from '../apis/auth.js';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getMe();
        setUser(data);
      } catch (err) {
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <div className="dashboard">
        <h2>Ini adalah halaman Dashboard</h2>
        {user && <p>Halo, {user.full_name}</p>}
      </div>
      
      <button onClick={handleLogout}>
        Logout
      </button>
    </>
  );
}
