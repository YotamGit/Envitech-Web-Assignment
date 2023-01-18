import "./App.css";
import "../src/components/MenuButton";
import "../src/components/OptionButton";

import { useState, useEffect } from "react";
import MenuButton from "../src/components/MenuButton";
import OptionButton from "../src/components/OptionButton";

function App() {
  const [data, setData] = useState({});
  const [selectedMonitorType, setSelectedMonitorType] = useState();

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
          <MenuButton
            key={type.Id}
            onClick={() => setSelectedMonitorType(type.Id)}
            text={type.Name}
          />
        ))}
      </div>
      <div className="monitor-list">
        {data.Monitor?.filter(
          (monitor) => monitor.MonitorTypeId === selectedMonitorType
        ).map((monitor) => {
          console.log(monitor);
          return (
            <OptionButton key={monitor.Id} onClick={null} text={monitor.Name} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
