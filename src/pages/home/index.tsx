import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <p
        style={{
          fontSize: "1.5rem",
          textAlign: "center",
          padding: "15rem",
        }}
      >
        Welcome to the home page!
      </p>
    </div>
  );
};

export default Home;
