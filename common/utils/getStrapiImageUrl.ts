const getStrapiImageUrl = (url: string) => {
  if (!url || !process.env.API_URL) return "";
  return `${process.env.API_URL}${url}`;
};

export default getStrapiImageUrl;
