import React from "react";
import { AppProvider } from "../../context/AppContext";
import Budget from "../Budget";
import Remaing from "../Remaing";
import ExpensesTotal from "../ExpensesTotal";
import ExpensesList from "../ExpensesList";
import AddExpense from "../AddExpense";

const HomePage = () => {
  return (
    <AppProvider>
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <h1 className="mt-3">My budget Planner</h1>
          {/* <a to="/debts" style={{ fontSize: "20px" }}>
        Debts
      </a> */}
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaing />
          </div>
          <div className="col-sm">
            <ExpensesTotal />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <ExpensesList />
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="mt-3">
          <div className="col-sm">
            <AddExpense />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default HomePage;
