import axios from "axios";
import useJWT from "@common/hooks/useJWT";

const useCourses = async () => {
  const bearerJWT = useJWT(true);

  try {
    const response = await axios.get(`${process.env.API_URL}/units`, {
      headers: {
        Authorization: bearerJWT,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default useCourses;
