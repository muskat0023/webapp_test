import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
          this.setAuthToken(response.data.token); // 로그인 시 토큰 설정
        }
        return response.data;
      });
  }

  logout() {
    return axios
      .post(API_URL + "logout")
      .then(() => {
        localStorage.removeItem("user");
        this.removeAuthToken(); // 로그아웃 시 토큰 제거
      });
  }

  register(username, password) {
    return axios.post(API_URL + "signup", {
      username,
      email: `${username}@mycompany.com`,
      password,
    });
  }

  setAuthToken(token) {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }

  removeAuthToken() {
    delete axios.defaults.headers.common["Authorization"];
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  isAuthenticated() {
    const user = this.getCurrentUser();
    return user && user.token;
  }
}

export default new AuthService();