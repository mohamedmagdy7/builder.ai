const Step3 = ({ onStepChange, setValues, values, userId }) => {
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
              onClick={async() => {
                setValues({
                  ...values,
                  isLive: option,
                });
                await fetch(
                  `http://localhost:3000/api/answer?user_id=${userId}&question_id=${3}&answer=${option}`,
                  {
                    method: "POST",
                  }
                );
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
