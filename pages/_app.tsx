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
  const privateRoutes = ["/courses-main", "/how-it-works"];
  const jwt = parseCookies(ctx).jwt;
  const hasNoJWT = !jwt;

  console.log(ctx.pathname, "Hello");
  if (hasNoJWT && privateRoutes.includes(ctx.pathname)) {
    redirectUser(ctx, "/log-in");
    return;
  }
};

export default MyApp;
