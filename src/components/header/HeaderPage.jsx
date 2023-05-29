import { useContext } from "react";
import CashBalance from "../../computations/CashBalance";
import styles from "./Header.module.css";
import TransactionContext from "../../context/TransactionContext";
import { Link } from "react-router-dom";
import Report from "../buttons/Report";

function HeaderPage() {
  const contextData = useContext(TransactionContext);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          className={styles.logo}
          src="./assets/cash-buddy-logo.png"
          alt="Cash Buddy"
        />
        <div className={styles.infoContainer}>
          <p className={`${styles.name} text-lg-start`}>Current Balance</p>
          <Link to="/report" className={styles.report}>
            <Report className={styles.reportButton} />
          </Link>
        </div>
        <h1 className={`${styles.balance} text-center text-wrap text-break h1`}>
          <CashBalance
            income={contextData.totalIncome}
            expense={contextData.totalExpense}
          />
        </h1>
      </header>
    </div>
  );
}

export default HeaderPage;
