import { useState } from 'react'
import './App.css'
import logoImage from '../logo_images/Logo Concept-2026-02-01-White.png'
import groupJoyImage from '../logo_images/GroupJoy.jpg'
import playtimeImage from '../logo_images/Playtime.jpg'

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem 3rem',
        background: 'linear-gradient(135deg, #b4d4a8 0%, #9dc7e8 100%)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
          <a href="#welcome" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Home</a>
          <a href="#mission" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Mission</a>
          <a href="#approach" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Approach</a>
          <a href="#team" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Team</a>
          <a href="#services" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Services</a>
          <a href="#insurance" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Insurance</a>
          <a href="/resources" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Resources</a>
          <a href="#contact" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Contact</a>
        </nav>
      </header>

      {/* Logo and Clinic Name */}
      <section style={{
        background: '#fff',
        padding: '3rem 2rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ 
          position: 'relative', 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img src={playtimeImage} alt="Playtime" style={{ 
            width: '100%',
            maxWidth: '800px',
            height: 'auto', 
            borderRadius: '16px', 
            boxShadow: '0 4px 15px rgba(90,138,111,0.15)'
          }} />
          <div style={{ 
            position: 'absolute',
            bottom: '0',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '1rem',
            background: 'transparent',
            padding: '2rem 3rem',
            borderRadius: '16px'
          }}>
            <img src={logoImage} alt="Clinic Logo" style={{ height: '120px', width: '120px', borderRadius: '50%', background: '#b4d4a8', padding: '8px' }} />
            <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#5a8a6f', margin: 0 }}>First Connect Pediatric Therapy</h2>
          </div>
        </div>
      </section>

      {/* Hero Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #b4d4a8 0%, #9dc7e8 100%)',
        color: '#fff',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.3', color: '#fff' }}>
          Neurodiversity-Affirming Speech Therapy in Newport News, VA
        </h1>
      </section>

      {/* Welcome Section */}
      <section id="welcome" style={{
        background: '#fff',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: '#5a8a6f', marginBottom: '1.5rem', fontWeight: '700' }}>
              Welcome to First Connect Pediatric Speech Therapy
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
              At First Connect Pediatric Therapy, PLLC, we provide high quality, personalized speech and language therapy for children ages 18-months and older in Newport News, VA. 
            </p>
            <p style={{ fontSize: '1.15rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
              We provide ADOS-2 testing, the gold standard for autism evaluation to ensure you child receives the most accurate support possible.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <a href="#contact" style={{
                background: '#ffb84d',
                color: '#fff',
                padding: '0.9rem 2rem',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: '700',
                boxShadow: '0 4px 15px rgba(255,184,77,0.3)',
                transition: 'transform 0.2s',
                fontSize: '1.05rem'
              }}>Book a Free Consult</a>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={groupJoyImage} alt="Clinic" style={{ 
              width: '100%', 
              maxWidth: '800px', 
              height: 'auto', 
              borderRadius: '16px', 
              boxShadow: '0 8px 30px rgba(90,138,111,0.15)'
            }} />
          </div>
        </div>
      </section>

      {/* Mission, Approach, and Specialties - Three Column Section */}
      <section id="mission" style={{
        background: '#f9fcff',
        padding: '5rem 2rem'
      }}>
        <div id="approach" style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}>
            {/* Our Mission */}
            <div style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: '0 6px 25px rgba(90,138,111,0.1)',
              border: '2px solid #d6ebf5'
            }}>
              <h2 style={{ fontSize: '2rem', color: '#5a8a6f', marginBottom: '1.5rem', fontWeight: '700', textAlign: 'center' }}>
                Our Mission
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.8', marginBottom: '1rem' }}>
                Creating connection through play is our number one priority.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.8', marginBottom: '1rem' }}>
                We believe children learn best through play and thrive through connection.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.8' }}>
                We understand that when a child feels safe and comfortable, true connection happens and language growth naturally emerges.
              </p>
            </div>

            {/* Our Approach */}
            <div style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: '0 6px 25px rgba(90,138,111,0.1)',
              border: '2px solid #d9ecd1'
            }}>
              <h2 style={{ fontSize: '2rem', color: '#5a8a6f', marginBottom: '1.5rem', fontWeight: '700', textAlign: 'center' }}>
                Our Approach
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.8', marginBottom: '1rem' }}>
                Our therapy is rooted in child-led, play-based experiences that use a child's intrinsic motivation and strengths to support communication development.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.8', marginBottom: '1rem' }}>
                We create joyful, fun and engaging opportunities for growth through a sensory based approach that fosters authentic communication and connection.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.8' }}>
                We partner closely with families and use a parent coaching model to help caregivers support language development at home and in the community.
              </p>
            </div>

            {/* Specialties */}
            <div id="services" style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: '0 6px 25px rgba(90,138,111,0.1)',
              border: '2px solid #ffe9c7'
            }}>
              <h2 style={{ fontSize: '2rem', color: '#5a8a6f', marginBottom: '1.5rem', fontWeight: '700', textAlign: 'center' }}>
                Specialties
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#4a4a4a', lineHeight: '1.6', marginBottom: '1rem', textAlign: 'center' }}>
                We have advanced training and specialize in:
              </p>
              <ul style={{
                listStyle: 'disc',
                fontSize: '1rem',
                color: '#4a4a4a',
                lineHeight: '1.7',
                marginLeft: '1.5rem'
              }}>
                <li>Neurodiversity-affirming therapy</li>
                <li>ADOS-2 testing</li>
                <li>Gestalt language processing</li>
                <li>AAC</li>
                <li>Childhood apraxia of speech</li>
                <li>Speech sound disorders</li>
                <li>Language delays</li>
                <li>Oral motor/myofunctional deficits</li>
                <li>Feeding delays</li>
                <li>Picky eating</li>
                <li>Fluency</li>
                <li>Literacy</li>
              </ul>
            </div>
          </div>

          {/* Centered Book a Free Consult Button */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#contact" style={{
              background: '#ffb84d',
              color: '#fff',
              padding: '1rem 2.5rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: '700',
              boxShadow: '0 4px 15px rgba(255,184,77,0.3)',
              transition: 'transform 0.2s',
              fontSize: '1.1rem'
            }}>Book a Free Consult</a>
            <a href="/services" style={{
              background: '#fff',
              color: '#5a8a6f',
              padding: '1rem 2.5rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: '700',
              border: '2px solid #5a8a6f',
              transition: 'transform 0.2s',
              fontSize: '1.1rem'
            }}>Learn more about our services →</a>
          </div>
        </div>
      </section>

      {/* Why Choose First Connect Section */}
      <section style={{
        background: '#f9fcff',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2.5rem', color: '#5a8a6f', marginBottom: '2rem', fontWeight: '700' }}>
            Why Choose First Connect?
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
            We take a holistic approach to therapy which means we not only assess/treat your child's speech and language skills, but look at other aspects of development that may be impacting their quality of life. This may include your child's sleep, nutrition, activity level, and socialization.
          </p>
          <p style={{ fontSize: '1.15rem', color: '#4a4a4a', lineHeight: '1.9' }}>
            We treat every child as a unique individual and tailor therapy to their personal needs and challenges.
          </p>
        </div>
      </section>

      {/* ADOS-2 Section */}
      <section style={{
        background: '#fff',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            {/* What is ADOS-2 */}
            <div style={{ background: '#f9fcff', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 6px 25px rgba(157,199,232,0.15)', border: '2px solid #d6ebf5' }}>
              <h3 style={{ fontSize: '1.9rem', color: '#5a8a6f', marginBottom: '1.2rem', fontWeight: '700' }}>
                What is ADOS-2?
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9' }}>
                The Autism Diagnostic Observation Schedule, Second Edition (ADOS-2) is a standardized diagnostic tool used to assess and diagnose autism spectrum disorder (ASD) across all ages, developmental levels, and language abilities. This standardized assessment evaluates key area including communication, social interaction, sensory processing, and repetitive behavior.
              </p>
            </div>

            {/* Why ADOS-2 is Important */}
            <div style={{ background: '#f7fcf5', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 6px 25px rgba(180,212,168,0.15)', border: '2px solid #d9ecd1' }}>
              <h3 style={{ fontSize: '1.9rem', color: '#5a8a6f', marginBottom: '1.2rem', fontWeight: '700' }}>
                Why ADOS-2 is Important
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9' }}>
                ADOS-2 is considered the gold standard for autism evaluation because it provides a standardized, objective framework for observing behaviors associated with autism. A formal diagnosis empowers individuals to understand themselves better and ensures families can access the essential support, therapies, and resources they need. Our team is specially trained in ADOS-2 administration and we are proud to offer this expert testing at our clinic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" style={{
        background: '#f9fcff',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '2.5rem', color: '#5a8a6f', marginBottom: '3rem', textAlign: 'center', fontWeight: '700' }}>
            Meet Our Team
          </h2>
          
          {/* Therapist 1: Cherie Rose */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '3rem',
            marginBottom: '2.5rem',
            boxShadow: '0 6px 25px rgba(90,138,111,0.1)'
          }}>
            <h3 style={{ fontSize: '2rem', color: '#5a8a6f', marginBottom: '0.5rem', fontWeight: '700' }}>
              Cherie Rose, M.S., CCC-SLP
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#7a9d8a', marginBottom: '1.8rem', fontStyle: 'italic', fontWeight: '600' }}>
              Owner, Speech-Language Pathologist
            </p>
            <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
              With over seven years of experience as a speech-language pathologist, Cherie Rose brings a unique blend of professional passion to her practice. Her journey began in 2006 when she noticed her youngest son was not meeting the same verbal milestones as her eldest. After being referred to a speech therapist by her pediatrician, Cherie found her calling.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
              Having navigated the process first as a mother, Cherie possesses a profound understanding of the frustration, hopelessness, and confusion families often feel. This lived experience allows her to offer deep empathy alongside proven clinical strategies.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '0' }}>
              Cherie earned her Bachelor's degree in Speech-Language Pathology with a minor in Special Education from Old Dominion University in 2015, followed by a Master's degree in Communicative Sciences and Disorders from Hampton University in 2018.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '0' }}>
              Cherie enjoys hiking a new trail, strolling along the beach or taking long walks with her dogs. Most of all, Cherie cherishes spending time with her family, exploring the stunning Virginia mountains with her husband and boys.
            </p>
          </div>

          {/* Therapist 2: Lindsey Lewandowski */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '3rem',
            boxShadow: '0 6px 25px rgba(90,138,111,0.1)'
          }}>
            <h3 style={{ fontSize: '2rem', color: '#5a8a6f', marginBottom: '0.5rem', fontWeight: '700' }}>
              Lindsey Lewandowski, M.S., CCC-SLP
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#7a9d8a', marginBottom: '1.8rem', fontStyle: 'italic', fontWeight: '600' }}>
              Speech-Language Pathologist
            </p>
            <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
              Lindsey Lewandowski, CCC-SLP, is a board certified speech language pathologist through the American Speech Language Hearing Association (ASHA) and holds a Virgina state license. She earned her undergraduate degree in sociology from the University of Virginia in 2006 where she played Division 1 field hockey.  In 2008, her dad suffered a major stroke and needed intensive speech therapy. Through this experience, she learned of speech therapy and went on to study speech pathology at Old Dominion University where she earned her Master of Science in Education in 2012.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
              With 14 years of clinical experience, Lindsey has worked in a variety of settings including public schools, early intervention, and outpatient settings. Her background includes extensive work with children presenting with a wide range of communication needs.             </p>
            <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
              Lindsey is dedicated to a child led, play based, and strengths focused approach that supports authentic communication and meaningful growth. She is committed to ongoing professional development and continually seeks out advanced training to stay current with evidence based practices in the field.            </p>
            <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
              Drawing on her experience as a collegiate field hockey athlete at the University of Virginia, she brings a strong work ethic and energetic drive to every endeavor. 
            </p>
            <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
              As a mother of three, she understands the realities of parenthood and values partnering closely with families to support their child’s communication journey.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '0' }}>
              Outside of work, Lindsey enjoys spending time with her family and friends. She loves fitness and anything outdoors including swimming, biking, hiking, snowboarding, and enjoying the beach.
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Trainings Section */}
      <section id="trainings" style={{
        background: '#fff',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '2.5rem', color: '#5a8a6f', marginBottom: '3rem', textAlign: 'center', fontWeight: '700' }}>
            Advanced Trainings & Specializations
          </h2>
          
          <div style={{
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <ul style={{ 
              fontSize: '1.1rem', 
              color: '#4a4a4a', 
              lineHeight: '1.9',
              marginLeft: '2rem',
              marginBottom: '0'
            }}>
              <li>ADOS-2 Testing (Autism Diagnostic Observation Schedule)</li>
              <li>Early Childhood Language Development</li>
              <li>Expressive and Receptive Language Delays</li>
              <li>Articulation and Phonology</li>
              <li>NLA (Natural Language Acquisition) trained clinical through the Meaningful Speech Course on Echolalia and Gestalt Language Processing</li>
              <li>Meaningful Speech Certification-Gestalt Language Processing & AAC</li>
              <li>Meaningful Speech Language Sampling Course</li>
              <li>Sensory trained clinician through the Inside Out Sensory Certificate (Level 1 trained; Working towards completing level 2)</li>
              <li>PROMPT (Prompts for Restructuring Oral Muscular Phonetic Targets) certification for treating Childhood Apraxia of Speech (CAS); Level 1: Introduction and Level 2: Bridging</li>
              <li>Diagnosis and Management of Childhood Apraxia of Speech: Dynamic Temporal and Tactile Cueing by Edythe Strand</li>
              <li>Oral Placement Therapy techniques through Talk Tools</li>
              <li>SOS (Sequential Oral Sensory) Approach to Feeding Certification Program</li>
              <li>Get Permission Approach to Supporting Anxious Eaters and Anxious Mealtimes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{
        background: '#f9fcff',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '2.5rem', color: '#5a8a6f', marginBottom: '3rem', textAlign: 'center', fontWeight: '700' }}>
            What Families Are Saying
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ background: '#f9fcff', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 6px 25px rgba(157,199,232,0.15)', borderLeft: '4px solid #9dc7e8' }}>
              <p style={{ fontSize: '1.15rem', color: '#4a4a4a', fontStyle: 'italic', lineHeight: '1.9', marginBottom: '1.2rem' }}>
                "First Connect Speech Therapy is uniquely welcoming and affirming of all kids with communication needs. The team is professional, caring, and dedicated to helping each child reach their full potential."
              </p>
              <p style={{ fontSize: '1rem', color: '#7a9d8a', fontWeight: '600', textAlign: 'right' }}>~ Parent</p>
            </div>
            <div style={{ background: '#f9fcff', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 6px 25px rgba(157,199,232,0.15)', borderLeft: '4px solid #9dc7e8' }}>
              <p style={{ fontSize: '1.15rem', color: '#4a4a4a', fontStyle: 'italic', lineHeight: '1.9', marginBottom: '1.2rem' }}>
                "My family and I have had an outstanding experience with First Connect. The therapists are knowledgeable, patient, and truly care about the progress of each child."
              </p>
              <p style={{ fontSize: '1rem', color: '#7a9d8a', fontWeight: '600', textAlign: 'right' }}>~ Parent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section id="insurance" style={{
        background: '#f9fcff',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '2.5rem', color: '#5a8a6f', marginBottom: '3rem', textAlign: 'center', fontWeight: '700' }}>
            Insurances We Accept
          </h2>
          <ul style={{
            columns: 2,
            columnGap: '4rem',
            fontSize: '1.15rem',
            color: '#4a4a4a',
            marginBottom: '3rem',
            listStyle: 'none',
            maxWidth: '850px',
            margin: '0 auto 3rem',
            padding: 0
          }}>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#9dc7e8', fontWeight: 'bold' }}>✓</span>
              Tricare
            </li>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#9dc7e8', fontWeight: 'bold' }}>✓</span>
              Anthem
            </li>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#9dc7e8', fontWeight: 'bold' }}>✓</span>
              Anthem HealthKeepers
            </li>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#9dc7e8', fontWeight: 'bold' }}>✓</span>
              Sentara Health
            </li>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#9dc7e8', fontWeight: 'bold' }}>✓</span>
              Sentara Medicaid
            </li>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#9dc7e8', fontWeight: 'bold' }}>✓</span>
              Optima
            </li>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#9dc7e8', fontWeight: 'bold' }}>✓</span>
              Aetna
            </li>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#9dc7e8', fontWeight: 'bold' }}>✓</span>
              Aetna Medicaid
            </li>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#9dc7e8', fontWeight: 'bold' }}>✓</span>
              Cigna
            </li>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#9dc7e8', fontWeight: 'bold' }}>✓</span>
              Optum
            </li>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#9dc7e8', fontWeight: 'bold' }}>✓</span>
              United Healthcare
            </li>
            <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: '#9dc7e8', fontWeight: 'bold' }}>✓</span>
              United Community Care
            </li>
          </ul>
          <div style={{ textAlign: 'center' }}>
            <a href="#contact" style={{
              background: '#ffb84d',
              color: '#fff',
              padding: '0.9rem 2.5rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1.05rem',
              boxShadow: '0 4px 15px rgba(255,184,77,0.3)',
              transition: 'transform 0.2s',
              display: 'inline-block'
            }}>Contact Us</a>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="contact" style={{
        background: '#fff',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '2.5rem', color: '#5a8a6f', marginBottom: '3rem', textAlign: 'center', fontWeight: '700' }}>
            Get Started!
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
            <div style={{ textAlign: 'center', padding: '2.5rem', background: '#fff9f0', borderRadius: '16px', boxShadow: '0 6px 25px rgba(255,184,77,0.15)', border: '2px solid #ffe9c7' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📅</div>
              <h3 style={{ fontSize: '1.6rem', color: '#5a8a6f', marginBottom: '1rem', fontWeight: '700' }}>Schedule an Evaluation</h3>
              <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9' }}>
                Reach out to us via phone or contact form. Call us at <a href="tel:7575673649" style={{ color: '#ffb84d', fontWeight: 'bold', textDecoration: 'none' }}>(757) 567-3649</a>
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '2.5rem', background: '#f9fcff', borderRadius: '16px', boxShadow: '0 6px 25px rgba(157,199,232,0.15)', border: '2px solid #d6ebf5' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📋</div>
              <h3 style={{ fontSize: '1.6rem', color: '#5a8a6f', marginBottom: '1rem', fontWeight: '700' }}>Request a Referral</h3>
              <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9' }}>
                If using insurance, you need a referral for speech therapy from your doctor. Please have your doctor fax to us at <a href="tel:8665982999" style={{ color: '#9dc7e8', fontWeight: 'bold', textDecoration: 'none' }}>(866) 598-2999</a>
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '2.5rem', background: '#f7fcf5', borderRadius: '16px', boxShadow: '0 6px 25px rgba(180,212,168,0.15)', border: '2px solid #d9ecd1' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✍️</div>
              <h3 style={{ fontSize: '1.6rem', color: '#5a8a6f', marginBottom: '1rem', fontWeight: '700' }}>Intake Form</h3>
              <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9' }}>
                After our consultation, we will provide you with an intake form with a series of questions and all required documentation. After that, time to get scheduled!
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="tel:7575673649" style={{
              background: '#ffb84d',
              color: '#fff',
              padding: '1.1rem 3rem',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1.15rem',
              boxShadow: '0 6px 20px rgba(255,184,77,0.4)',
              transition: 'transform 0.2s',
              display: 'inline-block'
            }}>Schedule Now</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #b4d4a8 0%, #9dc7e8 100%)',
        color: '#fff',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.9rem', marginBottom: '1.5rem', fontWeight: '700' }}>First Connect Speech Therapy</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            📞 <a href="tel:7575673649" style={{ color: '#fff', textDecoration: 'none', fontWeight: '700' }}>(757) 567-3649</a> | 📠 <a href="tel:8665982999" style={{ color: '#fff', textDecoration: 'none', fontWeight: '700' }}>(866) 598-2999</a>
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            📍 123 Main Street, Suite 100, Newport News, VA 23606
          </p>
          <p style={{ fontSize: '0.95rem', marginTop: '2rem', opacity: 0.95 }}>
            Locally owned small business in Newport News, VA<br />
            © 2026 First Connect Speech Therapy. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
