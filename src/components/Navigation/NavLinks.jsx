import "./NavLinks.css";
function NavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <a className="main-nav-link" href="#shorten-link">
          Features
        </a>
      </li>
      <li>
        <a className="main-nav-link" href="#cta">
          Pricing
        </a>
      </li>
      <li>
        <a className="main-nav-link" href="#resources">
          Resources
        </a>
      </li>
    </ul>
  );
}

export default NavLinks;
