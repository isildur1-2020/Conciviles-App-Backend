const setPort = () => {
  const TEMP_PORT = 34657;
  const DEF_PORT = process.env.PORT;
  const isProduction = Boolean(process.env.PRODUCTION);
  if (!isProduction) return TEMP_PORT;
  if (DEF_PORT === undefined) return TEMP_PORT;
  return DEF_PORT;
};
export const variables = {
  baseURL: process.env.BASE_URL,
  apiKey: process.env.API_KEY,
  port: setPort(),
};
