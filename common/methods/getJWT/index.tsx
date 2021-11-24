import nookies, { parseCookies } from "nookies";

const getJWT = (context?: any, isBearer: boolean = false) => {
  const hasNoContext = !context;
  const jwt = hasNoContext ? parseCookies()?.jwt : nookies.get(context)?.jwt;

  if (isBearer === true) return `Bearer ${jwt}`;
  return jwt;
};

export default getJWT;
