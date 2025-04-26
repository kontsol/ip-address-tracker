import React from "react";

const InfoCard = ({ ipData }) => {
  if (!ipData)
    return (
      <div className="text-center mt-10">
        <p className="text-gray-500">
          Enter an IP Address to see the information
        </p>
      </div>
    );

  return (
    <div>
      <h2>IP Address: {ipData.ip}</h2>
      <p>
        Location: {ipData.location.city}, {ipData.location.country}
      </p>
    </div>
  );
};

export default InfoCard;
