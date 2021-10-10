import "@styles/main.scss";
import type { AppProps, AppContext } from "next/app";
import { parseCookies } from "nookies";
import Router from "next/router";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
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
