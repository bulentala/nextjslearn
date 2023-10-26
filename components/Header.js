import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="flex justify-between  ">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
