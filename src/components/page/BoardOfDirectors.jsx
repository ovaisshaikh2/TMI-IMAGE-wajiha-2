import React from "react";

const BoardOfDirectors = () => {
  return (
    <React.Fragment>
      <div className="text-[#737373] xs:my-4 xs:mx-4 lg:my-12 lg:mx-40 xsm:mx-80">
        <h1 className="md:text-3xl xs:text-xl md:mb-10 xs:mb-4 text-black xs:text-center lg:text-left">
          BOARD OF DIRECTORS
        </h1>
        {/* ------------------------------------------------- */}
        <div className="relative overflow-x-auto">
          <table className="w-full xs:text-[10px] lg:text-xs text-left text-gray-500 border-2 border-gray-100">
            <thead className="border-b-2 border-gray-100 bg-gray-50">
              <th className="xs:px-2 lg:px-6 py-3 w-1/3 border-r-2 border-gray-100 font-normal">
                Mr. Asad Ahmad
              </th>
              <th className="xs:px-2 lg:px-6 py-3 w-2/3 font-normal">
                Chief Executive Officer
              </th>
            </thead>
            {/* ----- */}
            <tbody className="">
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
                  Ms. Farnaz Ahmad
                </td>
                <td className="xs:px-2 lg:px-6 py-3">Non Executive Director</td>
              </tr>

              <tr className="border-b-2 border-gray-100 bg-gray-50">
                <td className="xs:px-2 lg:px-6 py-3 font-medium w-1/3 lg:whitespace-nowrap border-r-2 border-gray-100">
                  Mr. Jawed Ahmed Siddiqui
                </td>
                <td className="xs:px-2 lg:px-6 py-3">Executive Director</td>
              </tr>

              <tr className="border-b-2 border-gray-100 bg-white">
                <td className="xs:px-2 lg:px-6 py-3 font-medium w-1/3 lg:whitespace-nowrap border-r-2 border-gray-100">
                  Mr. M. Ziyad A. Syed
                </td>
                <td className="xs:px-2 lg:px-6 py-3">Independent Director</td>
              </tr>

              <tr className="border-b-2 border-gray-100 bg-gray-50">
                <td className="xs:px-2 lg:px-6 py-3 font-medium w-1/3 lg:whitespace-nowrap border-r-2 border-gray-100">
                  S. Hussam Subzwari
                </td>
                <td className="xs:px-2 lg:px-6 py-3">
                  Non Executive Chairman/Independent
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BoardOfDirectors;
