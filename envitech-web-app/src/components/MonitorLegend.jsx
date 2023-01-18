const MonitorLegend = ({
  legendProps: { monitorName, tags, toggleLegend },
}) => {
  return (
    <div className="MonitorLegend">
      <div>{monitorName}</div>
      <div>
        {tags.map((tag) => (
          <div key={tag.Label}>
            <span
              style={{
                backgroundColor: tag.Color,
                display: "inline-block",
                height: "1rem",
                width: "1rem",
              }}
            ></span>
            <span>{tag.Label}</span>
          </div>
        ))}
      </div>
      <button onClick={() => toggleLegend(false)}>close</button>
    </div>
  );
};

export default MonitorLegend;
