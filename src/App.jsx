import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import copilotLogo from '../logo_images/copilot_image_1768780313266.jpeg'

function App() {
  // Set page background to white
  document.body.style.background = '#fff';

  return (
    <>
      {/* Navigation Bar */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        background: 'linear-gradient(135deg, #a8e6f5 0%, #7dd4ed 100%)',
        borderBottom: 'none',
        boxShadow: '0 4px 16px rgba(168,230,245,0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={copilotLogo} alt="Clinic Logo" style={{ height: '48px', width: '48px', borderRadius: '8px', marginRight: '1rem', border: '2px solid #fff' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>First Connect Speech Therapy</span>
        </div>
        <nav>
          <a href="#welcome" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Home</a>
          <a href="#services" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Services</a>
          <a href="#insurance" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Insurance</a>
          <a href="#testimonials" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Testimonials</a>
          <a href="#contact" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Contact</a>
        </nav>
      </header>

      {/* Welcome/Hero Section */}
      <section id="welcome" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1rem',
        background: '#fff',
        borderRadius: '16px',
        margin: '2rem auto',
        maxWidth: '700px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
      }}>
        <h1 style={{ fontSize: '2.5rem', color: '#5eb8d4', marginBottom: '1rem', textAlign: 'center', fontWeight: '700' }}>
          Welcome to First Connect Speech Therapy
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#2a3a4b', marginBottom: '2rem', textAlign: 'center', maxWidth: '600px', lineHeight: '1.6' }}>
          We offer personalized pediatric speech therapy for the Hampton Roads community. Our experienced team is dedicated to empowering communication and supporting every child's unique needs.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <a href="tel:7575673649" style={{
            background: '#f5a8d4',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(245,168,212,0.25)',
            transition: 'transform 0.2s'
          }}>Call Now</a>
          <a href="#contact" style={{
            background: '#7dd4ed',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(125,212,237,0.25)',
            transition: 'transform 0.2s'
          }}>Have Questions?</a>
        </div>
        <img src={copilotLogo} alt="Clinic Logo" style={{ maxWidth: '220px', width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} />
      </section>

      {/* Services Section */}
      <section id="services" style={{
        background: 'linear-gradient(135deg, #fffbf0 0%, #fff8e6 100%)',
        borderRadius: '16px',
        margin: '2rem auto',
        maxWidth: '700px',
        padding: '2.5rem 1.5rem',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', color: '#5eb8d4', marginBottom: '1rem', textAlign: 'center', fontWeight: '700' }}>
          We Specialize In…
        </h2>
        <ul style={{
          columns: 2,
          columnGap: '2rem',
          fontSize: '1.1rem',
          color: '#264653',
          marginBottom: '1.5rem',
          listStyle: 'disc inside',
          maxWidth: '500px',
          padding: 0
        }}>
          <li>Articulation</li>
          <li>Apraxia</li>
          <li>Receptive &amp; Expressive Language</li>
          <li>Dyslexia</li>
          <li>Feeding</li>
          <li>Autism</li>
          <li>Stuttering</li>
          <li>Augmentative Communication</li>
          <li>Social Skills</li>
          <li>Gestalt Language Processing</li>
          <li>Literacy</li>
        </ul>
        <p style={{ fontSize: '1rem', color: '#3a4a5b', textAlign: 'center', maxWidth: '500px' }}>
          We offer personalized treatment plans tailored to your child's specific needs.
        </p>
      </section>

      {/* Insurance Section */}
      <section id="insurance" style={{
        background: '#fff',
        borderRadius: '16px',
        margin: '2rem auto',
        maxWidth: '700px',
        padding: '2.5rem 1.5rem',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', color: '#5eb8d4', marginBottom: '1rem', textAlign: 'center', fontWeight: '700' }}>
          Insurances We Accept
        </h2>
        <ul style={{
          columns: 2,
          columnGap: '2rem',
          fontSize: '1.1rem',
          color: '#264653',
          marginBottom: '1.5rem',
          listStyle: 'disc inside',
          maxWidth: '500px',
          padding: 0
        }}>
          <li>Tricare</li>
          <li>Anthem</li>
          <li>Anthem HealthKeepers</li>
          <li>Sentara Health</li>
          <li>Sentara Medicaid</li>
          <li>Optima</li>
          <li>Aetna</li>
          <li>Aetna Medicaid</li>
          <li>Cigna</li>
          <li>Optum</li>
          <li>United Healthcare</li>
          <li>United Community Care</li>
        </ul>
        <a href="#contact" style={{
          background: '#ffe680',
          color: '#5a5a5a',
          padding: '0.75rem 1.5rem',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: 'bold',
          boxShadow: '0 4px 12px rgba(255,230,128,0.25)',
          marginTop: '1rem',
          transition: 'transform 0.2s'
        }}>Contact Us</a>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{
        background: 'linear-gradient(135deg, #f0fbff 0%, #e6f7fc 100%)',
        borderRadius: '16px',
        margin: '2rem auto',
        maxWidth: '700px',
        padding: '2.5rem 1.5rem',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', color: '#5eb8d4', marginBottom: '2rem', textAlign: 'center', fontWeight: '700' }}>
          What's the Word?
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '600px' }}>
          <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <p style={{ fontSize: '1rem', color: '#3a4a5b', fontStyle: 'italic', marginBottom: '0.5rem' }}>
              "First Connect Speech Therapy is uniquely welcoming and affirming of all kids with communication needs. The team is professional, caring, and dedicated to helping each child reach their full potential."
            </p>
            <p style={{ fontSize: '0.9rem', color: '#2a3a4b', fontWeight: 'bold', textAlign: 'right' }}>~ Parent</p>
          </div>
          <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <p style={{ fontSize: '1rem', color: '#3a4a5b', fontStyle: 'italic', marginBottom: '0.5rem' }}>
              "My family and I have had an outstanding experience with First Connect. The therapists are knowledgeable, patient, and truly care about the progress of each child."
            </p>
            <p style={{ fontSize: '0.9rem', color: '#2a3a4b', fontWeight: 'bold', textAlign: 'right' }}>~ Parent</p>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="contact" style={{
        background: '#fff',
        borderRadius: '16px',
        margin: '2rem auto',
        maxWidth: '700px',
        padding: '2.5rem 1.5rem',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', color: '#5eb8d4', marginBottom: '2rem', textAlign: 'center', fontWeight: '700' }}>
          Get Started!
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '600px' }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#d498bd', marginBottom: '0.5rem', fontWeight: '600' }}>Schedule an Evaluation</h3>
            <p style={{ fontSize: '1rem', color: '#3a4a5b' }}>
              Reach out to us via phone or contact form. Call us at <a href="tel:7575673649" style={{ color: '#d498bd', fontWeight: 'bold', textDecoration: 'none' }}>(757) 567-3649</a>
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#7dd4ed', marginBottom: '0.5rem', fontWeight: '600' }}>Request a Referral</h3>
            <p style={{ fontSize: '1rem', color: '#3a4a5b' }}>
              If using insurance, you need a referral for speech therapy from your doctor. Please have your doctor fax to us at <a href="tel:8665982999" style={{ color: '#7dd4ed', fontWeight: 'bold', textDecoration: 'none' }}>(866) 598-2999</a>
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#e6c76f', marginBottom: '0.5rem', fontWeight: '600' }}>Intake Form</h3>
            <p style={{ fontSize: '1rem', color: '#3a4a5b' }}>
              After our consultation, we will provide you with an intake form with a series of questions and all required documentation. After that, time to get scheduled!
            </p>
          </div>
        </div>
        <a href="tel:7575673649" style={{
          background: '#f5a8d4',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: 'bold',
          boxShadow: '0 4px 12px rgba(245,168,212,0.25)',
          marginTop: '2rem',
          transition: 'transform 0.2s'
        }}>Schedule Now</a>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #a8e6f5 0%, #f5a8d4 100%)',
        color: '#fff',
        padding: '2rem',
        marginTop: '3rem',
        textAlign: 'center',
        boxShadow: '0 -4px 16px rgba(0,0,0,0.08)'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>First Connect Speech Therapy</h3>
          <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
            123 Main Street, Suite 100<br />
            Virginia Beach, VA 23451
          </p>
          <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>
            Phone: <a href="tel:7575673649" style={{ color: '#ffe680', textDecoration: 'none', fontWeight: '600' }}>(757) 567-3649</a><br />
            Fax: <a href="tel:8665982999" style={{ color: '#ffe680', textDecoration: 'none', fontWeight: '600' }}>(866) 598-2999</a>
          </p>
          <p style={{ fontSize: '0.9rem', marginTop: '1.5rem', opacity: 0.8 }}>
            Locally owned small business in Virginia Beach.<br />
            First Connect Speech Therapy - Copyright 2026.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
