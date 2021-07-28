export const getFullImageUrl = (imageUrl: string) => {
  return process.env.GATSBY_STRAPI_API_URL + imageUrl;
};
