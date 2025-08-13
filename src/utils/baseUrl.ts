export const baseUrl = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (baseUrl) {
    return baseUrl;
  }

  return "https://jsonplaceholder.typicode.com";
};
