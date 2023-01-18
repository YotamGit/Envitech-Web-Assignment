import "./App.css";
import "../src/components/MenuButton";
import "../src/components/OptionButton";

import { useState, useEffect } from "react";
import MenuButton from "../src/components/MenuButton";
import OptionButton from "../src/components/OptionButton";
import MonitorLegend from "./components/MonitorLegend";

function App() {
  const [data, setData] = useState({});
  const [selectedMonitorType, setSelectedMonitorType] = useState();
  const [legendProps, setLegendProps] = useState({
    monitorName: undefined,
    tags: undefined,
  });
  const [showLegend, setShowLegend] = useState(false);

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

  const toggleLegend = (open) => {
    setShowLegend(open);
  };

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
          return (
            <OptionButton
              key={monitor.Id}
              onClick={() => {
                let legendId = data.MonitorType.find(
                  (type) => type.Id === monitor.MonitorTypeId
                ).LegendId;

                setLegendProps({
                  monitorName: monitor.Name,
                  tags: data.Legends.find((legend) => legend.Id === legendId)
                    .tags,
                });

                toggleLegend(true);
              }}
              text={monitor.Name}
            />
          );
        })}
      </div>
      {showLegend && (
        <MonitorLegend
          legendProps={{ ...legendProps, toggleLegend: toggleLegend }}
        />
      )}
    </div>
  );
}

export default App;
