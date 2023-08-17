import React, { useState } from "react";
import classes from "./Form.module.css";
import ErrorModal from "./ErrorModal";

const initialState={  "current-savings": "",
"yearly-contribution": "",
"expected-return": "",
duration: "",};

const Form = (props) => {
  const [error, setError] = useState(true);

  const [userInput, setUserInput] = useState(initialState);

  const getInputValue = (input, value) => {
    setUserInput((prevState) => {
      return { ...prevState, [input]:+ value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      userInput["current-savings"] < 1 ||
      userInput["yearly-contribution"] < 1 ||
      userInput["expected-return"] < 1 ||
      userInput.duration < 1
    ) {
      setError(false);
    } else {
      let data = {
        "current-savings": userInput["current-savings"],
        "yearly-contribution": userInput["yearly-contribution"],
        "expected-return": userInput["expected-return"],
        duration: userInput.duration,
      };
      props.onSaveData(data);
      setError(true);
    }
  };

  const resetHandler = () => {
    setUserInput(initialState);
  };

  

  const exitError=()=>setError(true);

  return (
    <div>
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            onChange={(e) => getInputValue("current-savings", e.target.value)}
            value={userInput["current-savings"]}
            id="current-savings"
            required
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            onChange={(e) =>
              getInputValue("yearly-contribution", e.target.value)
            }
            value={userInput["yearly-contribution"]}
            id="yearly-contribution"
            required
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            onChange={(e) => getInputValue("expected-return", e.target.value)}
            value={userInput["expected-return"]}
            id="expected-return"
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            onChange={(e) => getInputValue("duration", e.target.value)}
            value={userInput.duration}
            id="duration"
            required
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          onClick={resetHandler}
          className={classes.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
    {!error && <ErrorModal  closeError={exitError}/>}
    
    </div>
  );
};

export default Form;
