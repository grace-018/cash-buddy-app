import TransactionContext from "./TransactionContext";
import incomeData from "../components/income/incomeData";
import expenseData from "../components/expense/expenseData";
import { useState, useEffect } from "react";

const TransactionProvider = ({ children }) => {
  const [expData, setExpData] = useState(() => {
    const savedExpData = window.localStorage.getItem("ExpenseData");
    return savedExpData !== null ? JSON.parse(savedExpData) : expenseData;
  });
  const [incData, setIncData] = useState(() => {
    const savedIncData = window.localStorage.getItem("IncomeData");
    return savedIncData !== null ? JSON.parse(savedIncData) : incomeData;
  });

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  const updateExpData = (updatedExpData) => {
    setExpData(updatedExpData);
  };

  const updateIncData = (updatedIncData) => {
    setIncData(updatedIncData);
  };

  useEffect(() => {
    window.localStorage.setItem("ExpenseData", JSON.stringify(expData));
    const expenditure = expData.reduce(
      (sum, category) => sum + category.amount,
      0
    );
    setTotalExpense(expenditure);
  }, [expData]);

  useEffect(() => {
    window.localStorage.setItem("IncomeData", JSON.stringify(incData));
    const revenue = incData.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
    setTotalIncome(revenue);
  }, [incData]);

  const sharedData = {
    expData: expData,
    incData: incData,
    totalIncome: totalIncome,
    totalExpense: totalExpense,
    updateExpData: updateExpData,
    updateIncData: updateIncData,
  };

  return (
    <TransactionContext.Provider value={sharedData}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
