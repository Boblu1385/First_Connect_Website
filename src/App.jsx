import { useState } from 'react'
import './App.css'
import logoImage from '../logo_images/Logo Concept-2026-02-01-White.png'

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '1rem 2rem',
        background: 'linear-gradient(135deg, #a8b99d 0%, #a8c5db 50%, #8faa7e 100%)',
        borderBottom: 'none',
        boxShadow: '0 4px 16px rgba(168,197,219,0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logoImage} alt="Clinic Logo" style={{ height: '105px', width: '105px', borderRadius: '50%', marginRight: '1rem', border: '3px solid #fff', background: '#8faa7e', padding: '8px' }} />
          <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#fff' }}>First Connect Pediatric Therapy</span>
        </div>
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <a href="#welcome" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Home</a>
          <a href="#mission" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Mission</a>
          <a href="#approach" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Approach</a>
          <a href="#team" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Team</a>
          <a href="#ados" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>ADOS-2</a>
          <a href="#services" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Services</a>
          <a href="#insurance" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Insurance</a>
          <a href="/resources" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Resources</a>
          <a href="#contact" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Contact</a>
        </nav>
      </header>

      {/* Hero Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #6b7c5d 0%, #7ba3c0 100%)',
        color: '#fff',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.2' }}>
          Pediatric Speech and Language Therapy in Newport News, VA
        </h1>
      </section>

      {/* Welcome Section */}
      <section id="welcome" style={{
        maxWidth: '1200px',
        margin: '3rem auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center'
      }}>
        <div>
          <h2 style={{ fontSize: '2.2rem', color: '#6b7c5d', marginBottom: '1.5rem', fontWeight: '700' }}>
            Welcome to First Connect Pediatric Speech Therapy
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#2a3a4b', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            At First Connect Pediatric Therapy, PLLC, we provide high quality, personalized speech and language therapy for children ages 18-month and older in Newport News, VA.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#2a3a4b', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            We specialize in supporting neurodiverse children with speech, language, feeding, and social communication needs.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#2a3a4b', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Additionally, we provide ADOS-2 testing, the gold standard for autism evaluation to ensure you child receives the most accurate support possible.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" style={{
              background: '#e8a87c',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              boxShadow: '0 4px 12px rgba(168,197,219,0.3)',
              transition: 'transform 0.2s'
            }}>Book a Free Consult</a>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="https://via.placeholder.com/400x400/8faa7e/ffffff?text=Welcome+Image" alt="Clinic" style={{ 
            width: '100%', 
            maxWidth: '400px', 
            height: 'auto', 
            borderRadius: '12px', 
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
          }} />
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="mission" style={{
        background: 'linear-gradient(135deg, #e8f2f7 0%, #d6ebf5 100%)',
        padding: '3rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="https://via.placeholder.com/400x400/8faa7e/ffffff?text=Mission+Image" alt="Our Mission" style={{ 
              width: '100%', 
              maxWidth: '400px', 
              height: 'auto', 
              borderRadius: '12px', 
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
            }} />
          </div>
          <div>
            <h2 style={{ fontSize: '2.2rem', color: '#7ba3c0', marginBottom: '1.5rem', fontWeight: '700' }}>
              Our Mission
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#2a3a4b', lineHeight: '1.7', marginBottom: '1rem' }}>
              We believe that a strong connection with your child is the foundation for meaningful language learning and growth.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#2a3a4b', lineHeight: '1.7', marginBottom: '1rem' }}>
              We provide neurodiversity affirming care that honors each child's unique ways of communicating, learning, and engaging with the world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" style={{
        maxWidth: '1200px',
        margin: '3rem auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center'
      }}>
        <div>
          <h2 style={{ fontSize: '2.2rem', color: '#6b7c5d', marginBottom: '1.5rem', fontWeight: '700' }}>
            Our Approach
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#2a3a4b', lineHeight: '1.8' }}>
            Our therapy is rooted in child led, play based experiences that use a child's intrinsic motivation and strengths to support communication development.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#2a3a4b', lineHeight: '1.8' }}>
            We create joyful, fun and engaging opportunities for growth through a sensory based approach that fosters authentic communication and connection.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#2a3a4b', lineHeight: '1.8' }}>
            We partner closely with families and use a parent coaching model to help caregivers support language development at home and in the community.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#2a3a4b', lineHeight: '1.8' }}>
            When parents feel confident and empowered, true growth and progress follow.
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="https://via.placeholder.com/400x400/8faa7e/ffffff?text=Approach+Image" alt="Our Approach" style={{ 
            width: '100%', 
            maxWidth: '400px', 
            height: 'auto', 
            borderRadius: '12px', 
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
          }} />
        </div>
      </section>

      {/* ADOS-2 Testing Section */}
      <section id="ados" style={{
        background: 'linear-gradient(135deg, #e8f2f7 0%, #d6ebf5 100%)',
        padding: '3rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{ fontSize: '2.2rem', color: '#7ba3c0', marginBottom: '3rem', textAlign: 'center', fontWeight: '700' }}>
            ADOS-2 Testing
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '2rem' }}>
            {/* What is ADOS-2 */}
            <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#6b7c5d', marginBottom: '1rem', fontWeight: '700' }}>
                What is ADOS-2?
              </h3>
              <p style={{ fontSize: '1.05rem', color: '#2a3a4b', lineHeight: '1.8' }}>
                The Autism Diagnostic Observation Schedule, Second Edition (ADOS-2) is a standardized diagnostic tool used to assess and diagnose autism spectrum disorder (ASD) across all ages, developmental levels, and language abilities. It consists of a series of structured and semi-structured activities that allow trained clinicians to observe social communication, interaction, play, and restricted and repetitive behaviors in a natural setting.
              </p>
            </div>

            {/* Why ADOS-2 is Important */}
            <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#6b7c5d', marginBottom: '1rem', fontWeight: '700' }}>
                Why ADOS-2 is Important
              </h3>
              <p style={{ fontSize: '1.05rem', color: '#2a3a4b', lineHeight: '1.8' }}>
                ADOS-2 is considered the gold standard for autism evaluation because it provides a standardized, objective framework for observing behaviors associated with autism. An accurate diagnosis helps families access appropriate services, therapies, and educational supports. Early identification through ADOS-2 testing enables children to receive timely interventions that can significantly improve developmental outcomes and quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{
        background: 'linear-gradient(135deg, #e8f0e3 0%, #d4e0c9 100%)',
        padding: '3rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{ fontSize: '2.2rem', color: '#6b7c5d', marginBottom: '1rem', textAlign: 'center', fontWeight: '700' }}>
            Our Specialties
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#2a3a4b', textAlign: 'center', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            We specialize in working with autistic children and gestalt language processors (kids who use echolalia). We offer personalized treatment plans tailored to your child's specific needs across a wide range of communication areas:
          </p>
          <ul style={{
            columns: 2,
            columnGap: '3rem',
            fontSize: '1.1rem',
            color: '#2a3a4b',
            marginBottom: '2rem',
            listStyle: 'disc inside',
            maxWidth: '800px',
            margin: '0 auto',
            padding: 0
          }}>
            <li>Articulation</li>
            <li>Apraxia</li>
            <li>Receptive & Expressive Language</li>
            <li>Dyslexia</li>
            <li>Feeding</li>
            <li>Autism</li>
            <li>Stuttering</li>
            <li>Augmentative Communication</li>
            <li>Social Skills</li>
            <li>Gestalt Language Processing</li>
            <li>Literacy</li>
          </ul>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" style={{
        maxWidth: '1200px',
        margin: '3rem auto',
        padding: '0 2rem'
      }}>
        <h2 style={{ fontSize: '2.2rem', color: '#6b7c5d', marginBottom: '2rem', textAlign: 'center', fontWeight: '700' }}>
          Meet Our Team
        </h2>
        
        {/* Therapist 1: Cherie Rose */}
        <div style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '2.5rem',
          marginBottom: '2rem',
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{ fontSize: '1.8rem', color: '#7ba3c0', marginBottom: '0.5rem', fontWeight: '700' }}>
            Cherie Rose, M.S., CCC-SLP
          </h3>
          <p style={{ fontSize: '1rem', color: '#6b7c5d', marginBottom: '1.5rem', fontStyle: 'italic' }}>
            Owner, Speech-Language Pathologist
          </p>
          <p style={{ fontSize: '1.05rem', color: '#2a3a4b', lineHeight: '1.8', marginBottom: '1rem' }}>
            With over seven years of experience as a speech-language pathologist, Cherie Rose brings a unique blend of professional passion to her practice. Her journey began in 2006 when she noticed her youngest son was not meeting the same verbal milestones as her eldest. After being referred to a speech therapist by her pediatrician, Cherie found her calling.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#2a3a4b', lineHeight: '1.8', marginBottom: '1rem' }}>
            Having navigated the process first as a mother, Cherie possesses a profound understanding of the frustration, hopelessness, and confusion families often feel. This lived experience allows her to offer deep empathy alongside proven clinical strategies.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#2a3a4b', lineHeight: '1.8', marginBottom: '1rem' }}>
            Cherie earned her Bachelor's degree in Speech-Language Pathology with a minor in Special Education from Old Dominion University in 2015, followed by a Master's degree in Communicative Sciences and Disorders from Hampton University in 2018. Her clinical training includes:
          </p>
          <ul style={{ 
            fontSize: '1.05rem', 
            color: '#2a3a4b', 
            lineHeight: '1.8',
            marginLeft: '2rem',
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
          background: '#fff',
          borderRadius: '12px',
          padding: '2.5rem',
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{ fontSize: '1.8rem', color: '#7ba3c0', marginBottom: '0.5rem', fontWeight: '700' }}>
            Lindsey Lewandowski, M.S., CCC-SLP
          </h3>
          <p style={{ fontSize: '1rem', color: '#6b7c5d', marginBottom: '1.5rem', fontStyle: 'italic' }}>
            Owner, Speech-Language Pathologist
          </p>
          <p style={{ fontSize: '1.05rem', color: '#2a3a4b', lineHeight: '1.8', marginBottom: '1rem' }}>
            Lindsey Lewandowski is a board certified speech language pathologist through the American Speech Language Hearing Association (ASHA). She earned her Master of Science in Education from Old Dominion University in 2012 and has more than 14 years of clinical experience across public schools, early intervention, and outpatient settings. Her background includes extensive work with children presenting with a wide range of communication needs.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#2a3a4b', lineHeight: '1.8', marginBottom: '1rem' }}>
            Lindsey is dedicated to a child led, play based, and strengths focused approach that supports authentic communication and meaningful growth. She is committed to ongoing professional development and continually seeks out advanced training to stay current with evidence based practices in the field.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#2a3a4b', lineHeight: '1.8', marginBottom: '1rem' }}>
            Outside of work, Lindsey enjoys spending time with her three children, staying active outdoors, and connecting with family and friends. She understands the realities of parenthood and values partnering closely with families to support their child's communication journey.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#2a3a4b', lineHeight: '1.8', marginBottom: '0.75rem', fontWeight: '600' }}>
            Advanced Trainings:
          </p>
          <ul style={{ 
            fontSize: '1.05rem', 
            color: '#2a3a4b', 
            lineHeight: '1.8',
            marginLeft: '2rem',
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

      {/* Testimonials Section */}
      <section id="testimonials" style={{
        background: 'linear-gradient(135deg, #e8f2f7 0%, #d6ebf5 100%)',
        padding: '3rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{ fontSize: '2.2rem', color: '#7ba3c0', marginBottom: '2rem', textAlign: 'center', fontWeight: '700' }}>
            What's the Word?
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <p style={{ fontSize: '1.1rem', color: '#3a4a5b', fontStyle: 'italic', lineHeight: '1.8', marginBottom: '1rem' }}>
                "First Connect Speech Therapy is uniquely welcoming and affirming of all kids with communication needs. The team is professional, caring, and dedicated to helping each child reach their full potential."
              </p>
              <p style={{ fontSize: '1rem', color: '#2a3a4b', fontWeight: 'bold', textAlign: 'right' }}>~ Parent</p>
            </div>
            <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
              <p style={{ fontSize: '1.1rem', color: '#3a4a5b', fontStyle: 'italic', lineHeight: '1.8', marginBottom: '1rem' }}>
                "My family and I have had an outstanding experience with First Connect. The therapists are knowledgeable, patient, and truly care about the progress of each child."
              </p>
              <p style={{ fontSize: '1rem', color: '#2a3a4b', fontWeight: 'bold', textAlign: 'right' }}>~ Parent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section id="insurance" style={{
        maxWidth: '1200px',
        margin: '3rem auto',
        padding: '0 2rem'
      }}>
        <h2 style={{ fontSize: '2.2rem', color: '#6b7c5d', marginBottom: '2rem', textAlign: 'center', fontWeight: '700' }}>
          Insurances We Accept
        </h2>
        <ul style={{
          columns: 2,
          columnGap: '3rem',
          fontSize: '1.1rem',
          color: '#2a3a4b',
          marginBottom: '2rem',
          listStyle: 'disc inside',
          maxWidth: '800px',
          margin: '0 auto 2rem',
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
        <div style={{ textAlign: 'center' }}>
          <a href="#contact" style={{
            background: '#a8c5db',
            color: '#fff',
            padding: '0.75rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(168,197,219,0.3)',
            transition: 'transform 0.2s',
            display: 'inline-block'
          }}>Contact Us</a>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="contact" style={{
        background: '#fff',
        padding: '3rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{ fontSize: '2.2rem', color: '#6b7c5d', marginBottom: '2rem', textAlign: 'center', fontWeight: '700' }}>
            Get Started!
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{ textAlign: 'center', padding: '2rem', background: 'linear-gradient(135deg, #fff5ee 0%, #ffe5d9 100%)', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#e8a87c', marginBottom: '1rem', fontWeight: '600' }}>Schedule an Evaluation</h3>
              <p style={{ fontSize: '1.05rem', color: '#3a4a5b', lineHeight: '1.7' }}>
                Reach out to us via phone or contact form. Call us at <a href="tel:7575673649" style={{ color: '#e8a87c', fontWeight: 'bold', textDecoration: 'none' }}>(757) 567-3649</a>
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem', background: 'linear-gradient(135deg, #e8f2f7 0%, #d6ebf5 100%)', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#7ba3c0', marginBottom: '1rem', fontWeight: '600' }}>Request a Referral</h3>
              <p style={{ fontSize: '1.05rem', color: '#3a4a5b', lineHeight: '1.7' }}>
                If using insurance, you need a referral for speech therapy from your doctor. Please have your doctor fax to us at <a href="tel:8665982999" style={{ color: '#7ba3c0', fontWeight: 'bold', textDecoration: 'none' }}>(866) 598-2999</a>
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem', background: 'linear-gradient(135deg, #faf7ed 0%, #f4ead6 100%)', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#d4b87f', marginBottom: '1rem', fontWeight: '600' }}>Intake Form</h3>
              <p style={{ fontSize: '1.05rem', color: '#3a4a5b', lineHeight: '1.7' }}>
                After our consultation, we will provide you with an intake form with a series of questions and all required documentation. After that, time to get scheduled!
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="tel:7575673649" style={{
              background: '#e8a87c',
              color: '#fff',
              padding: '1rem 2.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              boxShadow: '0 4px 12px rgba(232,168,124,0.3)',
              transition: 'transform 0.2s',
              display: 'inline-block'
            }}>Schedule Now</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #8faa7e 0%, #a8c5db 50%, #c9997f 100%)',
        color: '#fff',
        padding: '3rem 2rem',
        marginTop: '2rem',
        textAlign: 'center',
        boxShadow: '0 -4px 16px rgba(0,0,0,0.08)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>First Connect Speech Therapy</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            123 Main Street, Suite 100<br />
            Newport News, VA 23606
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            Phone: <a href="tel:7575673649" style={{ color: '#f4e4a6', textDecoration: 'none', fontWeight: '600' }}>(757) 567-3649</a>
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Fax: <a href="tel:8665982999" style={{ color: '#f4e4a6', textDecoration: 'none', fontWeight: '600' }}>(866) 598-2999</a>
          </p>
          <p style={{ fontSize: '0.95rem', marginTop: '2rem', opacity: 0.9 }}>
            Locally owned small business in Newport News, VA<br />
            © 2026 First Connect Speech Therapy. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
