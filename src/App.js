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

  const steps = [0, 1, 2, 3, 4, 5, 6, 7];

  const handleStepChange = async (step) => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    setOpacity(0.2);
    await delay(500);
    setCurrentStep(step);
    setOpacity(1);
  };

  return (
    <div className="App">
      <div className="builder-container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "50%" }}>
            <Stepper steps={steps} currentStep={currentStep} />
          </div>
        </div>
        <div style={{ opacity: opacity }} className="steps-container">
          {currentStep === 0 && (
            <Step0
              values={values}
              setValues={setValues}
              onStepChange={() => {
                handleStepChange(1);
              }}
            />
          )}
          {currentStep === 1 && (
            <Step1
              values={values}
              setValues={setValues}
              onStepChange={() => {
                handleStepChange(2);
              }}
            />
          )}
          {currentStep === 2 && (
            <Step2
              values={values}
              setValues={setValues}
              onStepChange={() => {
                handleStepChange(3);
              }}
            />
          )}
          {currentStep === 3 && (
            <Step3
              values={values}
              setValues={setValues}
              onStepChange={() => {
                handleStepChange(4);
              }}
            />
          )}
          {currentStep === 4 && (
            <Step4
              values={values}
              setValues={setValues}
              onStepChange={() => {
                handleStepChange(5);
              }}
            />
          )}
          {currentStep === 5 && (
            <Step5
              values={values}
              setValues={setValues}
              onStepChange={() => {
                handleStepChange(6);
              }}
            />
          )}
          {currentStep === 6 && (
            <Step6
              values={values}
              setValues={setValues}
              onStepChange={() => {
                console.log(values);
                handleStepChange(7);
              }}
            />
          )}
          {currentStep === 7 && <Video />}
        </div>
      </div>
    </div>
  );
}

export default App;
