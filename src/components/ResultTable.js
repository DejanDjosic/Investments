import React from "react";
import classes from "./ResultTable.module.css";

const ResultTable = (props) => {
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
   

  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
          
        </tr>
      </thead>
      <tbody>
        {props.results.map((result) => {
          
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.savingsEndOfYear)}</td>
              <td>{formatter.format(result.yearlyInterest)}</td>
              <td>
                {formatter.format(result.savingsEndOfYear -
                  result.initialSavings -
                  result.yearlyContribution * result.year)}
              </td>
              <td>{result.initialSavings +result.yearlyContribution * result.year}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultTable;
