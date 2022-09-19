const localStorageToGetTokenUser = () => {
  const getData = JSON.parse(localStorage.getItem("auth_token"));
  if (getData) {
    return getData;
  } else {
    return {};
  }
};

export default localStorageToGetTokenUser;
