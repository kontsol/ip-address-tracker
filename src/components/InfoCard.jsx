import React from "react";

const InfoCard = ({ ipData }) => {
  return ipData ? (
    <div className="bg-white p-6 rounded-lg shadow-md absolute z-100 -top-20 flex flex-col md:flex-row">
      <div className="md:w-1/4 py-6 md:py-0">
        <p className="text-xs text-gray-600 uppercase tracking-wide">
          IP Address
        </p>
        <p className="text-base font-bold mt-1">{ipData.ip}</p>
      </div>
      <div className="md:w-1/4 py-6 md:py-0">
        <p className="text-xs text-gray-600 uppercase tracking-wide">
          Location
        </p>
        <p className="text-base font-bold mt-1">
          {ipData.location.city}, {ipData.location.region}{" "}
          {ipData.location.postalCode}
        </p>
      </div>
      <div className="md:w-1/4 py-6 md:py-0">
        <p className="text-xs text-gray-600 uppercase tracking-wide">
          Timezone
        </p>
        <p className="text-base font-bold mt-1">
          UTC {ipData.location.timezone}
        </p>
      </div>
      <div className="md:w-1/4 py-6 md:py-0">
        <p className="text-xs text-gray-600 uppercase tracking-wide">ISP</p>
        <p className="text-base font-bold mt-1">{ipData.isp}</p>
      </div>
    </div>
  ) : null;
};

export default InfoCard;
