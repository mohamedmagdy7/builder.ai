const Step5 = ({ onStepChange, setValues, values }) => {
  return (
    <div>
      <div
        style={{
          color: "#2576b3",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2>
          What features do you consider essential for the initial release of
          your product (MVP)?
        </h2>
      </div>
      <div className="options-container">
        <div className="input-container">
          <textarea
            placeholder="Please list the essential features"
            onChange={(e) => {
              setValues({
                ...values,
                features: e.target.value,
              });
            }}
          />
          <span onClick={onStepChange}>Next</span>
        </div>
      </div>
    </div>
  );
};

export default Step5;
