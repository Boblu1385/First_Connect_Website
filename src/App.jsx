import { useState } from 'react'
import './App.css'
import copilotLogo from '../logo_images/copilot_image_1768780313266.jpeg'

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '1rem',
        background: 'linear-gradient(135deg, #a8b99d 0%, #a8c5db 50%, #8faa7e 100%)',
        borderBottom: 'none',
        boxShadow: '0 4px 16px rgba(168,197,219,0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
          <img src={copilotLogo} alt="Clinic Logo" style={{ height: '40px', width: '40px', borderRadius: '8px', marginRight: '0.75rem', border: '2px solid #fff' }} />
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' }}>First Connect Pediatric Speech Therapy</span>
        </div>
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
          <a href="#welcome" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Home</a>
          <a href="#services" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Services</a>
          <a href="#insurance" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Insurance</a>
          <a href="#testimonials" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Testimonials</a>
          <a href="#contact" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Contact</a>
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
        <h1 style={{ fontSize: '2.5rem', color: '#6b7c5d', marginBottom: '1rem', textAlign: 'center', fontWeight: '700' }}>
          Welcome to First Connect Pediatric Speech Therapy
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#2a3a4b', marginBottom: '2rem', textAlign: 'center', maxWidth: '600px', lineHeight: '1.6' }}>
          We’re so glad you’re here. At First Connect Pediatric Therapy, PLLC, we provide high‑quality, personalized speech and language therapy for children ages two and up in Newport News, VA. We specialize in supporting neurodiverse children with speech, language, feeding, and social communication needs.
        </p>
        <p style={{ fontSize: '1.2rem', color: '#2a3a4b', marginBottom: '2rem', textAlign: 'center', maxWidth: '600px', lineHeight: '1.6' }}>
          We also offer ADOS‑2 testing, the gold standard for autism evaluation, to ensure your child receives the most accurate and comprehensive support possible.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <a href="tel:7575673649" style={{
            background: '#e8a87c',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(232,168,124,0.3)',
            transition: 'transform 0.2s'
          }}>Call Now</a>
          <a href="#contact" style={{
            background: '#a8c5db',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(168,197,219,0.3)',
            transition: 'transform 0.2s'
          }}>Have Questions?</a>
        </div>
        <img src={copilotLogo} alt="Clinic Logo" style={{ maxWidth: '220px', width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} />
      </section>

      {/* Our Mission Section */}
      <section id="mission" style={{
        background: 'linear-gradient(135deg, #e8f2f7 0%, #d6ebf5 100%)',
        borderRadius: '16px',
        margin: '2rem auto',
        maxWidth: '700px',
        padding: '2.5rem 1.5rem',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', color: '#7ba3c0', marginBottom: '1.5rem', textAlign: 'center', fontWeight: '700' }}>
          Our Mission
        </h2>
        <div style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <p style={{ fontSize: '1.05rem', color: '#2a3a4b', lineHeight: '1.6', textAlign: 'center', fontStyle: 'italic', margin: 0 }}>
            We believe that a strong connection with your child is the foundation for meaningful language learning and growth. 
          </p>
          <p style={{ fontSize: '1.05rem', color: '#2a3a4b', lineHeight: '1.6', textAlign: 'center', fontStyle: 'italic', margin: 0 }}>
            We provide neurodiversity affirming care that honors each child’s unique ways of communicating, learning, and engaging with the world. 
          </p>
          <p style={{ fontSize: '1.05rem', color: '#2a3a4b', lineHeight: '1.6', textAlign: 'center', fontStyle: 'italic', margin: 0 }}>
            Our therapy is rooted in child led, play based experiences that use a child’s intrinsic motivation and strengths to support communication development.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#2a3a4b', lineHeight: '1.6', textAlign: 'center', fontStyle: 'italic', margin: 0 }}>
            We create joyful, fun and engaging opportunities for growth through a sensory based approach that fosters authentic communication and connection.  
          </p>
          <p style={{ fontSize: '1.05rem', color: '#2a3a4b', lineHeight: '1.6', textAlign: 'center', fontStyle: 'italic', margin: 0 }}>
            We partner closely with families and use a parent coaching model to help caregivers support language development at home and in the community.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#2a3a4b', lineHeight: '1.6', textAlign: 'center', fontStyle: 'italic', margin: 0 }}>
            When parents feel confident and empowered, true growth and progress follow.
          </p>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" style={{
        background: '#fff',
        borderRadius: '16px',
        margin: '2rem auto',
        maxWidth: '900px',
        padding: '2.5rem 1.5rem',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
      }}>
        <h2 style={{ fontSize: '2rem', color: '#6b7c5d', marginBottom: '2rem', textAlign: 'center', fontWeight: '700' }}>
          Meet Our Team
        </h2>
        
        {/* Therapist 1: Cherie Rose */}
        <div style={{
          background: 'linear-gradient(135deg, #f9f9f9 0%, #f0f4f1 100%)',
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '2rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          <h3 style={{ fontSize: '1.5rem', color: '#7ba3c0', marginBottom: '1rem', fontWeight: '700' }}>
            Cherie Rose, M.S., CCC-SLP
          </h3>
          <p style={{ fontSize: '1rem', color: '#2a3a4b', lineHeight: '1.7', marginBottom: '1rem' }}>
            With over seven years of experience as a speech-language pathologist, Cherie Rose brings a unique blend of professional passion to her practice. Her journey began in 2006 when she noticed her youngest son was not meeting the same verbal milestones as her eldest. After being referred to a speech therapist by her pediatrician, Cherie found her calling.
          </p>
          <p style={{ fontSize: '1rem', color: '#2a3a4b', lineHeight: '1.7', marginBottom: '1rem' }}>
            Having navigated the process first as a mother, Cherie possesses a profound understanding of the frustration, hopelessness, and confusion families often feel. This lived experience allows her to offer deep empathy alongside proven clinical strategies.
          </p>
          <p style={{ fontSize: '1rem', color: '#2a3a4b', lineHeight: '1.7', marginBottom: '1rem' }}>
            Cherie earned her Bachelor's degree in Speech-Language Pathology with a minor in Special Education from Old Dominion University in 2015, followed by a Master's degree in Communicative Sciences and Disorders from Hampton University in 2018. Her clinical training includes:
          </p>
          <ul style={{ 
            fontSize: '1rem', 
            color: '#2a3a4b', 
            lineHeight: '1.7',
            marginLeft: '1.5rem',
            marginBottom: '0'
          }}>
            <li>Early Childhood Language Development</li>
            <li>Expressive and Receptive Language Delays</li>
            <li>Articulation and Phonology</li>
            <li>ADOS-2 Testing (Autism Diagnostic Observation Schedule)</li>
          </ul>
        </div>

        {/* Therapist 2: Lindsey Lewandowski */}
        <div style={{
          background: 'linear-gradient(135deg, #f9f9f9 0%, #f0f4f1 100%)',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}>
          <h3 style={{ fontSize: '1.5rem', color: '#7ba3c0', marginBottom: '1rem', fontWeight: '700' }}>
            Lindsey Lewandowski, M.S., CCC-SLP
          </h3>
          <p style={{ fontSize: '1rem', color: '#2a3a4b', lineHeight: '1.7', marginBottom: '1rem' }}>
            Lindsey Lewandowski is a board certified speech language pathologist through the American Speech Language Hearing Association (ASHA). She earned her Master of Science in Education from Old Dominion University in 2012 and has more than 14 years of clinical experience across public schools, early intervention, and outpatient settings. Her background includes extensive work with children presenting with a wide range of communication needs.
          </p>
          <p style={{ fontSize: '1rem', color: '#2a3a4b', lineHeight: '1.7', marginBottom: '1rem' }}>
            Lindsey is dedicated to a child led, play based, and strengths focused approach that supports authentic communication and meaningful growth. She is committed to ongoing professional development and continually seeks out advanced training to stay current with evidence based practices in the field.
          </p>
          <p style={{ fontSize: '1rem', color: '#2a3a4b', lineHeight: '1.7', marginBottom: '1rem' }}>
            Outside of work, Lindsey enjoys spending time with her three children, staying active outdoors, and connecting with family and friends. She understands the realities of parenthood and values partnering closely with families to support their child's communication journey.
          </p>
          <p style={{ fontSize: '1rem', color: '#2a3a4b', lineHeight: '1.7', marginBottom: '0.5rem', fontWeight: '600' }}>
            Advanced Trainings:
          </p>
          <ul style={{ 
            fontSize: '1rem', 
            color: '#2a3a4b', 
            lineHeight: '1.7',
            marginLeft: '1.5rem',
            marginBottom: '0'
          }}>
            <li>Meaningful Speech Certification – Echolalia / Gestalt Language / NLA</li>
            <li>Inside Out Sensory Certificate (Level 1; working toward Level 2)</li>
            <li>SOS (Sequential Oral Sensory) Approach to Feeding</li>
            <li>DIR/Floortime coursework</li>
            <li>PROMPT Trained (Level 1; continuing training)</li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{
        background: 'linear-gradient(135deg, #e8f0e3 0%, #d4e0c9 100%)',
        borderRadius: '16px',
        margin: '2rem auto',
        maxWidth: '700px',
        padding: '2.5rem 1.5rem',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', color: '#6b7c5d', marginBottom: '1rem', textAlign: 'center', fontWeight: '700' }}>
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
        <h2 style={{ fontSize: '2rem', color: '#6b7c5d', marginBottom: '1rem', textAlign: 'center', fontWeight: '700' }}>
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
          background: '#a8c5db',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: 'bold',
          boxShadow: '0 4px 12px rgba(168,197,219,0.3)',
          marginTop: '1rem',
          transition: 'transform 0.2s'
        }}>Contact Us</a>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{
        background: 'linear-gradient(135deg, #e8f2f7 0%, #d6ebf5 100%)',
        borderRadius: '16px',
        margin: '2rem auto',
        maxWidth: '700px',
        padding: '2.5rem 1.5rem',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', color: '#7ba3c0', marginBottom: '2rem', textAlign: 'center', fontWeight: '700' }}>
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
        <h2 style={{ fontSize: '2rem', color: '#6b7c5d', marginBottom: '2rem', textAlign: 'center', fontWeight: '700' }}>
          Get Started!
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '600px' }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#e8a87c', marginBottom: '0.5rem', fontWeight: '600' }}>Schedule an Evaluation</h3>
            <p style={{ fontSize: '1rem', color: '#3a4a5b' }}>
              Reach out to us via phone or contact form. Call us at <a href="tel:7575673649" style={{ color: '#e8a87c', fontWeight: 'bold', textDecoration: 'none' }}>(757) 567-3649</a>
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#7ba3c0', marginBottom: '0.5rem', fontWeight: '600' }}>Request a Referral</h3>
            <p style={{ fontSize: '1rem', color: '#3a4a5b' }}>
              If using insurance, you need a referral for speech therapy from your doctor. Please have your doctor fax to us at <a href="tel:8665982999" style={{ color: '#7ba3c0', fontWeight: 'bold', textDecoration: 'none' }}>(866) 598-2999</a>
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#d4b87f', marginBottom: '0.5rem', fontWeight: '600' }}>Intake Form</h3>
            <p style={{ fontSize: '1rem', color: '#3a4a5b' }}>
              After our consultation, we will provide you with an intake form with a series of questions and all required documentation. After that, time to get scheduled!
            </p>
          </div>
        </div>
        <a href="tel:7575673649" style={{
          background: '#e8a87c',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: 'bold',
          boxShadow: '0 4px 12px rgba(232,168,124,0.3)',
          marginTop: '2rem',
          transition: 'transform 0.2s'
        }}>Schedule Now</a>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #8faa7e 0%, #a8c5db 50%, #c9997f 100%)',
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
            Phone: <a href="tel:7575673649" style={{ color: '#f4e4a6', textDecoration: 'none', fontWeight: '600' }}>(757) 567-3649</a><br />
            Fax: <a href="tel:8665982999" style={{ color: '#f4e4a6', textDecoration: 'none', fontWeight: '600' }}>(866) 598-2999</a>
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
