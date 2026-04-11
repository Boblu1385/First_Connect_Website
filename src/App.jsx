import { useState } from 'react'
import './App.css'
import logoImage from '../logo_images/Logo Concept-2026-02-01-White.png'
import groupJoyImage from '../logo_images/GroupJoy.jpg'
import playtimeImage from '../logo_images/Playtime.jpg'
import ccpSlpLogo from '../logo_images/CCP-SLP-logo.png'
import childApraxiaLogo from '../logo_images/Child Apraxia Treatment.png'
import meaningfulSpeechLogo from '../logo_images/Meaningful speech nla trained clinician logo.png'
import vaDeptHealthLogo from '../logo_images/Virginia Department of Health Professions.png'
import cherieFamilyImage from '../logo_images/Cherie_Family_Photo.jpg'
import lindseyFamilyImage from '../logo_images/Lindsey_Family_Photo.jpg'
import developmentMilestonesPdf from '../pdfs/Development Milestones.pdf'
import speechSoundsPdf from '../pdfs/Speech Sounds.pdf'

function App() {
  const [showMilestonesDropdown, setShowMilestonesDropdown] = useState(false)

  return (
    <>
      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          header {
            padding: 1rem 1rem !important;
          }
          header nav {
            gap: 0.8rem !important;
            font-size: 0.9rem;
          }
          header nav a {
            padding: 0.4rem 0.6rem !important;
          }
          section {
            padding: 2.5rem 1rem !important;
          }
          h1 {
            font-size: 1.8rem !important;
          }
          h2 {
            font-size: 1.6rem !important;
          }
          h3 {
            font-size: 1.4rem !important;
          }
          .logo-section-content {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
          .logo-image-container {
            height: 250px !important;
          }
          .logo-title {
            font-size: 1.2rem !important;
            padding: 0.4rem 0.5rem !important;
            white-space: nowrap !important;
            text-align: center;
            max-width: 100% !important;
            width: max-content !important;
          }
          .welcome-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .three-column-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .two-column-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .get-started-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .credentials-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .credentials-grid img {
            height: 80px !important;
            width: 160px !important;
          }
          .cherie-photo {
            float: none !important;
            width: 100% !important;
            margin: 0 0 1.5rem 0 !important;
          }
          .lindsey-photo {
            float: none !important;
            width: 100% !important;
            margin: 0 0 1.5rem 0 !important;
          }
          .milestones-dropdown {
            display: inline-block !important;
          }
          .milestones-trigger {
            padding: 0.4rem 0.6rem !important;
            font-size: 0.9rem !important;
          }
          .milestones-menu {
            left: 50% !important;
            transform: translateX(-50%) !important;
            min-width: 200px !important;
          }
        }
      `}</style>
      
      {/* Navigation Bar */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem 3rem',
        background: 'linear-gradient(135deg, #B0DAB6 0%, #99acff 100%)',
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
          <a href="#payments" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Payments</a>
          <div 
            className="milestones-dropdown"
            style={{ position: 'relative', display: 'inline-block' }}
            onMouseEnter={() => setShowMilestonesDropdown(true)}
            onMouseLeave={() => setShowMilestonesDropdown(false)}
          >
            <span className="milestones-trigger" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', cursor: 'pointer', display: 'inline-block' }}>
              Development Milestones
            </span>
            {showMilestonesDropdown && (
              <div className="milestones-menu" style={{
                position: 'absolute',
                top: 'calc(100% - 0.25rem)',
                left: '0',
                background: '#fff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                borderRadius: '8px',
                minWidth: '220px',
                paddingTop: '0.75rem',
                paddingBottom: '0.5rem',
                zIndex: 1000
              }}>
                <a 
                  href={developmentMilestonesPdf} 
                  download="Development Milestones.pdf"
                  style={{
                    display: 'block',
                    padding: '0.75rem 1.25rem',
                    color: '#4a4a4a',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#f0f0f0'}
                  onMouseLeave={(e) => e.target.style.background = 'transparent'}
                >
                  📥 Development Milestones
                </a>
                <a 
                  href={speechSoundsPdf} 
                  download="Speech Sounds.pdf"
                  style={{
                    display: 'block',
                    padding: '0.75rem 1.25rem',
                    color: '#4a4a4a',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#f0f0f0'}
                  onMouseLeave={(e) => e.target.style.background = 'transparent'}
                >
                  📥 Speech Sounds
                </a>
              </div>
            )}
          </div>
          <a href="#contact" style={{ padding: '0.5rem', color: '#fff', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}>Contact</a>
        </nav>
      </header>

      {/* Logo and Clinic Name */}
      <section style={{
        background: '#fdfae6',
        padding: '3rem 2rem 2rem',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="logo-section-content" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '3rem'
        }}>
          <div className="logo-image-container" style={{ 
            position: 'relative', 
            flex: 1,
            height: '400px',
            overflow: 'hidden',
            borderRadius: '16px',
            boxShadow: '0 4px 15px rgba(176,218,182,0.2)'
          }}>
            <img src={playtimeImage} alt="Playtime" style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 25%',
              display: 'block'
            }} />
            <div style={{ 
              position: 'absolute',
              bottom: '0.5rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '1rem',
              background: 'transparent',
              padding: '1rem 2rem',
              borderRadius: '16px'
            }}>
              <h2 className="logo-title" style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                color: '#fff', 
                margin: 0, 
                whiteSpace: 'nowrap',
                background: 'linear-gradient(135deg, rgba(176, 218, 182, 0.9) 0%, rgba(153, 172, 255, 0.9) 100%)',
                padding: '0.75rem 2rem',
                borderRadius: '12px'
              }}>First Connect Pediatric Therapy</h2>
            </div>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <img src={logoImage} alt="Clinic Logo" style={{ height: '180px', width: '180px', borderRadius: '50%', background: '#B0DAB6', padding: '12px' }} />
          </div>
        </div>
      </section>

      {/* Hero Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #B0DAB6 0%, #99acff 100%)',
        color: '#fff',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.3', color: '#fff' }}>
          Neurodiversity-Affirming Speech Therapy in Newport News, VA
        </h1>
        <p style={{ fontSize: '1.2rem', fontWeight: '500', color: '#fff', marginTop: '1rem', lineHeight: '1.6' }}>
          Serving children & families in the Hampton Roads Area and surrounding communities with IN-HOME speech therapy. We come to you!
        </p>
      </section>

      {/* Welcome Section */}
      <section id="welcome" style={{
        background: '#fdfae6',
        padding: '5rem 2rem'
      }}>
        <div className="welcome-grid" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: '#99acff', marginBottom: '1.5rem', fontWeight: '700' }}>
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
                background: '#ff8447',
                color: '#fff',
                padding: '0.9rem 2rem',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: '700',
                boxShadow: '0 4px 15px rgba(255,132,71,0.3)',
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
              boxShadow: '0 8px 30px rgba(176,218,182,0.2)'
            }} />
          </div>
        </div>
      </section>

      {/* Mission, Approach, and Specialties - Three Column Section */}
      <section id="mission" style={{
        background: '#fdfae6',
        padding: '5rem 2rem'
      }}>
        <div id="approach" style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div className="three-column-grid" style={{
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
              boxShadow: '0 6px 25px rgba(176,218,182,0.2)',
              border: '2px solid #B0DAB6'
            }}>
              <h2 style={{ fontSize: '2rem', color: '#99acff', marginBottom: '1.5rem', fontWeight: '700', textAlign: 'center' }}>
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
              boxShadow: '0 6px 25px rgba(153,172,255,0.2)',
              border: '2px solid #99acff'
            }}>
              <h2 style={{ fontSize: '2rem', color: '#99acff', marginBottom: '1.5rem', fontWeight: '700', textAlign: 'center' }}>
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
              boxShadow: '0 6px 25px rgba(255,132,71,0.2)',
              border: '2px solid #ff8447'
            }}>
              <h2 style={{ fontSize: '2rem', color: '#99acff', marginBottom: '1.5rem', fontWeight: '700', textAlign: 'center' }}>
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
              background: '#ff8447',
              color: '#fff',
              padding: '1rem 2.5rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: '700',
              boxShadow: '0 4px 15px rgba(255,132,71,0.3)',
              transition: 'transform 0.2s',
              fontSize: '1.1rem'
            }}>Book a Free Consult</a>
            <a href="/services" style={{
              background: '#fff',
              color: '#99acff',
              padding: '1rem 2.5rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: '700',
              border: '2px solid #99acff',
              transition: 'transform 0.2s',
              fontSize: '1.1rem'
            }}>Learn more about our services →</a>
          </div>
        </div>
      </section>

      {/* Why Choose First Connect Section */}
      <section style={{
        background: '#fdfae6',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2.5rem', color: '#99acff', marginBottom: '2rem', fontWeight: '700' }}>
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
        background: '#fdfae6',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div className="two-column-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            {/* What is ADOS-2 */}
            <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 6px 25px rgba(153,172,255,0.2)', border: '2px solid #99acff' }}>
              <h3 style={{ fontSize: '1.9rem', color: '#99acff', marginBottom: '1.2rem', fontWeight: '700' }}>
                What is ADOS-2?
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9' }}>
                The Autism Diagnostic Observation Schedule, Second Edition (ADOS-2) is a standardized diagnostic tool used to assess and diagnose autism spectrum disorder (ASD) across all ages, developmental levels, and language abilities. This standardized assessment evaluates key area including communication, social interaction, sensory processing, and repetitive behavior.
              </p>
            </div>

            {/* Why ADOS-2 is Important */}
            <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 6px 25px rgba(176,218,182,0.2)', border: '2px solid #B0DAB6' }}>
              <h3 style={{ fontSize: '1.9rem', color: '#99acff', marginBottom: '1.2rem', fontWeight: '700' }}>
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
        background: '#fdfae6',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '2.5rem', color: '#99acff', marginBottom: '3rem', textAlign: 'center', fontWeight: '700' }}>
            Meet Our Team
          </h2>
          
          {/* Therapist 1: Cherie Rose */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '3rem',
            marginBottom: '2.5rem',
            boxShadow: '0 6px 25px rgba(176,218,182,0.2)'
          }}>
            <h3 style={{ fontSize: '2rem', color: '#99acff', marginBottom: '0.5rem', fontWeight: '700' }}>
              Cherie Rose, M.A., CCC-SLP
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#B0DAB6', marginBottom: '1.8rem', fontStyle: 'italic', fontWeight: '600' }}>
              Owner, Speech-Language Pathologist
            </p>            <img 
              src={cherieFamilyImage} 
              alt="Cherie with her family" 
              className="cherie-photo"
              style={{
                float: 'right',
                width: '48%',
                height: 'auto',
                marginLeft: '2rem',
                marginBottom: '1rem',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(176,218,182,0.3)',
                border: '2px solid #ff8447'
              }} 
            />            <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
              Cherie Rose is a board-certified speech-language pathologist through the American Speech-Language-Hearing Association (ASHA) and holds a Virginia state license. She earned her Bachelor’s degree in Speech-Language Pathology with a minor in Special Education from Old Dominion University in 2015, followed by a Master’s degree in Communicative Sciences and Disorders from Hampton University in 2018.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
              With over seven years of clinical experience, Cherie brings both professional expertise and deep personal insight to her work with children and families. Her passion for speech-language pathology began in 2006, when she recognized that her youngest son was not meeting the same verbal milestones as her eldest. After a referral to speech therapy by her pediatrician, Cherie discovered her calling.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '0' }}>
              Having experienced the therapy journey firsthand as a parent, Cherie has a profound understanding of the frustration, uncertainty, and emotional challenges families often face. This lived experience allows her to approach therapy with empathy, compassion, and evidence-based clinical strategies tailored to each child’s unique needs.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '0' }}>
              Cherie is committed to providing family-centered, strengths-based care that supports meaningful communication and long-term success for every child she serves.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '0' }}>
              Outside of work, Cherie enjoys hiking a new trail, strolling along the beach or taking long walks with her dogs. Most of all, Cherie cherishes spending time with her family, exploring the stunning Virginia mountains with her husband and boys.
            </p>
          </div>

          {/* Therapist 2: Lindsey Lewandowski */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '3rem',
            boxShadow: '0 6px 25px rgba(176,218,182,0.2)'
          }}>
            <h3 style={{ fontSize: '2rem', color: '#99acff', marginBottom: '0.5rem', fontWeight: '700' }}>
              Lindsey Lewandowski, M.S., CCC-SLP
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#B0DAB6', marginBottom: '1.8rem', fontStyle: 'italic', fontWeight: '600' }}>
              Owner, Speech-Language Pathologist
            </p>
            <img 
              src={lindseyFamilyImage} 
              alt="Lindsey with her family" 
              className="lindsey-photo"
              style={{
                float: 'right',
                width: '48%',
                height: 'auto',
                marginLeft: '2rem',
                marginBottom: '1rem',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(176,218,182,0.3)',
                border: '2px solid #ff8447'
              }} 
            />
            <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
              Lindsey Lewandowski is a board certified speech language pathologist through the American Speech Language Hearing Association (ASHA) and holds a Virgina state license. She earned her undergraduate degree in sociology from the University of Virginia in 2006 where she played Division 1 field hockey.  In 2008, her dad suffered a major stroke and needed intensive speech therapy. Through this experience, she learned of speech therapy and went on to study speech pathology at Old Dominion University where she earned her Master of Science in Education in 2012.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
              With 14 years of clinical experience, Lindsey has worked in a variety of settings including public schools, early intervention, and outpatient settings. Her background includes extensive work with children presenting with a wide range of communication needs including Autism, Apraxia, AAC, Receptive/Expressive Language Delays, Articulation/Phonological Disorders, and more. 
            </p>
            <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
              Lindsey is dedicated to using a child-led, play-based approach that focuses on building trust and connection. She is committed to ongoing professional development and continually seeks out advanced training to stay current with evidence based practices in the field.
            </p>
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
        background: '#fdfae6',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '2.5rem', color: '#99acff', marginBottom: '3rem', textAlign: 'center', fontWeight: '700' }}>
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
        background: '#fdfae6',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '2.5rem', color: '#99acff', marginBottom: '3rem', textAlign: 'center', fontWeight: '700' }}>
            What Families Are Saying
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 6px 25px rgba(153,172,255,0.2)', borderLeft: '4px solid #99acff' }}>
              <p style={{ fontSize: '1.15rem', color: '#4a4a4a', fontStyle: 'italic', lineHeight: '1.9', marginBottom: '1.2rem' }}>
                "First Connect Speech Therapy is uniquely welcoming and affirming of all kids with communication needs. The team is professional, caring, and dedicated to helping each child reach their full potential."
              </p>
              <p style={{ fontSize: '1rem', color: '#B0DAB6', fontWeight: '600', textAlign: 'right' }}>~ Parent</p>
            </div>
            <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 6px 25px rgba(153,172,255,0.2)', borderLeft: '4px solid #99acff' }}>
              <p style={{ fontSize: '1.15rem', color: '#4a4a4a', fontStyle: 'italic', lineHeight: '1.9', marginBottom: '1.2rem' }}>
                "My family and I have had an outstanding experience with First Connect. The therapists are knowledgeable, patient, and truly care about the progress of each child."
              </p>
              <p style={{ fontSize: '1rem', color: '#B0DAB6', fontWeight: '600', textAlign: 'right' }}>~ Parent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options Section */}
      <section id="payments" style={{
        background: '#fdfae6',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2.5rem', color: '#99acff', marginBottom: '3rem', fontWeight: '700' }}>
            Payment Options
          </h2>
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '3rem',
            boxShadow: '0 6px 25px rgba(176,218,182,0.2)',
            border: '2px solid #B0DAB6'
          }}>
            <p style={{ fontSize: '1.2rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '2rem' }}>
              Our services are offered on a <strong>private-pay basis</strong> at this time. Clients receive a comprehensive superbill that may be submitted to their insurance provider for possible out-of-network reimbursement, depending on individual plan benefits.
            </p>
            <p style={{ fontSize: '1.2rem', color: '#4a4a4a', lineHeight: '1.9' }}>
              The practice is in the process of pursuing insurance credentialing, and we will notify families as new options become available.
            </p>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="#contact" style={{
              background: '#ff8447',
              color: '#fff',
              padding: '0.9rem 2.5rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1.05rem',
              boxShadow: '0 4px 15px rgba(255,132,71,0.3)',
              transition: 'transform 0.2s',
              display: 'inline-block'
            }}>Contact Us</a>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      {/* Get Started Section */}
      <section id="contact" style={{
        background: '#fdfae6',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '2.5rem', color: '#99acff', marginBottom: '3rem', textAlign: 'center', fontWeight: '700' }}>
            Get Started!
          </h2>
          <div className="get-started-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
            <div style={{ textAlign: 'center', padding: '2.5rem', background: '#fff', borderRadius: '16px', boxShadow: '0 6px 25px rgba(255,132,71,0.2)', border: '2px solid #ff8447' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📅</div>
              <h3 style={{ fontSize: '1.6rem', color: '#99acff', marginBottom: '1rem', fontWeight: '700' }}>Schedule an Evaluation</h3>
              <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9' }}>
                Reach out to us via phone or contact form. Call us at <a href="tel:7575673649" style={{ color: '#ff8447', fontWeight: 'bold', textDecoration: 'none' }}>(757) 567-3649</a>
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '2.5rem', background: '#fff', borderRadius: '16px', boxShadow: '0 6px 25px rgba(153,172,255,0.2)', border: '2px solid #99acff' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📞</div>
              <h3 style={{ fontSize: '1.6rem', color: '#99acff', marginBottom: '1rem', fontWeight: '700' }}>Free Consultation</h3>
              <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9' }}>
                We offer a complimentary phone consultation to discuss your child's needs, answer questions about our approach, and determine if our services are the right fit for your family.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '2.5rem', background: '#fff', borderRadius: '16px', boxShadow: '0 6px 25px rgba(176,218,182,0.2)', border: '2px solid #B0DAB6' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✍️</div>
              <h3 style={{ fontSize: '1.6rem', color: '#99acff', marginBottom: '1rem', fontWeight: '700' }}>Intake Form</h3>
              <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9' }}>
                After our consultation, we will provide you with an intake form with a series of questions and all required documentation. After that, time to get scheduled!
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="tel:7575673649" style={{
              background: '#ff8447',
              color: '#fff',
              padding: '1.1rem 3rem',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1.15rem',
              boxShadow: '0 6px 20px rgba(255,132,71,0.4)',
              transition: 'transform 0.2s',
              display: 'inline-block'
            }}>Schedule Now</a>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section style={{
        background: '#fff',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <div className="credentials-grid" style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
          justifyItems: 'center'
        }}>
          <img src={ccpSlpLogo} alt="CCC-SLP Certified" style={{ 
            height: '150px',
            width: '300px',
            objectFit: 'contain'
          }} />
          <img src={childApraxiaLogo} alt="Child Apraxia Treatment" style={{ 
            height: '150px',
            width: '300px',
            objectFit: 'contain'
          }} />
          <img src={meaningfulSpeechLogo} alt="Meaningful Speech NLA Trained Clinical" style={{ 
            height: '150px',
            width: '300px',
            objectFit: 'contain'
          }} />
          <img src={vaDeptHealthLogo} alt="Virginia Department of Health Professions" style={{ 
            height: '150px',
            width: '300px',
            objectFit: 'contain'
          }} />
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #B0DAB6 0%, #99acff 100%)',
        color: '#fff',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.9rem', marginBottom: '1.5rem', fontWeight: '700' }}>First Connect Pediatric Therapy</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            📞 <a href="tel:7575673649" style={{ color: '#fff', textDecoration: 'none', fontWeight: '700' }}>(757) 567-3649</a> | 📠 <a href="tel:8665982999" style={{ color: '#fff', textDecoration: 'none', fontWeight: '700' }}>(866) 598-2999</a>
          </p>
          <p style={{ fontSize: '0.95rem', marginTop: '2rem', opacity: 0.95 }}>
            Locally owned small business in Yorktown, VA<br />
            © 2026 First Connect Pediatric Therapy. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
