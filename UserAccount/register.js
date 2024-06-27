function register(loginData) {
  return fetch(apiBaseURL + "/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify(loginData),
  }).then(response => response.json()).then(loginData => {
      if (loginData.hasOwnProperty("message")) {
          errorMessage.innerHTML = loginData.statusCode + " - " + loginData.message;
          return;
      }
      errorMessage.innerHTML = "";
      // window.localStorage.setItem("login-data", JSON.stringify(loginData));
      window.localStorage.token = loginData.token; //simple string
      window.localStorage.username = loginData.username; //simple string
      window.location.assign("/UserAccount/index.html");  // redirect
      return loginData;
  });
}
registerbtn.onclick=e=>{
  register({   
  "username": username.value,
  "fullName": fullName.value,
  "password": password.value
  })
}