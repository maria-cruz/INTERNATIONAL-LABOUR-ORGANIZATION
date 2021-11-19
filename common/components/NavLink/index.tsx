import React, { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
  exact?: boolean;
  children?: ReactNode;
  className?: string;
  props?: any;
  query?: string;
}

const NavLink = ({
  href,
  exact = false,
  children,
  className = "",
  query = "",
}: NavLinkProps) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={`${href}${query}`}>
      <a className={`${className} nav-link  ${isActive ? "active" : ""}`}>
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
