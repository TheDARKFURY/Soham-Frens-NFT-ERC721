import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
    sdkOptions={{
      gasless: {
        biconomy: {
          apiKey: "FHjaDG5_I.4c998bdc-8e03-42f8-a50b-7d4981e04424",
          apiId: "3115d722-8893-417d-9e3f-dd3c2d2ff6b6",
        }
      },
    }}
    desiredChainId={activeChainId}>
      <Head>
      <link rel="icon" href="/title_image.png" />
        <title>Soham Frens</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="Soham Frens"
          content="You're my fren on chain. Do follow me on twitter: Soham.xyz | soham.lens"
        />
        <meta
          name="Soham Frens"
          content="You're my fren on chain. Do follow me on twitter: Soham.xyz | soham.lens"
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
