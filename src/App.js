import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Budget from "./components/Budget";
import Remaing from "./components/Remaing";
import ExpensesTotal from "./components/ExpensesTotal";
import ExpensesList from "./components/ExpensesList";
import AddExpense from "./components/AddExpense";
// import { AppProvider } from "./context/AppContext";
import LoginPage from "./components/pages/LoginPage";
import Layout from "./components/layout/front";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
