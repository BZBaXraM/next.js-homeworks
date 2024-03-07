import Head from "next/head";

const BlogPage = () => {
  return (
    <div style={{
      flex: 1,
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
    
    }}>
      <Head>
        <title>Blog</title>
      </Head>
      <h1 style={{
        textAlign: 'center',
        fontFamily: 'Inter, Roboto',
        fontSize: '2rem',
      
      }}>Blog</h1>

      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '1.5rem',
        fontFamily: 'Inter, Roboto',
      
      }}>
        <li>Blog 1</li>
        <li>Blog 2</li>
        <li>Blog 3</li>
        <li>Blog 4</li>
      </ul>
    </div>
  );
};

export default BlogPage;
