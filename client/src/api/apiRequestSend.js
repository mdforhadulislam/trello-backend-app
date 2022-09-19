/*************************
 * get api request send
 *************************
 * @param {string} url 
 * @param {object} setHeaders 
 * @returns {Any} Array/object/string
 */
export const getApiCall = async (url, setHeaders) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...setHeaders,
    },
  };
  const respons = await fetch(url, options);
  const data = respons.json();
  return data;
};

/**************************
 * api to send post request
 *************************
 * @param {string} url 
 * @param {object} fromData 
 * @param {object} setHeaders 
 * @returns {Any} Array/object
 */
export const postApiCall = async (url, fromData, setHeaders) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...setHeaders,
    },
    body: JSON.stringify(fromData),
  };

  const respons = await fetch(url, options);
  const data = respons.json();
  return data;
};



/*****************************
 * update data to api request
 *****************************
 * @param {string} url 
 * @param {object} fromData 
 * @param {object} setHeaders 
 * @returns {Any} Array/object
 */
export const putApiCall = async (url, fromData, setHeaders) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...setHeaders,
    },
    body: JSON.stringify(fromData),
  };

  const respons = await fetch(url, options);
  const data = respons.json();
  return data;
};


/**
 * 
 * @param {string} url 
 * @returns {Any} Array/object/string
 */
export const deleteApiCall = async (url) => {
  const options = {
    method: "DELETE"
  };
  const respons = await fetch(url, options);
  const data = respons.json();
  return data;
};
