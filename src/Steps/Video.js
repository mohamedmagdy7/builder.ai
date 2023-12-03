const Video = ({ aiResponse }) => {
  return (
    <div>
      <div
        style={{
          color: "#2576b3",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#003366" }}>
          Thank you for sharing your business idea
        </h1>
        <p
          style={{
            color: "#828282",
            fontWeight: "700",
            fontSize: "18px",
          }}
        >
          We're eager to assist in turning your concept into reality
        </p>
        <p style={{ color: "#828282", fontSize: "24px", marginTop: "3rem" }}>
          {aiResponse?.response}
        </p>
        <p style={{ color: "#828282", fontSize: "24px" }}></p>
        <a
          href={aiResponse?.video}
          target="_blank"
          rel="noreferrer"
          className="button-link"
        >
          Watch our Demo Video
        </a>
      </div>
    </div>
  );
};

export default Video;
