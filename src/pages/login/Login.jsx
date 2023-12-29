import React from "react";
import AuthService from "../../ApiServices/AuthService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    AuthService.Login(body)
      .then(async (response) => {
        const { data, status } = response;
        console.log("response", response.status);
        if (parseInt(status) == 200) {
          toast.success(data.message);
          navigate("/");
          localStorage.setItem("token", data.token);
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 ">
        <div className="mx-auto max-w-5xl  px-4 py-4 h-screen flex justify-center ">
          <div className="flex  items-center  ">
            <div className="rounded-lg bg-slate-50 flex flex-col w-[500px] h-auto px-10 py-10 gap-y-5 shadow-2xl border mv:w-[100%] sm:w-[500px]">
              <h2 className="text-xl font-medium">Login</h2>
              <form
                onSubmit={(e) => handleSubmit(e)}
                className="flex flex-col gap-y-4"
              >
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="block text-lg sm:text-md mv:text-sm lg:text-lg  font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="you@example.com"
                      aria-describedby="email-description"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="block text-lg sm:text-md mv:text-sm font-medium lg:text-lg leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <button
                    type="submit"
                    className="rounded-md  bg-indigo-600  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
