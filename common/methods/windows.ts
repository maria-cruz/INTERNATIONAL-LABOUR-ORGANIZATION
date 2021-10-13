const UNDEFINED = "undefined";

export const getIsWindowAvailable = () => {
  return typeof window !== UNDEFINED;
};
