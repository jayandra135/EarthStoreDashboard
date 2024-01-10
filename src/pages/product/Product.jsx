import React, { useEffect, useState } from "react";
import MasterServices from "../../ApiServices/MasterServices";
import { product_colums } from "../../components/tables/TableHeader";
import Table from "../../components/tables/Table";
import { toast } from "react-toastify";
const Product = () => {
  const [allProdut, setAllProduct] = useState([]);
  const getAllProduct = async () => {
    const response = await MasterServices.getAllProduct();
    if (response.data.data.length > 0) {
      setAllProduct(response.data.data);
    } else {
      toast.error(response?.data?.message);
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  const onDeleteOpen = () => {};
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col ">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-lg font-semibold">Product</h2>
            <p className="text-md font-normal text-gray-700">
              All list of all Products.
            </p>
          </div>
          <div className="flex flex-col">
            <Table
              columns={product_colums({ onDeleteOpen })}
              data={allProdut}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
