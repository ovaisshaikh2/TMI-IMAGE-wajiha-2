import React from "react";

const ShareRegister = () => {
  return (
    <React.Fragment>
      <div className="text-[#737373] xs:my-4 xs:mx-4 lg:my-12 lg:mx-40 xsm:mx-80">
        <h1 className="md:text-3xl xs:text-xl md:mb-10 xs:mb-4 text-black xs:text-center lg:text-left">
          SHARE REGISTRAR
        </h1>
        {/* ------------------------------------------------- */}
        {/* <div className="relative overflow-x-auto">
          <table className="w-full text-xs text-left text-gray-500 border-2 border-gray-100">
            <thead className="text-gray-700  bg-gray-50">
              <th
                scope="col"
                className="xs:px-2 lg:px-6 py-3 w-1/3 border-r-2 border-gray-100"
              >
                Name
              </th>
              <th scope="col" className="xs:px-2 lg:px-6 py-3 w-2/3">
                Address
              </th>
            </thead>

            <tbody className="bg-white">
              <td className="xs:px-2 lg:px-6 py-4 font-medium w-1/3 lg:whitespace-nowrap border-r-2 border-gray-100">
                Hameed Majeed Associates (Pvt) Ltd
              </td>
              <td className="xs:px-2 lg:px-6 py-4">
                4th Floor, Karachi Chambers, Hasrat Mohani Road, Karachi.
              </td>
            </tbody>
          </table>
        </div> */}
        <div className="mb-4">
          <h6 className="text-xl text-black font-medium">
            Hameed Majeed Associates (Pvt) Ltd
          </h6>
          <p className="text-[14px] text-grey">
            4th Floor, Karachi Chambers, Hasrat Mohani Road, Karachi.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShareRegister;
