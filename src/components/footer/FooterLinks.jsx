import "./FooterLinks.css";

function FooterLinks({ title, link1, link2, link3, link4 }) {
  return (
    <div className="footer-text">
      <h4>{title}</h4>
      <a href="#">{link1}</a>
      <a href="#">{link2}</a>
      <a href="#">{link3}</a>
      {link4 && <a href="#">{link4}</a>}
    </div>
  );
}

export default FooterLinks;
