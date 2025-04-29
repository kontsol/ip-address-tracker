import React from "react";

const InfoCard = ({ ipData }) => {
  if (!ipData) return null;

  const infoItems = [
    {
      label: "IP Address",
      value: ipData.ip,
      padding: "md:pr-4",
      border: "md:border-r-1",
    },
    {
      label: "Location",
      value: `${ipData.location.city}, ${ipData.location.region} ${ipData.location.postalCode}`,
      padding: "md:pr-4",
      border: "md:border-r-1",
    },
    {
      label: "Timezone",
      value: `UTC ${ipData.location.timezone}`,
      padding: "md:pr-4",
      border: "md:border-r-1",
    },
    {
      label: "ISP",
      value: ipData.isp,
      padding: "",
    },
  ];

  return (
    <div className=" bg-white py-1 md:py-3 md:px-4 max-w-[1200px] w-full rounded-2xl shadow-4xl absolute z-100  -top-12 flex flex-col  md:flex-row left-1/2 -translate-x-1/2">
      {infoItems.map((item, index) => (
        <div
          key={index}
          className={`flex-1 text-center md:text-start ${item.padding} `}
        >
          <label className="text-[0.5rem] font-semibold text-gray-600 uppercase tracking-widest">
            {item.label}
          </label>
          <p
            className={`text-xs font-semibold mt-1 h-6 md:h-12 border-gray-300 ${item.border}`}
          >
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
