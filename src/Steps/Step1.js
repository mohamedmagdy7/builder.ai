import { useState } from "react";

const Step1 = ({ onStepChange, setValues, values }) => {
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
        <h2>What is your category of business idea?</h2>
      </div>
      <div className="options-container">
        {[
          "Health and Fitness",
          "Educational",
          "Food",
          "Navigation",
          "Entertainment",
          "Medical",
          "Business",
          "Shopping",
          "Finance",
        ].map((option) => (
          <div
            className="option"
            onClick={() => {
              setValues({
                ...values,
                "What is your category of business idea?": option,
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
              placeholder="Please enter your business idea category"
              onChange={(e) => {
                setValues({
                  ...values,
                  "What is your category of business idea?": e.target.value,
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

export default Step1;
