const getStrapiImageUrl = (url: string) => {
  return `${process.env.API_URL}${url}`;
};

export default getStrapiImageUrl;
