import nookies, { parseCookies } from "nookies";

const useJWT = (context: any, isBearer = false) => {
  const hasNoContext = !context;
  const jwt = hasNoContext ? parseCookies()?.jwt : nookies.get(context)?.jwt;

  if (isBearer === true) return `Bearer ${jwt}`;
  return jwt;
};

export default useJWT;
