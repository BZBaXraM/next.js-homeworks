import Head from "next/head";
import { roboto } from ".";

const About = () => {
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
        <title>About</title>
      </Head>
      <h1>About</h1>
      <p
        style={{
          fontFamily: `${roboto.className}`,
          fontSize: "1.5rem",
          textAlign: "center",
        }}
      >
        By Bahram Bayramzade
      </p>
    </div>
  );
};

export default About;
