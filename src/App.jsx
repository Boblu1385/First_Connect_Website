import './App.css'
import logoImage from '../logo_images/Logo Concept-2026-02-01-White.png'

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #b4d4a8 0%, #9dc7e8 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        padding: '4rem 3rem',
        maxWidth: '600px',
        textAlign: 'center',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
      }}>
        <img 
          src={logoImage} 
          alt="First Connect Pediatric Therapy Logo" 
          style={{ 
            width: '50px', 
            height: 'auto',
            marginTop: '0.5rem'
          }} 
        />
        
        <h1 style={{
          fontSize: '2.5rem',
          color: '#2c3e50',
          marginBottom: '1rem',
          fontWeight: '700'
        }}>
          First Connect Pediatric Therapy
        </h1>
        
        <div style={{
          width: '80px',
          height: '4px',
          background: 'linear-gradient(90deg, #5a8a6f, #9dc7e8)',
          margin: '0 auto 2rem',
          borderRadius: '2px'
        }}></div>
        
        <h2 style={{
          fontSize: '1.8rem',
          color: '#5a8a6f',
          marginBottom: '1.5rem',
          fontWeight: '600'
        }}>
          Coming Soon
        </h2>
        
        <p style={{
          fontSize: '1.2rem',
          color: '#555',
          lineHeight: '1.8',
          marginBottom: '2rem'
        }}>
          We're building something special for the families and children we serve. 
          Our new website will launch soon with information about our speech therapy services.
        </p>
      </div>
    </div>
  )
}

export default App
