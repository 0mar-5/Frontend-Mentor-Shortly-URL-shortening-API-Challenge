import { useState } from "react";
import ShortURLResult from "./ShortURLResult";
import "./ShortenURL.css";
function ShortenURL() {
  const [showResult, setShowResult] = useState(false);
  const handleSubmit = function (e) {
    e.preventDefault();
    setShowResult(!showResult);
  };
  return (
    <section className="shorten-container" id="shorten-link">
      <div className={`${showResult && "container-move"} container`}>
        <form className="shorten" onSubmit={handleSubmit}>
          <input
            className="input-shorten"
            type="text"
            placeholder="Shorten a link here..."
          />
          <button className="shorten-btn">Shorten It!</button>
        </form>
        {showResult && <ShortURLResult />}
      </div>
    </section>
  );
}

export default ShortenURL;
