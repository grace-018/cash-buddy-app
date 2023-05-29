import React, { useContext } from "react";
import ScrollToTop from "../buttons/ScrollToTop";
import TransactionContext from "../../context/TransactionContext";
import IncomeForm from "./IncomeForm";
import IncomeTable from "./IncomeTable";
import FormatAmtWithCommas from "../format/FormatAmtWithCommas";
import Footer from "../footer/Footer";

function IncomePage() {
  const contextData = useContext(TransactionContext);

  return (
    <div>
      <h2 className="h2 text-center">Income Transactions</h2>
      <h5 className="h5">
        Total Income: ₱ <FormatAmtWithCommas number={contextData.totalIncome} />
      </h5>
      <IncomeForm
        data={contextData.incData}
        updateIncData={contextData.updateIncData}
      />
      <IncomeTable
        info={contextData.incData}
        totalInc={contextData.totalIncome}
      />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default IncomePage;
