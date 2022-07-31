import Head from "next/head";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <title>React App</title>
      </Head>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
