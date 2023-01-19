import "./App.css";
import "../src/components/MenuButton";
import "../src/components/OptionButton";

import { useState } from "react";
import MenuButton from "../src/components/MenuButton";
import OptionButton from "../src/components/OptionButton";
import MonitorLegend from "./components/MonitorLegend";
import FileInput from "./components/FileInput";

function App() {
  const [data, setData] = useState();
  const [selectedMonitorType, setSelectedMonitorType] = useState();
  const [legendProps, setLegendProps] = useState({
    monitorName: undefined,
    tags: undefined,
  });
  const [showLegend, setShowLegend] = useState(false);

  const getData = async () => {
    let data = await fetch("/Legends.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    setData(await data.json());
  };

  const toggleLegend = (open) => {
    setShowLegend(open);
  };

  return (
    <div className="envitech-web-app">
      {data ? (
        <div className="monitor-types-container">
          {data?.MonitorType?.map((type) => (
            <div
              key={`monitor-type-${type.Id}`}
              style={{ display: "contents" }}
            >
              <MenuButton
                onClick={() =>
                  setSelectedMonitorType(
                    selectedMonitorType === type.Id ? undefined : type.Id
                  )
                }
                text={type.Name}
              />
              <div
                className={`monitor-list${
                  type.Id === selectedMonitorType ? " expanded" : ""
                }`}
              >
                {data?.Monitor?.filter(
                  (monitor) => monitor.MonitorTypeId === type.Id
                ).map((monitor) => (
                  <OptionButton
                    key={`monitor-${monitor.MonitorTypeId}-${monitor.Id}`}
                    onClick={() => {
                      let legendId = data.MonitorType.find(
                        (type) => type.Id === monitor.MonitorTypeId
                      ).LegendId;

                      setLegendProps({
                        monitorName: monitor.Name,
                        tags: data?.Legends.find(
                          (legend) => legend.Id === legendId
                        ).tags,
                      });

                      toggleLegend(true);
                    }}
                    text={monitor.Name}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="data-input-selector">
          <div className="title">Select Data</div>
          <FileInput setData={setData} />
          <button className="default-data-button" onClick={getData}>
            Use Default Data
          </button>
        </div>
      )}

      {showLegend && (
        <MonitorLegend
          legendProps={{ ...legendProps, toggleLegend: toggleLegend }}
        />
      )}
    </div>
  );
}

export default App;
