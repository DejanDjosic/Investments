import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ResultTable from "./components/ResultTable";

function App() {
  const [yearlyDataArray, setYearlyDataArray] = useState([]);

  let content = <p>No investment calculated yet.</p>;

  const calculateHandler = (userInput) => {
    const yearlyData = [];
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    const initialSavings = currentSavings;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        initialSavings: initialSavings,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setYearlyDataArray(yearlyData);
  };

  return (
    <div>
      <Header />
      <Form onSaveData={calculateHandler} />
      {yearlyDataArray.length > 0
        ? (content = <ResultTable results={yearlyDataArray} />)
        : content}
    </div>
  );
}

export default App;
