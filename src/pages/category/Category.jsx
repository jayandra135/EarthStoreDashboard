import React, { useEffect, useState, Fragment } from "react";
import MasterServices from "../../ApiServices/MasterServices";
import { category_columns } from "../../components/tables/TableHeader";
import Table from "../../components/tables/Table";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  LinkIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";

const Category = () => {
  const [allcategory, setAllCategory] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
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
        </div>
      </div>

      {/* sidle window */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-xs">
                    <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                      <div className="h-0 flex-1 overflow-y-auto">
                        <div className="bg-gray-900 px-4 py-6 sm:px-6">
                          <div className="flex items-center justify-between">
                            <Dialog.Title className="text-base font-semibold leading-6 text-white">
                              Add Category
                            </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="relative rounded-md bg-white text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                onClick={() => setOpen(false)}
                              >
                                <span className="absolute -inset-2.5" />
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="h-6 w-6 text-gray-900"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="divide-y divide-gray-200 px-4 sm:px-6">
                            <div className="space-y-6 pb-5 pt-6">
                              <div>
                                <input
                                  type="text"
                                  placeholder="Enter Category"
                                  className="rounded-lg sm:text-sm shadow border border-gray-400 sm:max-w-sm w-full max-w-full"
                                />
                              </div>
                              <div className="flex flex-col gap-y-2">
                                <label className="sm:text-sm whitespace-nowrap">
                                  Upload Image
                                </label>
                                <input
                                  type="file"
                                  placeholder="upload image"
                                  className="rounded-lg sm:text-sm shadow border border-gray-400 sm:max-w-sm w-full max-w-full p-2"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-shrink-0 justify-end px-4 py-4">
                        {/* <button
                          type="button"
                          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button> */}
                        <button
                          type="submit"
                          className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
export default Category;
