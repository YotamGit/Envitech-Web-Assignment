import "./App.css";
import "../src/components/MenuButton";

import { useState, useEffect } from "react";
import MenuButton from "../src/components/MenuButton";

function App() {
  const [data, setData] = useState([]);

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

  return (
    <div>
      <div className="monitor-types-container">
        {data.MonitorType?.map((type) => (
          <MenuButton key={type.Id} onclick={null} text={type.Name} />
        ))}
      </div>
    </div>
  );
}

export default App;
