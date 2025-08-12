import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/'); // Navigates to home page
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you’re looking for doesn’t exist.</p>
      <button 
        onClick={goHome}
        style={{
          padding: '10px 20px',
          marginTop: '20px',
          backgroundColor: '#212529',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Go Back to Home
      </button>
    </div>
  );
}

export default NotFound;
