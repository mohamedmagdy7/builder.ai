const Step4 = ({ onStepChange, setValues, values, userId }) => {
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
          <span onClick={async()=>{
              await fetch(
                `http://localhost:3000/api/answer?user_id=${userId}&question_id=4&answer=${values?.audience}`,
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

export default Step4;
