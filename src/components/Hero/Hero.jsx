import heroImg from "../../images/illustration-working.svg";
import "./Hero.css";
function Hero() {
  return (
    <section className="section-hero container">
      <div className="hero-text">
        <h1 className="main-heading"> More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="btn">Get Started</button>
      </div>

      <div className="img-container">
        <img className="hero-img" src={heroImg} alt="hero img" />
      </div>
    </section>
  );
}

export default Hero;
