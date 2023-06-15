import React from "react";

const Board = () => {
  return (
    <React.Fragment>
      <div className="text-[#737373] xs:my-4 xs:mx-4 lg:my-12 lg:mx-40 xsm:mx-80">
        {/* <h1 className="md:text-3xl xs:text-xl md:mb-10 xs:mb-4 text-black text-center">
          BOARD OF DIRECTORS
        </h1> */}
        {/* ------------------------------------------------- */}
        {/* <div className="relative overflow-x-auto">
          <table className="w-full xs:text-[10px] lg:text-xs text-left text-gray-500 border-2 border-gray-100">
            <thead className="border-b-2 border-gray-100 bg-gray-50">
              <th className="xs:px-2 lg:px-6 py-3 w-1/3 border-r-2 border-gray-100 font-normal">
                S. Hussam Subzwari
              </th>
              <th className="xs:px-2 lg:px-6 py-3 w-2/3 font-normal">
                Non Executive Chairman/Independent Director
              </th>
            </thead>
            <tbody className="">
              <tr className="border-b-2 border-gray-100 bg-white">
                <td className="xs:px-2 lg:px-6 py-3 font-medium w-1/3 lg:whitespace-nowrap border-r-2 border-gray-100">
                  Mr. Asad Ahmad
                </td>
                <td className="xs:px-2 lg:px-6 py-3">Chief Executive</td>
              </tr>

              <tr className="border-b-2 border-gray-100 bg-gray-50">
                <td className="xs:px-2 lg:px-6 py-3 font-medium w-1/3 lg:whitespace-nowrap border-r-2 border-gray-100">
                  Ms. Farnaz Ahmad
                </td>
                <td className="xs:px-2 lg:px-6 py-3">Non Executive Director</td>
              </tr>

              <tr className="border-b-2 border-gray-100 bg-white">
                <td className="xs:px-2 lg:px-6 py-3 font-medium w-1/3 lg:whitespace-nowrap border-r-2 border-gray-100">
                  Ms. Uzma Ahmad
                </td>
                <td className="xs:px-2 lg:px-6 py-3">Executive Director</td>
              </tr>

              <tr className="border-b-2 border-gray-100 bg-gray-50">
                <td className="xs:px-2 lg:px-6 py-3 font-medium w-1/3 lg:whitespace-nowrap border-r-2 border-gray-100">
                  Ms. Marium Ahmad
                </td>
                <td className="xs:px-2 lg:px-6 py-3">Executive Director</td>
              </tr>

              <tr className="border-b-2 border-gray-100 bg-white">
                <td className="xs:px-2 lg:px-6 py-3 font-medium w-1/3 lg:whitespace-nowrap border-r-2 border-gray-100">
                  Mr. Jawed Ahmed Siddiqui
                </td>
                <td className="xs:px-2 lg:px-6 py-3">Executive Director</td>
              </tr>

              <tr className="border-b-2 border-gray-100 bg-gray-50">
                <td className="xs:px-2 lg:px-6 py-3 font-medium w-1/3 lg:whitespace-nowrap border-r-2 border-gray-100">
                  Mr. M. Ziyad A. Syed
                </td>
                <td className="xs:px-2 lg:px-6 py-3">Independent Director</td>
              </tr>
            </tbody>
          </table>
        </div> */}
        {/* ------------------------------ */}
        <h3 className="md:text-2xl xs:text-xl md:mb-10 xs:mb-4 text-black text-left border-b border-b-gray-300 underline-offset-8">
          Board Of Directors
        </h3>

        <div className="grid md:grid-cols-2 gap-7">
          <div>
            {/* 1 */}
            <div className="mb-4">
              <h6 className="text-xl text-[#0284c7] font-medium">
                S. Hussam Subzwari
              </h6>
              <p className="text-[14px] text-[#eab308]">
                Non Executive Chairman/Independent Director
              </p>
            </div>
            <hr />

            {/* 2 */}
            <div className="my-4">
              <h6 className="text-xl text-[#0284c7] font-medium">
                Mr. Asad Ahmad
              </h6>
              <p className="text-[14px] text-[#eab308]">Chief Executive</p>
            </div>
            <hr />

            {/* 3 */}
            <div className="my-4">
              <h6 className="text-xl text-[#0284c7] font-medium">
                Ms. Farnaz Ahmad
              </h6>
              <p className="text-[14px] text-[#eab308]">
                Non Executive Director
              </p>
            </div>
            <hr />

            {/* 4 */}
            <div className="my-4">
              <h6 className="text-xl text-[#0284c7] font-medium">
                Ms. Uzma Ahmad
              </h6>
              <p className="text-[14px] text-[#eab308]">Executive Director</p>
            </div>
            <hr />
          </div>
          {/* ------------- */}
          <div>
            {/* 5 */}
            <div className="mb-4">
              <h6 className="text-xl text-[#0284c7] font-medium">
                Ms. Marium Ahmad
              </h6>
              <p className="text-[14px] text-[#eab308]">Executive Director</p>
            </div>
            <hr />
            {/* 6 */}
            <div className="my-4">
              <h6 className="text-xl text-[#0284c7] font-medium">
                Mr. Jawed Ahmed Siddiqui
              </h6>
              <p className="text-[14px] text-[#eab308]">Executive Director</p>
            </div>
            <hr />
            {/* 7 */}
            <div className="my-4">
              <h6 className="text-xl text-[#0284c7] font-medium">
                Mr. M. Ziyad A. Syed
              </h6>
              <p className="text-[14px] text-[#eab308]">Independent Director</p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Board;
