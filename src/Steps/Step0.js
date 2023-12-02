import { useState } from "react";
import "./Step0.css";
const Step0 = ({ onStepChange }) => {
  const [user, setUser] = useState({});
  const handleSubmit = async () => {
    // const response = await fetch(
    //   `http://localhost:3000/api/user?name=${user.name}&email=${user.email}&phone=${user.phone}&country=${user.country}&title=${user.job_title}`,
    //   {
    //     method: "POST",
    //   }
    // );
    // const customer = await response.json();
    // console.log(customer);
    onStepChange(1);
  };
  return (
    <div>
      <div
        style={{
          color: "#2576b3",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2>Please enter your personal information</h2>
      </div>
      <form id="personalInfoForm">
        <div style={{ display: "flex", gap: 20 }}>
          <div style={{ width: "100%" }}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
            />
          </div>
          <div style={{ width: "100%" }}>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              pattern="[0-9]{10}"
              required
              onChange={(e) => {
                setUser({ ...user, phone: e.target.value });
              }}
            />
          </div>
          <div style={{ width: "100%" }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "2rem" }}>
          <div style={{ width: "100%" }}>
            <label htmlFor="jobTitle">Job Title:</label>
            <select
              id="jobTitle"
              name="jobTitle"
              required
              onChange={(e) => {
                setUser({ ...user, job_title: e.target.value });
              }}
            >
              <option value="entrepreneur">Entrepreneur</option>
              <option value="manager">Manager</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div style={{ width: "100%" }}>
            <label htmlFor="country">Country:</label>
            <select
              id="country"
              name="country"
              required
              onChange={(e) => {
                setUser({ ...user, country: e.target.value });
              }}
            >
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="egypt">Egypt</option>
              <option value="ksa">KSA</option>
              <option value="uae">UAE</option>
              <option value="uk">UK</option>
            </select>
          </div>
          <div style={{ width: "100%" }}></div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "2rem",
          }}
        >
          <button type="button" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step0;
