import { link } from "fs";
import Link from "next/link";
const NavItems = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Contact", href: "/contact" },
];
const Nav = () => {
  return (
    <ul className='flex space-x-2 text-gray-500 text-base'>
      {NavItems.map((navItem) => {
        return (
          <li key={navItem.id}>
            <Link key={navItem.id} href={navItem.href}>
              {navItem.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default Nav;
