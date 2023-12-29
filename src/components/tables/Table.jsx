import React from "react";
import { useTable } from "react-table";
const Table = ({ columns, data, table_id, printRef, zoom }) => {
  const { headerGroups, getTableProps, getTableBodyProps, prepareRow, rows } =
    useTable({
      columns,
      data,
    });

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div
          id={table_id}
          ref={printRef}
          className={`mt-8  flex flex-col ${zoom ? zoom : ""}`}
        >
          <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block max-w-full sm:px-6 lg:px-8 ">
              <div className="shadow overflow-hidden border border-gray-200 inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 ">
                <table
                  {...getTableProps()}
                  className="min-w-full divide-y divide-gray-200 text-center "
                >
                  <thead className="bg-gray-50">
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <th
                            scope="col"
                            className="group px-5 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                            {...column.getHeaderProps()}
                          >
                            <div className="flex items-center justify-between text-center ">
                              {column.render("Header")}
                            </div>
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody
                    {...getTableBodyProps()}
                    className="bg-white divide-y divide-gray-200 text-center"
                  >
                    {rows.map((row, i) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                            return (
                              <td
                                {...cell.getCellProps()}
                                className={`px-6 py-4 whitespace-nowrap text-left `}
                                role="cell"
                              >
                                {
                                  <div className="text-sm text-gray-500">
                                    {cell.render("Cell")}
                                  </div>
                                }
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
