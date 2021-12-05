import nookies, { parseCookies } from "nookies";

const getUserId = (context?: any) => {
  const hasNoContext = !context;
  const user_id = hasNoContext
    ? parseCookies()?.user_id
    : nookies.get(context)?.user_id;

  return user_id;
};

export default getUserId;
