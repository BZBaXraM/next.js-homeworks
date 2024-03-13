import Head from "next/head";
import { roboto } from ".";

const Account = () => {
  return (
    <div
      style={{
        flex: 1,
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Head>
        <title>Accout</title>
      </Head>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Account
      </h1>
      <a
        href="https://www.facebook.com/baxram97"
        target="_blank"
        style={{
          color: "blue",
          textDecoration: "underline",
          textAlign: "center",
          display: "block",
          fontFamily: `${roboto.className}`,
          fontSize: "1.5rem",
        }}
      >
        My Facebook account
      </a>
    </div>
  );
};

export default Account;
