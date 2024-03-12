// Layout.tsx
import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          backgroundColor: "#111",
          color: "#fff",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>ISR</h1>
        <nav>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              listStyle: "none",
              minWidth: 600,
            }}
          >
            <li>
              <Link href={"/"}>Main</Link>
            </li>
            <li>
              <Link href={"/home"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/cars"}>Car List</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
      <footer
        style={{
          backgroundColor: "#111",
          color: "#fff",
          padding: "1rem",
          marginTop: "auto",
        }}
      >
        All rights reserved
      </footer>
    </div>
  );
};

export default Layout;
