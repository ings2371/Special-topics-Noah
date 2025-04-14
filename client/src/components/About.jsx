import meImage from '../Images/me.jpg'; // Adjust path based on file location
import '../css/about.css'; // Make sure this file exists

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-card">
        <img src={meImage} alt="Noah Ings" className="about-image" />
        <div className="about-text">
          <p>Hello!</p>
          <p>
            I'm Noah Ings, and this site was born out of necessity.
            As a dedicated Yu-Gi-Oh! collector, I found myself constantly losing track
            of which cards I owned and how many copies I had.
          </p>
          <p>
            So I decided to build a personal catalog
            where I can browse, search, and manage my collection with ease.
          </p>
          <p>
            Whether you're like me or not, thanks for stopping by and seeing what I 
            came up with for this problem I have.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
