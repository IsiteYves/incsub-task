import React, { useState } from "react";

const Content = () => {
  const [stepNumber, setStepNumber] = useState(1),
    [isSubmitDisabled, setIsSubmitDisabled] = useState(true),
    [formData, setFormData] = useState({
      names: "",
      email: "",
      "user-type": "",
      password: "",
    }),
    [formError, setFormError] = useState({ concernedField: "", message: "" }),
    handleDataChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      if (value === "") {
        setFormError({
          concernedField: name,
          message: `${name} can not be empty`,
        });
      } else {
        console.log(formError.concernedField === name, formData["user-type"]);
        if (formError.concernedField === name) {
          setFormError({
            concernedField: "",
            message: "",
          });
        }
        if (name === "email") {
          if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            setFormError({
              concernedField: "email",
              message: "Please enter a valid email address",
            });
          } else {
            if (formData.names === "") {
              setFormError({
                concernedField: "names",
                message: "Name can not be empty",
              });
              return;
            }
            if (formData["user-type"] === "") {
              setFormError({
                concernedField: "user-type",
                message: "User type can not be empty",
              });
              return;
            }
            if (formData.password.length < 8) {
              setFormError({
                concernedField: "password",
                message: "Minimum 8 characters",
              });
              return;
            }
            setFormError({
              concernedField: "",
              message: "",
            });
          }
        } else if (name === "password") {
          if (value.length < 8) {
            setFormError({
              concernedField: "password",
              message: "Minimum 8 characters",
            });
          } else {
            if (formData.names === "") {
              setFormError({
                concernedField: "names",
                message: "Name can not be empty",
              });
              return;
            }
            if (
              !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                formData.email
              )
            ) {
              setFormError({
                concernedField: "email",
                message: "Please enter a valid email address",
              });
              return;
            }
            if (formData["user-type"] === "") {
              setFormError({
                concernedField: "user-type",
                message: "User type can not be empty",
              });
              return;
            }
            setFormError({
              concernedField: "",
              message: "",
            });
          }
        } else {
          if (formData.names === "") {
            setFormError({
              concernedField: "names",
              message: "Name can not be empty",
            });
            return;
          }
          if (
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
              formData.email
            )
          ) {
            setFormError({
              concernedField: "email",
              message: "Please enter a valid email address",
            });
            return;
          }
          if (formData.password.length < 8) {
            setFormError({
              concernedField: "password",
              message: "Minimum 8 characters",
            });
            return;
          }
          setFormError({
            concernedField: "",
            message: "",
          });
        }
      }
      if (
        formData.names &&
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email) &&
        formData["user-type"] &&
        formData.password.length >= 8
      ) {
        setIsSubmitDisabled(false);
        return;
      }
      setIsSubmitDisabled(true);
    };
  return (
    <div className="Form-content">
      <div className="form-content-header flex">
        <div className="flex widthfit-content">
          <span>Step {stepNumber} of 3</span>
          <div className="tab-shower flex">
            <div className="reached"></div>
            <div className={stepNumber > 1 ? "reached" : ""}></div>
            <div className={stepNumber > 2 ? "reached" : ""}></div>
          </div>
        </div>
      </div>
      <form action="#" method="POST" className="flex flex-col">
        <h2>Let's set up your account</h2>
        <p>
          Already have an account? <a href="#">Sign in</a>
        </p>
        <fieldset
          className={formError.concernedField === "names" ? "error-div" : ""}
        >
          <input
            type="text"
            name="names"
            id="names"
            required
            onChange={handleDataChange}
          />
          <legend>
            <label htmlFor="names">Your name</label>
          </legend>
        </fieldset>
        {formError.concernedField === "names" ? (
          <span className="form-error">{formError.message}</span>
        ) : (
          ""
        )}
        <fieldset
          className={formError.concernedField === "email" ? "error-div" : ""}
        >
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={handleDataChange}
          />
          <legend>
            <label htmlFor="email">Email address</label>
          </legend>
        </fieldset>
        {formError.concernedField === "email" ? (
          <span className="form-error">{formError.message}</span>
        ) : (
          ""
        )}
        <select
          name="user-type"
          defaultValue=""
          onChange={handleDataChange}
          className={
            formError.concernedField === "user-type" ? "error-div" : ""
          }
        >
          <option value="">I would describe my user type as</option>
          <option value="1">Developer</option>
          <option value="2">Product Designer</option>
          <option value="3">Assistant</option>
          <option value="4">Secretary</option>
        </select>
        {formError.concernedField === "user-type" ? (
          <span className="form-error">{formError.message}</span>
        ) : (
          ""
        )}
        <fieldset
          className={formError.concernedField === "password" ? "error-div" : ""}
        >
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={handleDataChange}
          />
          <legend>
            <label htmlFor="password">Password</label>
          </legend>
        </fieldset>
        <span
          id="validator-hint"
          style={{
            color: formError.concernedField === "password" ? "red" : "#8E8E8E",
          }}
        >
          Minimum 8 characters
        </span>
        <button
          className={isSubmitDisabled ? "submit-disabled" : "submit-enabled"}
          disabled={isSubmitDisabled}
        >
          Next
        </button>
        <p>
          By clicking the "Next" button, you agree to creating a free account,
          and to <a href="#">Terms of Service</a> and{" "}
          <a href="#">Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
};

export default Content;
