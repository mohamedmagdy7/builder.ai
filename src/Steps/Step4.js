const Step4 = ({ onStepChange, setValues, values }) => {
  return (
    <div>
      <div
        style={{
          color: "#2576b3",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2>Who is your intended audience?</h2>
      </div>
      <div className="options-container">
        <div className="input-container">
          <textarea
            placeholder="Please describe your target audience"
            onChange={(e) => {
              setValues({
                ...values,
                audience: e.target.value,
              });
            }}
          />
          <span onClick={onStepChange}>Next</span>
        </div>
      </div>
    </div>
  );
};

export default Step4;
