import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});

  //traer data de una API
  async function fetchData() {
    const getData = await fetch("https://api.github.com/users/paucedones");
    const getJson = await getData.json();
    //llaman al useState aqui
    console.log(getJson);
    setData(getJson);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <p>Login: {data.login}</p>
    </>
  );
}

export default App;
