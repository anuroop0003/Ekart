export const getUserToken = () => {
  return JSON.parse(localStorage.getItem("user"))?.token;
};

export const setUserData = (data) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      email: data.email,
      name: data.displayName,
      photoURL: data.photoURL,
      token: data.token,
    })
  );
}
