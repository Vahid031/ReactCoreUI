import axios from "axios";

const API_URL = "https://localhost:44377/";

class AuthService {
  
  login(username, password) {
   
    return axios
      .post(API_URL + "api/Account/authenticate", {
        username,
        password
      })
      .then(response => response.data)
      .then(response => {

        if (response.succeeded) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }

  isLoggedIn(){

    console.log(JSON.parse(localStorage.getItem('user')));
    // return false;
  return  JSON.parse(localStorage.getItem('user')) !== undefined;
  }
}

export default new AuthService();
