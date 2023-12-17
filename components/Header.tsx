import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
const Header = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='flex h-14 items-center justify-between max-w-2xl mx-auto'>
        <Logo />
        <Nav />
      </div>
    </header>
  );
};
export default Header;
