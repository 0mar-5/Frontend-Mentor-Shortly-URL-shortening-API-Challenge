import Card from "./Card";
import "./Statistics.css";
import iconBrand from "../../images/icon-brand-recognition.svg";
import detailedRecords from "../../images/icon-detailed-records.svg";
import fullyCustomizable from "../../images/icon-fully-customizable.svg";
function Statistics() {
  return (
    <section className="statistics">
      <div className="statistics-title">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="line"></div>
      <div className="cards-container">
        <Card
          className="first-card"
          imgURL={iconBrand}
          title="Brand Recognition"
          description="Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content."
        />
        <Card
          imgURL={detailedRecords}
          title="Detailed Records"
          description="Gain insights into who is clicking your links. Knowing when and where
            people engage with your content helps inform better decisions."
        />
        <Card
          className="last-card"
          imgURL={fullyCustomizable}
          title="Fully Customizable"
          description="Improve brand awareness and content discoverability through customizable
            links, supercharging audience engagement."
        />
      </div>
    </section>
  );
}

export default Statistics;
