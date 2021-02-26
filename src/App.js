import React, { useEffect, useState } from "react";

function App() {
  const [image, setImage] = useState("");

  //traer data de una API
  async function fetchData() {
    const getData = await fetch("https://api.thecatapi.com/v1/images/search");
    const getJson = await getData.json();
    //llaman al useState aqui
    console.log(getJson);
    setImage(getJson[0].url);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <img src={image} alt="gatito random" width="400" />
    </>
  );
}

export default App;
