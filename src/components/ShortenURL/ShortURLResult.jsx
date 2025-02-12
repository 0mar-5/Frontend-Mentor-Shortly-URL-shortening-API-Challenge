import { useState } from "react";
import "./ShortURLResult.css";

function ShortURLResult({ url, shortUrl }) {
  const [copyText, setCopyText] = useState("Copy");
  const handleCopy = function () {
    navigator.clipboard.writeText(shortUrl);
    setCopyText("copied!");
  };
  return (
    <div className="shorter-url-container">
      <div className="url">{url}</div>
      <div className="short-url">{shortUrl}</div>
      <button className="btn-copy" onClick={handleCopy}>
        {copyText}
      </button>
    </div>
  );
}

export default ShortURLResult;
