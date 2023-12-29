import React, { useEffect, useState } from "react";
import MasterServices from "../../ApiServices/MasterServices";
import { category_columns } from "../../components/tables/TableHeader";
import Table from "../../components/tables/Table";
import { ToastContainer, toast } from "react-toastify";
const Category = () => {
  const [allcategory, setAllCategory] = useState([]);

  const getCategoryData = async () => {
    const response = await MasterServices.getAllCategory();

    if (response.data.data.length > 0) {
      setAllCategory(response?.data?.data);
    } else {
      toast.error(response?.data?.message);
    }
  };
  useEffect(() => {
    getCategoryData();
  }, []);
  const onDeleteOpen = () => {};
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col ">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-lg font-medium">Category</h2>
            <p className="text-md font-normal text-gray-700">
              All list of all category.
            </p>
          </div>
          <div className="flex flex-col">
            <Table
              columns={category_columns({ onDeleteOpen })}
              data={allcategory}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;
