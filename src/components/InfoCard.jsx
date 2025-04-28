import React from "react";

const InfoCard = ({ ipData }) => {
  if (!ipData) return null;

  const infoItems = [
    {
      label: "IP Address",
      value: ipData.ip,
      padding: "pr-4",
      border: "border-r-1",
    },
    {
      label: "Location",
      value: `${ipData.location.city}, ${ipData.location.region} ${ipData.location.postalCode}`,
      padding: "pr-4",
      border: "border-r-1",
    },
    {
      label: "Timezone",
      value: `UTC ${ipData.location.timezone}`,
      padding: "pr-4",
      border: "border-r-1",
    },
    {
      label: "ISP",
      value: ipData.isp,
      padding: "",
    },
  ];

  return (
    <div className="bg-white py-4 px-4 rounded-2xl shadow-4xl absolute z-100 -top-20 flex flex-col md:flex-row">
      {infoItems.map((item, index) => (
        <div key={index} className={`w-full py-2 md:py-0 ${item.padding}`}>
          <label className="text-[0.5rem] font-semibold text-gray-600 uppercase tracking-widest">
            {item.label}
          </label>
          <p
            className={`w-[10rem] md:w-full text-[0.7rem] md:text-xs font-bold mt-1 h-8 md:h-12 border-gray-300 ${item.border}`}
          >
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
