import Api from "./Api";

const AuthService = {
  async Login(payload) {
    try {
      const res = await Api().post("http://localhost:8001/user/login", payload);
      if (res && res.status == 200) {
        return res;
      } else {
        return res;
      }
    } catch (error) {
      console.log("Error in Login Api ", error);
      return null;
    }
  },
};

export default AuthService;
