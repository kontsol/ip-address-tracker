import React from "react";

const InfoCard = ({ ipData }) => {
  if (!ipData) return null;

  const infoItems = [
    {
      label: "IP Address",
      value: ipData.ip,
      padding: "md:pr-4",
      border: "border-b-1 md:border-b-0 md:border-r-1",
    },
    {
      label: "Location",
      value: `${ipData.location.city}, ${ipData.location.region} ${ipData.location.postalCode}`,
      padding: "md:pr-4",
      border: "border-b-1 md:border-b-0 md:border-r-1 ",
    },
    {
      label: "Timezone",
      value: `UTC ${ipData.location.timezone}`,
      padding: "md:pr-4",
      border: "border-b-1 md:border-b-0 md:border-r-1",
    },
    {
      label: "Country",
      value: ipData.location.country,
      padding: "",
    },
  ];

  return (
    <div className=" bg-white py-2 md:py-4 md:px-4 max-w-[1200px] w-full rounded-2xl shadow-4xl absolute z-100  -top-17 md:-top-12 flex flex-col md:flex-row gap-2 left-1/2 -translate-x-1/2">
      {infoItems.map((item, index) => (
        <div
          key={index}
          className={`px-6 md:px-0 flex-1 text-center md:text-start ${item.padding} `}
        >
          <label className="block text-[0.5rem] font-semibold text-gray-500 uppercase tracking-widest">
            {item.label}
          </label>
          <p
            className={`text-xs font-semibold md:mt-2 h-8 md:h-10 ${item.border} border-neutral-300 flex flex-col justify-center`}
          >
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
