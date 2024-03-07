import Head from "next/head";

const HomePage = () => {
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
        <title>Home</title>
      </Head>
      <h1>Home</h1>
      <p
        style={{
          fontFamily: "Inter, Roboto",
          fontSize: "1.5rem",
        }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
        dicta eum atque quo a, totam et velit nam quidem reiciendis aut
        provident pariatur magni laborum ad expedita quia enim culpa.
      </p>
    </div>
  );
};

export default HomePage;
