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
        <h1>ISR - SWR</h1>
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
              <Link href={"/news-filtered"}>News</Link>
            </li>
            <li>
              <Link href={"/events-filtered"}>Events</Link>
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
