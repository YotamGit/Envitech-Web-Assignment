import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();

  const getData = async () => {
    return await fetch("/Legends.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  };

  useEffect(() => {
    (async () => {
      const data = await getData();
      setData(await data.json());
    })();
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
