import React, { useEffect, useState, Fragment } from "react";
import MasterServices from "../../ApiServices/MasterServices";
import { category_columns } from "../../components/tables/TableHeader";
import Table from "../../components/tables/Table";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

import AddCategory from "./AddCategory";

const Category = () => {
  const [allcategory, setAllCategory] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  const [open, setOpen] = useState(false);

  const getCategoryData = async () => {
    const response = await MasterServices.getAllCategory();

    if (response?.data) {
      setAllCategory(response?.data?.data);
      setImageUrl(response?.data?.path);
    } else {
      toast.error(response?.data?.message);
    }
  };
  useEffect(() => {
    getCategoryData();
  }, []);

  const onDeleteOpen = () => {};
  const openModal = () => {
    setOpen(true);
    setImageSrc(null);
  };
  const closeModal = () => {
    setOpen(false);
    setImageSrc(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setImageSrc(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col ">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-y-2">
              <h2 className="text-lg font-semibold">Category</h2>
              <p className="text-md font-normal text-gray-700">
                All list of all category.
              </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <button
                type="button"
                onClick={openModal}
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Category
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <Table
              columns={category_columns({ onDeleteOpen, imageUrl })}
              data={allcategory}
            />
          </div>
          <AddCategory
            open={open}
            closeModal={closeModal}
            setOpen={setOpen}
            imageSrc={imageSrc}
            handleImageChange={handleImageChange}
            openModal={openModal}
          />
        </div>
      </div>

      {/* sidle window */}
    </>
  );
};
export default Category;
