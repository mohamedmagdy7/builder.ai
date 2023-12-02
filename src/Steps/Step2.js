import { useState } from "react";

const Step2 = ({ onStepChange, setValues, values }) => {
  const [otherOption, setOtherOption] = useState(false);

  return (
    <div>
      <div
        style={{
          color: "#2576b3",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2>What is the primary focus or theme of your idea?</h2>
      </div>
      <div className="options-container">
        {[
          "Schedule appointment",
          "Selling products",
          "Nutrition planning, tracking meals and calories",
          "Mental well-being",
        ].map((option) => (
          <div
            className="option"
            onClick={() => {
              setValues({
                ...values,
                focus: option,
              });
              onStepChange();
            }}
            key={option}
          >
            {option}
          </div>
        ))}
        <div
          className={`option ${otherOption && "option-selected"}`}
          onClick={() => {
            setOtherOption(true);
          }}
        >
          Other
        </div>
        {otherOption && (
          <div className="input-container">
            <input
              type="text"
              placeholder="Please enter the primary focus or theme of your idea"
              onChange={(e) => {
                setValues({
                  ...values,
                  focus: e.target.value,
                });
              }}
            />
            <span onClick={onStepChange}>Next</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Step2;
