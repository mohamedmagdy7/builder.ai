const Video = ({ onStepChange, setValues, values }) => {
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
        <h2>We found this video</h2>
        <video width="640" height="360" controls>
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
