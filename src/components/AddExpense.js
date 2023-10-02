import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpense = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // alert("name: " + name + ", cost: " + cost);
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      playload: expense,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            type="text"
            required
            className="form-control"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
        <div className="sol-sm">
          <button type="submit" className="btn btn-primary mt-4 ">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpense;
