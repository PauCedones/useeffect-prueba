import React, { useEffect, useState } from "react";

//FORMA LLAMANDO TODO EL OBJETO
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
      <img src={data.avatar_url} />
    </>
  );
}

export default App;
