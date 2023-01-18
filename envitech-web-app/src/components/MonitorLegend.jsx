import "../styles/MonitorLegend.css";

const MonitorLegend = ({
  legendProps: { monitorName, tags, toggleLegend },
}) => {
  return (
    <div>
      <div className="legend-background" onClick={() => toggleLegend(false)} />
      <div className="monitor-legend">
        <div className="legend-title">{monitorName}</div>
        <div>
          {tags.map((tag) => (
            <div className="legend-property" key={tag.Label}>
              <span
                style={{
                  backgroundColor: tag.Color,
                  display: "inline-block",
                  height: "2rem",
                  width: "2rem",
                }}
              />

              <span className="legend-label">{tag.Label}</span>
            </div>
          ))}
        </div>
        <button
          className="close-legend-button"
          onClick={() => toggleLegend(false)}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default MonitorLegend;
