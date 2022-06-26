import "../styles/globals.css";
import "../styles/none2.scss";
import "../styles/none.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { createContext, useState } from "react";

export const DataContext = createContext({} as any);

function MyApp({ Component, pageProps }: AppProps) {
  const [data, setData] = useState();
  return (
    <DataContext.Provider value={{ data, setData }}>
      <Head>
        <title>Netflix</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </DataContext.Provider>
  );
}

export default MyApp;
