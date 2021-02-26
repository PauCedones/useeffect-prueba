import React, { useEffect, useState } from "react";

//GUARDANDO SOLO EL STRING A UTILIZAR
//En esta forma de hacerlo guardas
//solo la data en getJson que necesitas

function App() {
  const [login, setLogin] = useState("");
  const [avatar, setAvatar] = useState("");

  //traer data de una API
  async function fetchData() {
    const getData = await fetch("https://api.github.com/users/paucedones");
    const getJson = await getData.json();
    //llaman al useState aqui
    console.log(getJson);
    setLogin(getJson.login);
    setAvatar(getJson.avatar_url);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <p>Login: {login}</p>
      <img src={avatar} width="200" />
    </>
  );
}

export default App;
