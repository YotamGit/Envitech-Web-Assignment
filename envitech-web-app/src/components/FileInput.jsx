const FileInput = ({ setData }) => {
  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setData(JSON.parse(e.target.result));
    };
  };

  return (
    <div>
      <label htmlFor="upload-file">Use File As Input</label>
      <input
        style={{
          position: "absolute",
          zIndex: "-1",
          opacity: 0,
          width: "0px",
          height: "0px",
        }}
        id="upload-file"
        type="file"
        onChange={handleChange}
      />
    </div>
  );
};

export default FileInput;
