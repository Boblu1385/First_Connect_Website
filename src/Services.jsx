import logoImage from '../logo_images/Logo Concept-2026-02-01-White.png';

function Services() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Navigation Bar */}
      <nav style={{
        background: '#fff',
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
            color: '#5a8a6f',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'color 0.3s'
          }}>Home</a>
          <a href="/#mission" style={{
            color: '#5a8a6f',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'color 0.3s'
          }}>Mission</a>
          <a href="/#approach" style={{
            color: '#5a8a6f',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'color 0.3s'
          }}>Approach</a>
          <a href="/#team" style={{
            color: '#5a8a6f',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'color 0.3s'
          }}>Team</a>
          <a href="/services" style={{
            color: '#5a8a6f',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'color 0.3s',
            borderBottom: '2px solid #5a8a6f'
          }}>Services</a>
          <a href="/#insurance" style={{
            color: '#5a8a6f',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'color 0.3s'
          }}>Insurance</a>
          <a href="/#resources" style={{
            color: '#5a8a6f',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'color 0.3s'
          }}>Resources</a>
          <a href="/#contact" style={{
            color: '#5a8a6f',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'color 0.3s'
          }}>Contact</a>
        </div>
      </nav>

      {/* Logo and Clinic Name Section */}
      <section style={{
        background: '#fff',
        padding: '2rem',
        textAlign: 'center',
        borderBottom: '1px solid #e8f4ee'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: '#b4d4a8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <img src={logoImage} alt="First Connect Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h1 style={{ fontSize: '2rem', color: '#5a8a6f', margin: 0, fontWeight: '700' }}>
            First Connect Pediatric Therapy, PLLC
          </h1>
        </div>
      </section>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #b4d4a8 0%, #9dc7e8 100%)',
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
        background: '#fff',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '2.5rem', color: '#5a8a6f', marginBottom: '2rem', fontWeight: '700' }}>
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
        background: '#f9fcff',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '2.5rem', color: '#5a8a6f', marginBottom: '2rem', fontWeight: '700' }}>
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
        background: 'linear-gradient(135deg, #b4d4a8 0%, #9dc7e8 100%)',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '0', fontWeight: '700' }}>
          Specialty Services
        </h2>
      </section>

      {/* Articulation and Speech Sound Disorders */}
      <section style={{
        background: '#fff',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h3 style={{ fontSize: '2rem', color: '#5a8a6f', marginBottom: '1.5rem', fontWeight: '700' }}>
            Articulation and Speech Sound Disorders
          </h3>
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
        background: '#f7fcf5',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h3 style={{ fontSize: '2rem', color: '#5a8a6f', marginBottom: '1.5rem', fontWeight: '700' }}>
            Childhood Apraxia of Speech
          </h3>
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
        background: '#f9fcff',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h3 style={{ fontSize: '2rem', color: '#5a8a6f', marginBottom: '1.5rem', fontWeight: '700' }}>
            Augmentative and Alternative Communication (AAC)
          </h3>
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
        background: '#fff',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h3 style={{ fontSize: '2rem', color: '#5a8a6f', marginBottom: '1.5rem', fontWeight: '700' }}>
            Autism and Gestalt Language Processors
          </h3>
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
        background: '#f7fcf5',
        padding: '5rem 2rem'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h3 style={{ fontSize: '2rem', color: '#5a8a6f', marginBottom: '1.5rem', fontWeight: '700' }}>
            Feeding & Picky Eating
          </h3>
          <p style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.9' }}>
            Is your child struggling to expand their diet from chicken nuggets and pizza? Are mealtimes feeling stressful and overwhelming? Feeding therapy supports children who struggle with picky or restrictive eating by helping them feel safe, confident, and comfortable around food. Through play-based, child-centered strategies, we gently expand food variety while building positive mealtime experiences, oral motor skills and sensory tolerance—without pressure or force. We also address myofunctional deficits such as mouth breathing, tongue thrust, or difficulty moving their muscles which may affect swallowing solids or multi-textured foods.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #5a8a6f 0%, #7a9d8a 100%)',
        color: '#fff',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>First Connect Pediatric Therapy, PLLC</h3>
          <p style={{ marginBottom: '0.5rem' }}>📞 (757) 567-3649 | 📠 (866) 598-2999</p>
          <p style={{ marginBottom: '0.5rem' }}>📧 info@firstconnectpediatrictherapy.com</p>
          <p style={{ marginBottom: '2rem' }}>📍 123 Main Street, Suite 100, Virginia Beach, VA 23456</p>
          <p style={{ fontSize: '0.9rem', color: '#e0f0e6' }}>© 2026 First Connect Pediatric Therapy, PLLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Services;
