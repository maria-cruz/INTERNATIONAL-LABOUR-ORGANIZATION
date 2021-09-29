import "@styles/main.scss";
import { Provider } from "next-auth/client";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
