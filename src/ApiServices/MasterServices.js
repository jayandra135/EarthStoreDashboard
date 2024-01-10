import Api from "./Api";

export default {
  async getAllUser() {
    const response = await Api().get("user/get-usersAll");
    return response;
  },
  async getAllCategory() {
    const response = await Api().get("category/get-categoryAll");
    return response;
  },
  async getAllSubCategory() {
    const response = await Api().get("subcategory/get-allSubCategory");
    return response;
  },

  async getAllProduct() {
    const response = await Api().get("product/get-allProducts");
    return response;
  },

  async postUserData(body) {
    const response = await Api().post("user/addUser", body);
    return response;
  },

  async deleteUserApi(id) {
    const response = await Api().delete("user/deleteUser/" + id);
    return response;
  },
};
