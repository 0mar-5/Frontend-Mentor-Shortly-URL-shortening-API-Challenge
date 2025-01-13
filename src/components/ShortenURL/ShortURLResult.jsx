import "./ShortURLResult.css";

function ShortURLResult() {
  return (
    <div className="shorter-url-container">
      <div className="url">https://www.testlink.com</div>
      <div className="short-url">https:/short/k4fasaxd</div>
      <button className="btn-copy">Copy</button>
    </div>
  );
}

export default ShortURLResult;
