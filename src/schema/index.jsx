import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  firstName: Yup.string().required("required"),
  lastName: Yup.string().required("required"),
  email: Yup.string().email("enter valid email").required("required"),
  password: Yup.string().required("required"),
  gender: Yup.string().required("required"),
  contact: Yup.number().required("required"),
  dob: Yup.date().required("required"),
});
