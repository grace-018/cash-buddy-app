import React from "react";
import FormatAmtWithCommas from "../format/FormatAmtWithCommas";

const IncomeTable = ({ info, totalInc }) => {
  //   filter Amt so only categories can be shown
  const filterAmt = info.filter((item) => item.amount !== 0);

  //   sort data base on decreasing order of the amount
  const sortedInc = filterAmt.sort((a, b) => b.amount - a.amount);

  // calculate the Percentage
  const calculatePercentage = (amount, total) => {
    return ((amount / total) * 100).toFixed(2);
  };

  return (
    <table className="table table-striped table-hover align-middle">
      <thead>
        <tr>
          <th className="text-start">Category</th>
          <th className="text-center">%</th>
          <th className="text-center">Amount</th>
        </tr>
      </thead>
      <tbody>
        {sortedInc.map((item) => {
          const percentage = calculatePercentage(item.amount, totalInc);
          return (
            <tr key={item.id}>
              <td>
                <img src={item.imageLink} alt={item.category} />
                <span>{item.category}</span>
              </td>
              <td className="text-center">{percentage}</td>
              <td className="text-center text-wrap text-break">
                <FormatAmtWithCommas number={item.amount} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default IncomeTable;
