import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import InfoCard from "./components/InfoCard";
import axios from "axios";

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [ipData, setIpData] = useState(null);

  const handleSearch = async (ipAddress) => {
    try {
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country,city`,
        {
          params: {
            apiKey: API_KEY,
            ipAddress: ipAddress,
          },
        }
      );
      setIpData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  console.log(ipData);
  return (
    <section className="">
      <Header onSearch={handleSearch} />
      {ipData && <InfoCard ipData={ipData} />}
      <InfoCard />
    </section>
  );
}

export default App;
