import "../styles/globals.css";
import Layout from "../layout/index.layout";
import { GlobalContext } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext>
  );
}

export default MyApp;
