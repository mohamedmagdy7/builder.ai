import { useState } from "react";

const Step6 = ({ onStepChange, setValues, values }) => {
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
        <h2>What’s your expected duration of work?</h2>
      </div>
      <div className="options-container">
        {["1-3 Months", "1-6 Months", "Within 12 Months"].map((option) => (
          <div
            className="option"
            key={option}
            onClick={async () => {
              const delay = (ms) =>
                new Promise((resolve) => setTimeout(resolve, ms));
              setValues({
                ...values,
                duration: option,
              });
              await delay(500);
              onStepChange();
            }}
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
              placeholder="Please enter your expected duration of work"
              onChange={(e) => {
                setValues({
                  ...values,
                  duration: e.target.value,
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

export default Step6;
