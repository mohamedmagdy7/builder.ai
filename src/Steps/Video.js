const Video = ({ aiResponse }) => {
  return (
    <div>
      <div
        style={{
          color: "#2576b3",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>{aiResponse?.response}</h2>
        <video width="640" height="360" controls>
          <source src={aiResponse?.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
