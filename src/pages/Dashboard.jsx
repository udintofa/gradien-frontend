import { useNavigate } from 'react-router-dom';


export default function Dashboard() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
        };

    return (
        <>
            <div className="dashboard">
                <h2>Ini adalah halaman Dashboard </h2>
            </div>
            <button
                onClick={handleLogout}
                style={{
                    padding: '8px 16px',
                    cursor: 'pointer',
                    background: '#dc2626',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                }}
            >
                Logout
            </button>
        </>
    )
}