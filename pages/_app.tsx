import "@styles/main.scss";
import type { AppProps, AppContext } from "next/app";
import { parseCookies } from "nookies";
import Router from "next/router";
import Script from "next/script";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
      />
      <Script strategy="beforeInteractive">
        {` 
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', ${process.env.GOOGLE_ANALYTICS_ID});
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
};

const redirectUser = (ctx: any, location: string) => {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
};

MyApp.getInitialProps = async ({ ctx }: AppContext) => {
  const publicPaths = [
    "/",
    "/log-in",
    "/forgot-password",
    "/sign-up",
    "/about-us",
    "/download-guide",
    "/faq",
  ];
  const jwt = parseCookies(ctx).jwt;
  const hasNoJWT = !jwt;

  if (hasNoJWT && !publicPaths.includes(ctx.pathname)) {
    redirectUser(ctx, "/log-in");
    return;
  }
};

export default MyApp;
