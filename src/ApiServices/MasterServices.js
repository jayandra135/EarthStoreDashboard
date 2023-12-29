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
};
