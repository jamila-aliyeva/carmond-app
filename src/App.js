import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaing from "./components/Remaing";
import ExpensesTotal from "./components/ExpensesTotal";
import ExpensesList from "./components/ExpensesList";
import AddExpense from "./components/AddExpense";
import { AppProvider } from "./context/AppContext";

function App() {
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
          {/* <a href="/debts" style={{ fontSize: "20px" }}>
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
}

export default App;
