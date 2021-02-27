import React, { useEffect, useState } from "react";
import CatImg from "./components/CatImg";

function App() {
  const [gatitoImg, setGatitoImg] = useState("");

  useEffect(() => {
    fetchGatitos();
  }, []);

  async function fetchGatitos() {
    const data = await fetch("https://api.thecatapi.com/v1/images/search");
    const dataJson = await data.json();

    setGatitoImg(dataJson[0].url);
  }

  return <CatImg url={gatitoImg} />;
}

export default App;
