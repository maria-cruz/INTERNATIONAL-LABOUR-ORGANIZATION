import { parseCookies } from "nookies";

const useJWT = () => {
  return parseCookies()?.jwt;
};

export default useJWT;
