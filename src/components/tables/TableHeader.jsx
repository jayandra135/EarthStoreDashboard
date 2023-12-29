import React from "react";
import { Link } from "react-router-dom";
export const user_columns = ({ onDeleteOpen }) => [
  {
    Header: "FirstName",
    accessor: "firstName",
  },
  {
    Header: "LastName",
    accessor: "lastName",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  // {
  //   Header: "Avatar",
  //   accessor: "avatar",
  // },
  {
    Header: "Contact",
    accessor: "contact",
  },
  {
    Header: "DOB",
    accessor: "dob",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: (cell) => {
      const cellID = cell.row.original._id;
      return (
        <>
          <Link
            // onClick={() => handleDrawer("edit", cellId, cell.row.original)}
            className="inline-flex px-2 ml-3 text-xs leading-5 rounded-full text-cyan-600 bg-cyan-100"
          >
            <button
              className="text-cyan-900 "
              size="default"
              variant="outlined"
            >
              Edit<span className="sr-only">, </span>
            </button>
          </Link>

          <span className="inline-flex px-2 ml-3 text-xs leading-5 text-red-600 bg-red-100 rounded-full">
            <button
              onClick={() => {
                onDeleteOpen(cellID);
              }}
              size="default"
              variant="outlined"
            >
              Delete
              <span className="sr-only">, </span>
            </button>
          </span>
        </>
      );
    },
  },
];

export const category_columns = ({ onDeleteOpen, imageUrl }) => [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Image",
    accessor: "image",
    Cell: (cell) => {
      const image = cell.row.original.image;

      return (
        <>
          <img
            src={`${imageUrl}/${image}`}
            alt="category image"
            className="w-[50px] h-auto"
          />
        </>
      );
    },
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: (cell) => {
      const cellID = cell.row.original._id;

      return (
        <>
          <Link
            // onClick={() => handleDrawer("edit", cellId, cell.row.original)}
            className="inline-flex px-2 ml-3 text-xs leading-5 rounded-full text-cyan-600 bg-cyan-100"
          >
            <button
              className="text-cyan-900 "
              size="default"
              variant="outlined"
            >
              Edit<span className="sr-only">, </span>
            </button>
          </Link>
          <span className="inline-flex px-2 ml-3 text-xs leading-5 text-red-600 bg-red-100 rounded-full">
            <button
              onClick={() => {
                onDeleteOpen(cellID);
              }}
              size="default"
              variant="outlined"
            >
              Delete
              <span className="sr-only">, </span>
            </button>
          </span>
        </>
      );
    },
  },
];

export const subcategory_columns = ({ onDeleteOpen, imageUrl }) => [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Category",
    accessor: "categories.name",
  },
  {
    Header: "Image",
    accessor: "image",
    Cell: (cell) => {
      const image = cell.row.original.image;

      return (
        <>
          <img
            src={`${imageUrl}/${image}`}
            alt="category image"
            className="w-[50px] h-auto"
          />
        </>
      );
    },
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: (cell) => {
      const cellID = cell.row.original._id;
      return (
        <>
          <Link
            // onClick={() => handleDrawer("edit", cellId, cell.row.original)}
            className="inline-flex px-2 ml-3 text-xs leading-5 rounded-full text-cyan-600 bg-cyan-100"
          >
            <button
              className="text-cyan-900 "
              size="default"
              variant="outlined"
            >
              Edit<span className="sr-only">, </span>
            </button>
          </Link>
          <span className="inline-flex px-2 ml-3 text-xs leading-5 text-red-600 bg-red-100 rounded-full">
            <button
              onClick={() => {
                onDeleteOpen(cellID);
              }}
              size="default"
              variant="outlined"
            >
              Delete
              <span className="sr-only">, </span>
            </button>
          </span>
        </>
      );
    },
  },
];

export const product_colums = ({ onDeleteOpen }) => [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Category",
    accessor: "categories.name",
  },
  {
    Header: "SubCategory",
    accessor: "subcategories.name",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: (cell) => {
      const cellID = cell.row.original._id;
      return (
        <>
          <Link
            // onClick={() => handleDrawer("edit", cellId, cell.row.original)}
            className="inline-flex px-2 ml-3 text-xs leading-5 rounded-full text-cyan-600 bg-cyan-100"
          >
            <button
              className="text-cyan-900 "
              size="default"
              variant="outlined"
            >
              Edit<span className="sr-only">, </span>
            </button>
          </Link>
          <span className="inline-flex px-2 ml-3 text-xs leading-5 text-red-600 bg-red-100 rounded-full">
            <button
              onClick={() => {
                onDeleteOpen(cellID);
              }}
              size="default"
              variant="outlined"
            >
              Delete
              <span className="sr-only">, </span>
            </button>
          </span>
        </>
      );
    },
  },
];
