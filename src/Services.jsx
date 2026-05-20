import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import logoImage from '../logo_images/Logo Concept-2026-02-01-White.png';
import ccpSlpLogo from '../logo_images/CCP-SLP-logo.png';
import childApraxiaLogo from '../logo_images/Child Apraxia Treatment.png';
import meaningfulSpeechLogo from "../logo_images/Meaningful speech nla trained clinician logo.png";
import vaDeptHealthLogo from "../logo_images/Virginia Department of Health Professions.png";
import developmentMilestonesPdf from '../pdfs/Development Milestones.pdf'
import speechSoundsPdf from '../pdfs/Speech Sounds.pdf'
import bubbleGirlImage from '../logo_images/Bubble_Girl.png'
import eatingImage from '../logo_images/Eating.jpg'
import tunnelImage from '../logo_images/Tunnel.jpg'
import zoeyImage from '../logo_images/zoey.jpg'
import zanderImage from '../logo_images/zander.jpeg'

function Services() {
  const [showMilestonesDropdown, setShowMilestonesDropdown] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ fontFamily: "'Quicksand', system-ui, -apple-system, sans-serif" }}>
      <Helmet>
        <title>Speech Therapy Services | Articulation, Apraxia, Autism, Feeding Therapy | First Connect Pediatric Therapy Newport News VA</title>
        <meta name="description" content="Comprehensive speech therapy services including evaluations, articulation, childhood apraxia (DTTC/PROMPT), AAC therapy, autism/gestalt language processing, feeding therapy, and ADOS-2 testing in Newport News, Hampton, and Yorktown VA." />
        <link rel="canonical" href="https://firstconnecttherapy.com/services" />
        <meta property="og:title" content="Speech Therapy Services | First Connect Pediatric Therapy" />
        <meta property="og:description" content="Expert pediatric speech therapy services: Articulation, AAC, apraxia, autism, feeding therapy, ADOS-2, and more in Newport News VA." />
        <meta property="og:image" content="https://firstconnecttherapy.com/favicon.svg" />
        <meta property="og:url" content="https://firstconnecttherapy.com/services" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          nav {
            padding: 1rem !important;
          }
          nav > div {
            flex-direction: column !important;
            gap: 0.8rem !important;
          }
          nav a {
            font-size: 0.9rem !important;
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
          .credentials-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .credentials-grid img {
            height: 80px !important;
            width: 160px !important;
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
          .specialty-photo {
            float: none !important;
            width: 100% !important;
            margin: 0 0 1.5rem 0 !important;
          }
        }
      `}</style>
      
      {/* Navigation Bar */}
      <nav style={{
        background: 'linear-gradient(135deg, #B0DAB6 0%, #99acff 100%)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        padding: '1.2rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          <a href="/" style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'color 0.3s'
          }}>Home</a>
          <a href="/#mission" style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'color 0.3s'
          }}>Mission</a>
          <a href="/#approach" style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'color 0.3s'
          }}>Approach</a>
          <a href="/#team" style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'color 0.3s'
          }}>Team</a>
          <a href="/services" style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'color 0.3s',
            borderBottom: '2px solid #fff'
          }}>Services</a>
          <a href="/#payments" style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'color 0.3s'
          }}>Payments</a>
          <div 
            className="milestones-dropdown"
            style={{ position: 'relative', display: 'inline-block' }}
            onMouseEnter={() => setShowMilestonesDropdown(true)}
            onMouseLeave={() => setShowMilestonesDropdown(false)}
          >
            <span className="milestones-trigger" style={{ color: '#fff', fontWeight: '600', fontSize: '1rem', cursor: 'pointer', padding: '0.5rem', display: 'inline-block' }}>
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
          <a href="/#contact" style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'color 0.3s'
          }}>Contact</a>
        </div>
      </nav>

      {/* Logo and Clinic Name Section */}
      <section style={{
        background: '#fdfae6',
        padding: '3rem 2rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <img src={logoImage} alt="First Connect Pediatric Therapy speech pathology clinic Newport News VA" style={{ height: '120px', width: '120px', borderRadius: '50%', background: '#B0DAB6', padding: '8px' }} />
          <h1 style={{ fontSize: '2rem', color: '#99acff', margin: 0, fontWeight: '700' }}>
            First Connect Pediatric Therapy, PLLC
          </h1>
        </div>
      </section>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #B0DAB6 0%, #99acff 100%)',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '1rem', fontWeight: '700' }}>
          Our Services
        </h1>
        <p style={{ fontSize: '1.3rem', color: '#fff', maxWidth: '800px', margin: '0 auto' }}>
          Comprehensive speech therapy services tailored to your child's unique needs
        </p>
      </section>

      {/* Evaluations Section */}
      <section style={{
        background: '#fdfae6',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '2.5rem', color: '#99acff', marginBottom: '2rem', fontWeight: '700' }}>
            Evaluations
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
            Our services begin with an evaluation in order for our sessions to be individualized and meaningful. Our comprehensive evaluations are dependent upon the needs of the child, age, and diagnosis. Typical evaluations will include:
          </p>
          <ul style={{
            fontSize: '1.1rem',
            color: '#4a4a4a',
            lineHeight: '1.9',
            marginLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li>Case history</li>
            <li>Parent interview</li>
            <li>Play observation</li>
            <li>Oral motor examination</li>
            <li>Standardized assessment if applicable</li>
            <li>Clinical observations</li>
            <li>Language sample of their current speech and language skills</li>
            <li>Referral and/or recommendations</li>
          </ul>
          <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9' }}>
            Once the evaluation is complete, we will set up a treatment plan going forward to discuss results and provide recommendation for services.
          </p>
        </div>
      </section>

      {/* Individual Speech Therapy Section */}
      <section style={{
        background: '#fdfae6',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '2.5rem', color: '#99acff', marginBottom: '2rem', fontWeight: '700' }}>
            Individual Speech Therapy
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
            Speech therapy helps children communicate, connect, and feel confident expressing themselves. For some children, this means learning to say sounds more clearly. For others, it may involve understanding directions and concepts, or strengthening feeding and oral-motor skills.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
            Speech therapy is not about "fixing" a child. It's about supporting their unique voice and helping them communicate in ways that work best for them at home, at school, and in the world around them.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
            Using a neurodiversity affirming lens, we build a child's communication skills by honoring their special interests and play styles while supporting their sensory needs.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
            You may see us moving around engaging in motor movements through an obstacle course, participating in regulating sensory activities like blowing bubbles or playing with playdough, supporting special interests using letters and numbers, or taking turns playing various games or using toys.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
            At First Connect, PLLC, we are trained to diagnose and treat a wide range of communication differences and disorders including:
          </p>
          <ul style={{
            fontSize: '1.1rem',
            color: '#4a4a4a',
            lineHeight: '1.9',
            marginLeft: '2rem',
            marginBottom: '0'
          }}>
            <li>Receptive and expressive language delay</li>
            <li>Articulation and phonological disorders</li>
            <li>Augmentative and Alternative Communication (AAC)</li>
            <li>Gestalt Language Processing</li>
            <li>Autism</li>
            <li>Childhood apraxia of speech</li>
            <li>Fluency disorders</li>
            <li>Feeding and oral motor delays</li>
            <li>Picky eating</li>
            <li>Literacy</li>
          </ul>
        </div>
      </section>

      {/* Specialty Services Header */}
      <section style={{
        background: 'linear-gradient(135deg, #B0DAB6 0%, #99acff 100%)',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '0', fontWeight: '700' }}>
          Specialty Services
        </h2>
      </section>

      {/* Articulation and Speech Sound Disorders */}
      <section style={{
        background: '#fdfae6',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h3 style={{ fontSize: '2rem', color: '#99acff', marginBottom: '1.5rem', fontWeight: '700' }}>
            Articulation and Speech Sound Disorders
          </h3>
          <img 
            src={zoeyImage} 
            alt="Child practicing articulation therapy speech sounds with bubble activities" 
            className="specialty-photo"
            style={{
              float: 'left',
              width: '40%',
              height: 'auto',
              marginRight: '2rem',
              marginBottom: '1rem',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(176,218,182,0.3)',
              border: '2px solid #B0DAB6'
            }} 
          />
          <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
            Is your child struggling to pronounce certain sounds or be understood when they speak? We support children with speech sound challenges including articulation and phonology using personalized, play-based therapy approaches. Through articulation and phonological intervention, your child will learn to:
          </p>
          <ul style={{
            fontSize: '1.1rem',
            color: '#4a4a4a',
            lineHeight: '1.9',
            marginLeft: '2rem',
            marginBottom: '0'
          }}>
            <li>Develop accurate use of age-expected speech sounds in words and connected speech</li>
            <li>Communicate more clearly with peers and adults</li>
            <li>Experience less frustration during everyday conversations</li>
            <li>Build confidence and feel more comfortable using their voice</li>
          </ul>
        </div>
      </section>

      {/* Childhood Apraxia of Speech */}
      <section style={{
        background: '#fdfae6',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h3 style={{ fontSize: '2rem', color: '#99acff', marginBottom: '1.5rem', fontWeight: '700' }}>
            Childhood Apraxia of Speech
          </h3>
          <img 
            src={bubbleGirlImage} 
            alt="Childhood apraxia of speech therapy using DTTC and PROMPT techniques" 
            className="specialty-photo"
            style={{
              float: 'right',
              width: '45%',
              height: 'auto',
              marginRight: '2rem',
              marginBottom: '1rem',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(176,218,182,0.3)',
              border: '2px solid #99acff'
            }} 
          />
          <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
            Children with Childhood Apraxia of Speech (CAS) often benefit from targeted support to plan and sequence the movements needed for clear speech. We incorporate a motor-based treatment approach known as DTTC (Dynamic Temporal and Tactile Cueing) and techniques from PROMPT within engaging, child-directed activities to strengthen motor speech skills in a fun and supportive way. Speech therapy can help your child:
          </p>
          <ul style={{
            fontSize: '1.1rem',
            color: '#4a4a4a',
            lineHeight: '1.9',
            marginLeft: '2rem',
            marginBottom: '0'
          }}>
            <li>Expand their speech sound repertoire by developing new consonants and vowels</li>
            <li>Produce meaningful words with greater consistency and accuracy</li>
            <li>Improve overall speech clarity so they can be better understood by others</li>
            <li>Communicate their thoughts, needs, and wants with growing confidence</li>
          </ul>
        </div>
      </section>

      {/* AAC */}
      <section style={{
        background: '#fdfae6',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h3 style={{ fontSize: '2rem', color: '#99acff', marginBottom: '1.5rem', fontWeight: '700' }}>
            Augmentative and Alternative Communication (AAC)
          </h3>
          <img 
            src={zanderImage} 
            alt="Child using AAC augmentative alternative communication device for speech therapy" 
            className="specialty-photo"
            style={{
              float: 'left',
              width: '30%',
              height: 'auto',
              marginRight: '2rem',
              marginBottom: '1rem',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(176,218,182,0.3)',
              border: '2px solid #ff8447'
            }} 
          />
          <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
            When a child has difficulty expressing themselves through speech, it can lead to frustration and limit participation in everyday life. We support communication by introducing Augmentative and Alternative Communication (AAC) to create a dependable way for your child to share their message—through gestures, signs, or a communication device. AAC therapy helps your child:
          </p>
          <ul style={{
            fontSize: '1.1rem',
            color: '#4a4a4a',
            lineHeight: '1.9',
            marginLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li>Use purposeful and functional vocabulary</li>
            <li>Effectively communicate their wants, needs, thoughts, and questions</li>
            <li>Take an active role in daily routines, choices, and social interactions</li>
            <li>Grow in confidence as a self-directed communicator</li>
          </ul>
          <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9' }}>
            We also guide families through the process of choosing the right AAC system, securing funding, and supporting consistent use across home, school, and community settings.
          </p>
        </div>
      </section>

      {/* Autism and Gestalt Language Processors */}
      <section style={{
        background: '#fdfae6',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h3 style={{ fontSize: '2rem', color: '#99acff', marginBottom: '1.5rem', fontWeight: '700' }}>
            Autism and Gestalt Language Processors
          </h3>
          <img 
            src={tunnelImage} 
            alt="Autistic child engaged in play-based speech therapy for gestalt language processing" 
            className="specialty-photo"
            style={{
              float: 'right',
              width: '40%',
              height: 'auto',
              marginRight: '2rem',
              marginBottom: '1rem',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(176,218,182,0.3)',
              border: '2px solid #B0DAB6'
            }} 
          />
          <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9', marginBottom: '1.5rem' }}>
            We have experience supporting children who communicate using echolalia and scripted language. Through engaging, child-directed play, we validate and respect these scripts while gently modeling flexible language to support progress through the Natural Language Acquisition (NLA) framework—from echoed phrases toward self-generated speech. Speech therapy can help your child:
          </p>
          <ul style={{
            fontSize: '1.1rem',
            color: '#4a4a4a',
            lineHeight: '1.9',
            marginLeft: '2rem',
            marginBottom: '1.5rem'
          }}>
            <li>Feel seen, supported, and connected during communication</li>
            <li>Share thoughts and ideas using their own unique words</li>
            <li>Communicate in ways that are clearer and more easily understood by others</li>
          </ul>
          <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9' }}>
            Family participation plays an essential role in gestalt language therapy. Caregivers are welcomed and encouraged to be active partners in sessions, learning strategies to support communication every day.
          </p>
        </div>
      </section>

      {/* Feeding/Picky Eating */}
      <section style={{
        background: '#fdfae6',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h3 style={{ fontSize: '2rem', color: '#99acff', marginBottom: '1.5rem', fontWeight: '700' }}>
            Feeding & Picky Eating
          </h3>
          <img 
            src={eatingImage} 
            alt="Child receiving feeding therapy for picky eating and oral motor skills development" 
            className="specialty-photo"
            style={{
              float: 'left',
              width: '30%',
              height: 'auto',
              marginRight: '2rem',
              marginBottom: '1rem',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(176,218,182,0.3)',
              border: '2px solid #99acff'
            }} 
          />
          <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9' }}>
            Is your child struggling to expand their diet from chicken nuggets and pizza? Are mealtimes feeling stressful and overwhelming? Feeding therapy supports children who struggle with picky or restrictive eating by helping them feel safe, confident, and comfortable around food. Through play-based, child-centered strategies, we gently expand food variety while building positive mealtime experiences, oral motor skills and sensory tolerance—without pressure or force. We also address myofunctional deficits such as mouth breathing, tongue thrust, or difficulty moving their muscles which may affect swallowing solids or multi-textured foods.
          </p>
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
          <img src={ccpSlpLogo} alt="ASHA CCC-SLP certified speech language pathologist credential" style={{ 
            height: '150px',
            width: '300px',
            objectFit: 'contain'
          }} />
          <img src={childApraxiaLogo} alt="Childhood apraxia of speech treatment specialist certification" style={{ 
            height: '150px',
            width: '300px',
            objectFit: 'contain'
          }} />
          <img src={meaningfulSpeechLogo} alt="Natural Language Acquisition NLA trained clinician for gestalt language processing and autism" style={{ 
            height: '150px',
            width: '300px',
            objectFit: 'contain'
          }} />
          <img src={vaDeptHealthLogo} alt="Virginia Department of Health Professions licensed speech therapist" style={{ 
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
          <h3 style={{ fontSize: '1.9rem', marginBottom: '1.5rem', fontWeight: '700' }}>First Connect Speech Therapy</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            📞 <a href="tel:7578484979" style={{ color: '#fff', textDecoration: 'none', fontWeight: '700' }}>(757) 848-4979</a> 
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            📍 400 Blevins Run, Yorktown, VA 23693
          </p>
          <p style={{ fontSize: '0.95rem', marginTop: '2rem', opacity: 0.95 }}>
            Locally owned small business in Yorktown, VA<br />
            © 2026 First Connect Speech Therapy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Services;
