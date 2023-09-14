import Head from "next/head";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div className="container">{children}</div>
    <Footer />
  </>
);

export default Layout;
