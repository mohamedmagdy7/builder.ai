import "./Stepper.css";

const Stepper = ({ steps, currentStep }) => {
  return (
    <ol className="stepper">
      {steps.map((step) => (
        <li className={`${currentStep === step && "active"}`} key={step}></li>
      ))}
    </ol>
  );
};

export default Stepper;
