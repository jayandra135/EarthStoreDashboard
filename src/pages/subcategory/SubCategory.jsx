import React, { useEffect, useState } from "react";
import MasterServices from "../../ApiServices/MasterServices";
import { toast } from "react-toastify";
import { subcategory_columns } from "../../components/tables/TableHeader";
import Table from "../../components/tables/Table";
const SubCategory = () => {
  const [allSubCategory, setAllSubCategory] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const getSubCategory = async () => {
    const response = await MasterServices.getAllSubCategory();
    if (response?.data) {
      setAllSubCategory(response.data.data);
      setImageUrl(response?.data?.path);
    } else {
      toast.error(response?.data?.message);
    }
  };
  useEffect(() => {
    getSubCategory();
  }, []);
  const onDeleteOpen = () => {};
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col ">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-lg font-semibold">SubCategory</h2>
            <p className="text-md font-normal text-gray-700">
              All list of all subcategory.
            </p>
          </div>
          <div className="flex flex-col">
            <Table
              columns={subcategory_columns({ onDeleteOpen, imageUrl })}
              data={allSubCategory}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubCategory;
