import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?result=1")
      .then(res => res.json())
      .then(json => setUser(json))
      .catch(error => console.log('error result randomuser api', error))
  };

  useEffect(() => {
      fetchData();
  }, []);

  const userData = !!Object.keys(user).length ? user.results[0] : null;

  const content = userData ? (
    <div style={{ padding: "40px" }}>
      <h1>Customer data</h1>
      <h2>Name: {userData.name.first}</h2>
      <img src={userData.picture.large} alt={userData.name.first} />
    </div>
  ) : (
    <h1>Data pending...</h1>
  );

  return content;
}

export default App;
