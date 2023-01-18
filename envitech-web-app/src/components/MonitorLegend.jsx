const MonitorLegend = ({
  legendProps: { monitorName, tags, toggleLegend },
}) => {
  return (
    <div className="MonitorLegend">
      <div>{monitorName}</div>
      <div>
        {tags.map((tag) => (
          <div key={tag.Label}>{JSON.stringify(tag)}</div>
        ))}
      </div>
      <button onClick={() => toggleLegend(false)}>close</button>
    </div>
  );
};

export default MonitorLegend;
