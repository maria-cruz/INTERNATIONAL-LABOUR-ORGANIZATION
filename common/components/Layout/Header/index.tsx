import React from "react";

interface HeaderProps {
  title?: string;
  gap?: string;
  className?: string;
}

const Header = ({
  title = "Untitled",
  gap = "0rem",
  className = "",
}: HeaderProps) => {
  return (
    <header className={`header ${className}`} style={{ marginBottom: gap }}>
      <span className="header-title">{title}</span>
    </header>
  );
};

export default Header;
