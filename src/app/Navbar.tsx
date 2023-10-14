import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className=" border-b h-14 mb-5 flex space-x-6 items-center px-5 ">
      <Link href="/">Logo</Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link key={link.label} href={link.href} className="text-zinc-500 hover:text-zinc-800 transition-colors">
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
