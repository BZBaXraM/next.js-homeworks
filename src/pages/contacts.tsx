import Head from "next/head";

const mockData = [
  {
    id: 1,
    name: "Bahram",
  },
  {
    id: 2,
    name: "Next.js",
  },
];

const Contact = () => {
  return (
    <div style={{
        flex: 1,
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        fontFamily: 'Inter, Roboto',
        fontSize: '2rem',
    }}>
      <Head>
        <title>Contact</title>
      </Head>
      <h1>Contact</h1>

        <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '1.5rem',
        
        }}>
            {mockData.map((contact) => (
            <li key={contact.id}>{contact.name}</li>
            ))}
        </ul>
    </div>
  );
};

export default Contact;
