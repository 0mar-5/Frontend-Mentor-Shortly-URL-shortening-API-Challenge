import "./Footer.css";
import logo from "../../images/logo.svg";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";
function Footer() {
  return (
    <footer className="footer" id="resources">
      <a href="#" className="logo">
        <img className="logo" alt="logo" src={logo} />
      </a>
      <FooterLinks
        title="Features"
        link1="Link Shortening"
        link2="Branded Links"
        link3="Analytics"
      />
      <FooterLinks
        title="Resources"
        link1="Blog"
        link2="Developers"
        link3="Support"
      />
      <FooterLinks
        title="Company"
        link1="About"
        link2="Our Team"
        link3="Careers"
        link4="Contact"
      />
      <SocialLinks />
    </footer>
  );
}

export default Footer;
