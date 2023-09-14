import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <Head></Head>
    <div>{children}</div>
  </>
);

export default Layout;
