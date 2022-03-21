import "./about.css";
const About = () => {
  return (
    <div id="About" className="about">
      <div className="about-line">
        <hr />
      </div>
      <div className="about-section">
        <div className="about-left">
          <h1 className="about-title">About Me</h1>
        </div>
        <div className="about-right">
          <p>Hi, I'm </p>
          <p>Israa Hamieh, </p>
          <p>and I build cool websites,</p>
          <p> like this one!</p>
          <hr />
          <p>Download my resume</p>{" "}
          <p>to find a detailed description of my skills, </p>
          <p>and keep scrolling to see my projects!</p>
          <a
            className="glow-button"
            href="https://drive.google.com/file/d/182Rj2cLBfzJ3driWEYgrhE4TZlfUz9_L/view?usp=sharing"
            download="Israa's Resume"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
