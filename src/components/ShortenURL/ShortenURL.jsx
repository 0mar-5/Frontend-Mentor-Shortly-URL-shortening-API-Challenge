import { useState } from "react";
import ShortURLResult from "./ShortURLResult";
import { fetchShortUrl } from "../helper";
import "./ShortenURL.css";
function ShortenURL() {
  const [showResult, setShowResult] = useState(false);
  const [url, setURL] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async function (e) {
    e.preventDefault();
    setShowResult(!showResult);
    const shortenUrl = await fetchShortUrl(url);
    setShortUrl(shortenUrl);
  };

  return (
    <section className="shorten-container" id="shorten-link">
      <div className={`${showResult && "container-move"} container`}>
        <form className="shorten" onSubmit={handleSubmit}>
          <input
            className="input-shorten"
            value={url}
            onChange={(e) => setURL(e.target.value)}
            type="text"
            placeholder="Shorten a link here..."
          />
          <button className="shorten-btn">Shorten It!</button>
        </form>
        {showResult && <ShortURLResult url={url} shortUrl={shortUrl} />}
      </div>
    </section>
  );
}

export default ShortenURL;
