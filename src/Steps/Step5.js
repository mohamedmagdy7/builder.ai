const Step5 = ({ onStepChange, setValues, values, userId }) => {
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
          <span onClick={async()=>{
              await fetch(
                `http://localhost:3000/api/answer?user_id=${userId}&question_id=5&answer=${values?.features}`,
                {
                  method: "POST",
                }
              );
              onStepChange()
            }}>Next</span>
        </div>
      </div>
    </div>
  );
};

export default Step5;
