import React, { useEffect, useState } from "react";
import { user_columns } from "../../components/tables/TableHeader";
import Table from "../../components/tables/Table";
import MasterServices from "../../ApiServices/MasterServices";
import { ToastContainer, toast } from "react-toastify";
const User = () => {
  const [allUsers, setAllUsers] = useState([]);

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
  const onDeleteOpen = () => {};
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-lg font-medium"> Users</h2>
            <p className="text-md font-normal text-gray-700">
              All list of all users.
            </p>
          </div>
          <div className="flex flex-col">
            <Table columns={user_columns({ onDeleteOpen })} data={allUsers} />
          </div>
        </div>
      </div>
    </>
  );
};
export default User;
