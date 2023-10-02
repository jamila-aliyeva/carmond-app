import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpenses = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span
          className="badge badge-primary mr-3"
          style={{ color: "black", fontSize: "17px" }}>
          {props.cost}$
        </span>
        <TiDelete
          size="1.5rem"
          onClick={handleDeleteExpenses}
          style={{ cursor: "pointer" }}></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
