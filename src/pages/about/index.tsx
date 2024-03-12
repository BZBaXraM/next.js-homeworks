import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <p
        style={{
          fontSize: "1.5rem",
          textAlign: "center",
          // scale: "1.5",
          padding: "15rem",
          // color: "#111",
        }}
      >
        By Bahram Bayramzade
      </p>
    </div>
  );
};

export default About;
