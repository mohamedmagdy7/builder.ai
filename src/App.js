import { useState } from "react";

import Stepper from "./Steps/Stepper";
import Step0 from "./Steps/Step0";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
import Step6 from "./Steps/Step6";
import "./App.css";
import Video from "./Steps/Video";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [values, setValues] = useState({});
  const [aiResponse, setAiResponse] = useState({});
  const [userId, setUserId] = useState("");

  const steps = [0, 1, 2, 3, 4, 5, 6];

  const handleStepChange = async (step) => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    setOpacity(0.2);
    await delay(500);
    setCurrentStep(step);
    setOpacity(1);
  };

  const handleSubmitAnswers = async () => {
    // const question = `My business idea category is ${values.category}. My primary focus of my idea is ${values.focus}. Its ${values.isLive}. MY intended audience are ${values.audience}. Features I consider essential for the initial release of my product (MVP) are ${values.features}. My expected duration is ${values.duration}.  Do Trianglz Company have any similar product with the same business concept?
    // `;
    // const response = await fetch(
    //   `http://localhost:3000/api/question?question=${question}`,
    //   {
    //     method: "POST",
    //   }
    // );
    const response = await fetch(
      `http://localhost:3000/api/answer?user_id=${userId}&question_id=6&answer=${values?.duration}`,
      {
        method: "POST",
      }
    );
    const json = await response.json();
    setAiResponse(json);
    await fetch(`http://localhost:3000/api/request_meeting?user_id=${userId}`)
  };

  return (
    <div className="App">
      <div className={`builder-container ${currentStep === 7 && "success"}`}>
        {currentStep !== 7 && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "50%" }}>
              <Stepper steps={steps} currentStep={currentStep} />
            </div>
          </div>
        )}
        <div style={{ opacity: opacity }} className="steps-container">
          {currentStep === 0 && (
            <Step0
              values={values}
              setValues={setValues}
              onStepChange={() => {
                handleStepChange(1);
              }}
              setUserId={setUserId}
            />
          )}
          {currentStep === 1 && (
            <Step1
              values={values}
              setValues={setValues}
              onStepChange={() => {
                handleStepChange(2);
              }}
              userId={userId}
            />
          )}
          {currentStep === 2 && (
            <Step2
              values={values}
              setValues={setValues}
              onStepChange={() => {
                handleStepChange(3);
              }}
              userId={userId}
            />
          )}
          {currentStep === 3 && (
            <Step3
              values={values}
              setValues={setValues}
              onStepChange={() => {
                handleStepChange(4);
              }}
              userId={userId}
            />
          )}
          {currentStep === 4 && (
            <Step4
              values={values}
              setValues={setValues}
              onStepChange={() => {
                handleStepChange(5);
              }}
              userId={userId}
            />
          )}
          {currentStep === 5 && (
            <Step5
              values={values}
              setValues={setValues}
              onStepChange={() => {
                handleStepChange(6);
              }}
              userId={userId}
            />
          )}
          {currentStep === 6 && (
            <Step6
              values={values}
              setValues={setValues}
              onStepChange={() => {
                handleSubmitAnswers();
                handleStepChange(7);
              }}
              userId={userId}
            />
          )}
          {currentStep === 7 && <Video aiResponse={aiResponse} />}
        </div>
      </div>
    </div>
  );
}

export default App;
