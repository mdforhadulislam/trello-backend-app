import axios from "axios";

export const getApiCall = async (url, setHeaders) => {
  const respons = await axios.get(url, {
    headers: setHeaders,
  });

  const data = respons.data;

  return data;
};

export const postApiCall = async (url,userData, setHeaders) => {
  const respons = await axios.post(url, userData, {
    headers: setHeaders,
  });
  const data = respons.data;
  return data;
};
