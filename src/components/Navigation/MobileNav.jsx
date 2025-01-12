import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import "./MobileNav.css";
function MobileNav({ handleToggle }) {
  return (
    <button className="btn-mobile-nav" onClick={handleToggle}>
      <RxHamburgerMenu className="icon-mobile-nav" name="menu-outline" />
      <IoMdClose className="icon-mobile-nav" name="close-outline" />
    </button>
  );
}

export default MobileNav;
