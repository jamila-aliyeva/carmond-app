import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// import Budget from "./components/Budget";
// import Remaing from "./components/Remaing";
// import ExpensesTotal from "./components/ExpensesTotal";
// import ExpensesList from "./components/ExpensesList";
// import AddExpense from "./components/AddExpense";
// import { AppProvider } from "./context/AppContext";
import LoginPage from "./components/pages/LoginPage";
import Layout from "./components/layout/front";
import HomePage from "./components/pages/HomePage";
import DebtsPage from "./components/pages/DebtsPage";
import DebtPage from "./components/pages/DebtPage";
import { toast } from "react-toastify";
import { useState } from "react";
import { DEBTS } from "./constants";
import { v4 } from "uuid";

function App() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [debt, setDebt] = useState({
    name: "",
    phone: "",
    amount: "",
    deadline: "",
    description: "",
  });

  const [debts, setDebts] = useState(
    JSON.parse(localStorage.getItem(DEBTS)) || [
      {
        id: "1",
        name: "kjsdjhcvsdhjvc",
        deadline: "2023-03-30",
        amount: 1000,
        phone: "72374734481",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quod!",
      },
      {
        id: "2",
        name: "bdshvfdsj",
        deadline: "2025-07-05",
        amount: 3654,
        phone: "862793721929",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ex in commodi, possimus odio nulla ratione veniam voluptatum repellat reiciendis iusto labore illo !",
      },
      {
        id: "3",
        name: "kajsdjh",
        deadline: "2023-31-11",
        amount: 23211,
        phone: "9732197",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      },
    ]
  );
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  const handleClose = () => {
    // searchRef.current.focus();
    // console.log(searchRef);
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
    setDebt({
      name: "",
      phone: "",
      amount: "",
      deadline: "",
      description: "",
    });
    setSelected(null);
  };

  const handleDebt = (e) => {
    setDebt({ ...debt, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      let newDebts;
      let newDebt = { ...debt, amount: +debt.amount, id: v4() };
      if (selected === null) {
        newDebts = [...debts, newDebt];
        toast.success("Added successfully");
      } else {
        newDebts = debts.map((debt) => {
          if (debt.id === selected) {
            return newDebt;
          } else {
            return debt;
          }
        });
        toast.success("Edited successfully");
      }
      localStorage.setItem(DEBTS, JSON.stringify(newDebts));
      setDebts(newDebts);
      handleClose();
    } else {
      setValidated(true);
    }
  };

  const editDebt = (id) => {
    let debt = debts.find((debt) => debt.id === id);
    setSelected(id);
    setDebt(debt);
    setShow(true);
  };

  const deleteDebt = (id) => {
    let checkDelete = window.confirm("Do you want delete this debt ?");
    if (checkDelete) {
      let newDebts = debts.filter((debt) => debt.id !== id);
      localStorage.setItem(DEBTS, JSON.stringify(newDebts));
      setDebts(newDebts);
      toast.success("Deleted successfully");
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value.trim().toLowerCase());
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<HomePage />} />
            <Route
              path="/debts"
              element={
                <DebtsPage
                  debt={debt}
                  debts={debts}
                  show={show}
                  validated={validated}
                  selected={selected}
                  search={search}
                  handleClose={handleClose}
                  handleShow={handleShow}
                  handleSubmit={handleSubmit}
                  handleDebt={handleDebt}
                  editDebt={editDebt}
                  deleteDebt={deleteDebt}
                  handleSearch={handleSearch}
                />
              }
            />
            <Route path="debts/:debtId" element={<DebtPage debts={debts} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
