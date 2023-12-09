import { useState } from "react";

const Step1 = ({ onStepChange, setValues, values, userId }) => {
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
            onClick={async() => {
              setValues({
                ...values,
                category: option,
              });
              await fetch(
                `http://localhost:3000/api/answer?user_id=${userId}&question_id=${1}&answer=${option}`,
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
                  category: e.target.value,
                });
              }}
            />
            <span onClick={async()=>{
              await fetch(
                `http://localhost:3000/api/answer?user_id=${userId}&question_id=1&answer=${values?.category}`,
                {
                  method: "POST",
                }
              );
              onStepChange()
            }}>Next</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Step1;
