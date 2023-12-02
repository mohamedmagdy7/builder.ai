const Step3 = ({ onStepChange, setValues, values }) => {
  return (
    <div>
      <div
        style={{
          color: "#2576b3",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2>Is it in existence or is it a new product?</h2>
      </div>
      <div className="options-container">
        <div style={{ display: "flex", gap: 60 }}>
          {["Existent Live Product", "New Product"].map((option) => (
            <div
              className="option bigger-option"
              onClick={() => {
                setValues({
                  ...values,
                  "Is it in existence or is it a new product?": option,
                });
                onStepChange();
              }}
              key={option}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step3;
