import { useState, useEffect } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [topVisible, setTopVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Scroll effect for hiding/showing navbar + header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setTopVisible(false); // scrolling down → hide
      } else {
        setTopVisible(true); // scrolling up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Sticky container for navbar + header */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          transform: topVisible ? "translateY(0)" : "translateY(-200px)",
          transition: "transform 0.4s ease-in-out",
        }}
      >
        {/* Navigation */}
        <nav
          className="site-navigation"
          style={{
            backgroundColor: "#2A1134",
            color: "#fff",
            padding: "20px 0",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          <div
            className="site-navigation-inner site-container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 20px",
            }}
          >
            <div
              className="logo"
              style={{ fontWeight: "bold", color: "#B366FF", fontSize: "1.4rem" }}
            >
              {/* Logo content if needed */}
            </div>

            <div
              id="myBtn"
              className={`burger-container ${menuOpen ? "change" : ""}`}
              onClick={toggleMenu}
              style={{ cursor: "pointer", display: "none" }}
            >
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </div>
          </div>
        </nav>

        {/* Animated Header */}
        <header
          className="animated-header"
          style={{
            backgroundColor: "#7A4988",
            color: "#7A4988",
            textAlign: "center",
            padding: "50px 20px",
            fontSize: "1.5rem",
            fontWeight: "500",
            animation: "fadeInDown 2s ease",
          }}
        >
          <div className="header-text">
            Driven by Curiosity. Powered by Data. Focused on People.
          </div>
        </header>
      </div>

      {/* Top banner */}
      <section
        className="fh5co-top-banner"
        style={{
          backgroundColor: "#1A0F1F",
          color: "#fff",
          padding: "80px 0",
        }}
      >
        <div
          className="top-banner__inner site-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
 <img
  src="/personal-portfolio/images/Estela.jpg"
  alt="author"
  style={{
    width: "300px",
    borderRadius: "5%",
    boxShadow: "0 0 15px rgba(145, 47, 164, 0.4)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    marginTop: "-20px", // move image higher
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "scale(1.03)";
    e.currentTarget.style.boxShadow = "0 0 25px rgba(145, 47, 164, 0.6)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 0 15px rgba(145, 47, 164, 0.4)";
  }}
/>


          <div
            className="top-banner__text"
            style={{ maxWidth: "500px", textAlign: "left" }}
          >
            <div className="top-banner__text-up">
              <span className="brand-span" style={{ color: "#912fa4" }}>
                Hello! I'm
              </span>
              <h2
                className="top-banner__h2"
                style={{ fontSize: "2.5rem", margin: "10px 0" }}
              >
                Estela
              </h2>
            </div>
            <div className="top-banner__text-down">
              <h2 className="top-banner__h2" style={{ fontSize: "2.5rem" }}>
                Jalac
              </h2>
              <span className="brand-span" style={{ color: "#912fa4" }}>
                Business Analyst in Progress
              </span>
            </div>
            <p style={{ marginTop: "20px", color: "#ccc" }}>
              Driven by Curiosity. Powered by Data. Focused on People.
            </p>
            <a
              href="#bio"
              className="brand-button"
              style={{
                display: "inline-block",
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#7A4988",
                color: "#fff",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Read bio &gt;
            </a>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section id="bio" style={{ backgroundColor: "#1E0A28", padding: "70px 0" }}>
        <div className="site-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ color: "#F8F6F0", textAlign: "center", marginBottom: "40px" }}>
            About Me
          </h2>
          <div style={{ color: "#fff", lineHeight: "1.8" }}>
            <p><strong>Name:</strong> Estela Jalac</p>
            <p><strong>From:</strong> Philippines</p>
            <p><strong>Career Goal:</strong> Aspiring Business Analyst</p><br />

            <p><strong>Education:</strong><br />
              • Currently pursuing a Bachelor of Science in Information and Communications Technology (ICT)<br />
              • Completed Associate in Computer Technology
            </p><br />

            <p><strong>Focus Areas:</strong><br />
              • Learning the fundamentals of business analysis and systems documentation<br />
              • Practicing requirements gathering and stakeholder communication<br />
              • Creating diagrams such as use case, activity, and data flow diagrams<br />
              • Exploring how technology supports business processes and decision-making
            </p><br />

            <p><strong>Skills and Tools:</strong><br />
              • Basic understanding of UML and process modeling<br />
              • Experience creating prototypes and wireframes using Figma<br />
              • Familiar with data organization, user stories, and documentation techniques
            </p><br />

            <p><strong>Interests:</strong><br />
              • Exploring how analysis and design connect in system development<br />
              • Continuously improving analytical and communication skills<br />
              • Enjoys teamwork and collaborating on projects
            </p><br />

            <p><strong>Personal Hobbies:</strong><br />
              • Loves art and expressing creativity<br />
              • Enjoys experimenting with makeup artistry and new looks<br />
              • Interested in fashion and personal styling<br />
              • Watches anime and reads manga for inspiration and relaxation<br />
              • Likes combining creativity and technology in unique ways
            </p><br />
          </div>
        </div>
      </section>

      {/* Resume Download Section */}
      <section id="resume" style={{ backgroundColor: "#1E0A28", padding: "70px 0" }}>
        <div className="site-container" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: "#B366FF", marginBottom: "30px" }}>Download My Resume</h2>
          <p style={{ color: "#ccc", marginBottom: "40px", fontSize: "1.1rem" }}>
            Interested in learning more about my background and experience? Download my resume to view my complete qualifications.
          </p>
          <a
            href="/resume/Estela_Jalac_Resume.pdf"
            download="Estela_Jalac_Resume.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "15px 30px",
              backgroundColor: "#912fa4",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1.1rem",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: "0 4px 15px rgba(145, 47, 164, 0.3)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(145, 47, 164, 0.5)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(145, 47, 164, 0.3)";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Resume (PDF)
          </a>
          <p style={{ color: "#888", marginTop: "20px", fontSize: "0.9rem" }}>
            PDF format • Updated October 2025
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ backgroundColor: "#1A0F1F", padding: "70px 0" }}>
        <div className="site-container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ color: "#B366FF", textAlign: "center", marginBottom: "50px" }}>Projects</h2>
          <div
            className="projects-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {[
              {
                title: "Streaming App Research",
                description:
                  "Analyzing Loklok's visual, auditory, and emotional impact with improvement possibilities.",
                img: "/personal-portfolio/images/loklok-project.png",
              },
              {
                title: "Game Prototype",
                description:
                  "Collaborated with a team to design a Game prototype, focusing on user experience and design.",
                img: "/personal-portfolio/images/game.png",
              },
              {
                title: "Note App",
                description:
                  "A functional note-taking application created during my 1st year as an ACT student for a practical exam.",
                img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&h=500&fit=crop",
              },
            ].map((project, i) => (
              <div
                className="project-card"
                key={i}
                style={{
                  backgroundColor: "#2A1134",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
                  transition: "transform 0.3s ease",
                }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div style={{ padding: "20px" }}>
                  <h3 style={{ color: "#B366FF" }}>{project.title}</h3>
                  <p style={{ color: "#ccc", fontSize: "0.95rem" }}>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        style={{
          backgroundColor: "#2A1134",
          color: "#fff",
          padding: "60px 0",
          textAlign: "center",
        }}
      >
        <h5 style={{ color: "#B366FF", marginBottom: "15px" }}>Get In Touch</h5>
        <p>
          Email:{" "}
          <a
            href="mailto:jalacestelamae@gmail.com"
            style={{ color: "#B366FF", textDecoration: "none" }}
          >
            jalacestelamae@gmail.com
          </a>
        </p><br />
        <p>Phone: +9158788127</p>

{/* Socials */}
<div style={{ marginTop: "30px" }}>
  <a
    href="https://www.linkedin.com/in/estela-mae-jalac-975119303/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
      alt="LinkedIn"
      style={{ width: "30px", margin: "0 10px", filter: "invert(1)" }}
    />
  </a>
  <a
    href="https://www.instagram.com/nutellaoverload?igsh=aWJxbjBzeWRyMGs2"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
      alt="Instagram"
      style={{ width: "30px", margin: "0 10px", filter: "invert(1)" }}
    />
  </a>
  <a
    href="https://www.facebook.com/estela.mae.jalac.2024"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
      alt="Facebook"
      style={{ width: "30px", margin: "0 10px", filter: "invert(1)" }}
    />
  </a>
</div>

<div
  style={{
    marginTop: "30px",
    borderTop: "1px solid #3B1C4A",
    paddingTop: "20px",
  }}
>

          <p style={{ fontSize: "0.85rem", color: "#888" }}>
            © 2025 Estela Jalac | All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
