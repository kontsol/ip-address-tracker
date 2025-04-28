import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import InfoCard from "./components/InfoCard";
import Container from "./components/Container";
import Map from "./components/Map";
import axios from "axios";

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (ipAddress) => {
    setLoading(true);
    setError(null);
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
      setError("Invalid IP Address");
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  console.log(ipData);
  return (
    <section className="min-h-screen">
      <Header onSearch={handleSearch} />
      <Container>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {loading && <p className="text-center">Loading...</p>}
        {!error && <InfoCard ipData={ipData} />}
      </Container>
      {!error && ipData && <Map ipData={ipData} />}
    </section>
  );
}

export default App;
