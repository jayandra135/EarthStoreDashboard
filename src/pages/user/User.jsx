import React, { useEffect, useState } from "react";
import { user_columns } from "../../components/tables/TableHeader";
import Table from "../../components/tables/Table";
import MasterServices from "../../ApiServices/MasterServices";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
const User = () => {
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();

  const getAllUserData = async () => {
    const response = await MasterServices.getAllUser();
    if (response.data.data.length > 0) {
      setAllUsers(response.data.data);
    } else {
      toast.error(response?.data?.message);
    }
  };
  useEffect(() => {
    getAllUserData();
  }, []);
  const onDeleteOpen = async (id) => {
    const response = await MasterServices.deleteUserApi(id);

    if (response.status === 200) {
      toast.success("Deleted user successfully");
      getAllUserData();
    } else {
      toast.error("something happen");
    }
  };

  const onEditOpen = (id) => {
    if (id) {
      setTimeout(() => {
        navigate("/adduser/" + id);
      }, 0);
    }
  };
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col">
          <div className="flex justify-between items-center ">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold"> Users</h2>
              <p className="text-md font-normal text-gray-700">
                All list of all users.
              </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <Link
                to="/adduser"
                type="button"
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add user
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <Table
              columns={user_columns({ onDeleteOpen, onEditOpen })}
              data={allUsers}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default User;
