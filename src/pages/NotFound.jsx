import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="page-container">
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h1 style={{ fontSize: '6rem', color: 'var(--primary)', marginBottom: '20px' }}>404</h1>
        <h2 style={{ marginBottom: '20px' }}>Page Not Found</h2>
        <p style={{ marginBottom: '40px', color: 'var(--secondary)' }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-large">Go Home</Link>
      </div>
    </div>
  )
}

export default NotFound