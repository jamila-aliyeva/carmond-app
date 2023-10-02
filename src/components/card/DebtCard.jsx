import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DebtCard = ({
  id,
  name,
  deadline,
  phone,
  amount,
  children,
  editDebt,
  deleteDebt,
}) => {
  return (
    <div
      className="alert d-flex align-items-center justify-content-between"
      style={{ border: "1px solid grey" }}>
      <div>
        <h3>{name}</h3>
        <div>
          <time>{deadline}</time> | <span>{phone}</span>
        </div>
      </div>
      <span className="badge bg-primary">{amount} $</span>
      {/* <p>{children.slice(0, 10)}...</p> */}
      <div>
        <button
          onClick={() => editDebt(id)}
          className="btn  me-3"
          style={{ boxShadow: " 0 0 4px grey" }}>
          Edit
        </button>
        <button
          onClick={() => deleteDebt(id)}
          className="btn  me-3"
          style={{ boxShadow: " 0 0 4px grey" }}>
          Delete
        </button>
        <Link
          to={`/debts/${id}`}
          className="btn "
          style={{ boxShadow: " 0 0 4px grey" }}>
          More
        </Link>
      </div>
    </div>
  );
};

DebtCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  deadline: PropTypes.string,
  phone: PropTypes.string,
  amount: PropTypes.number,
  description: PropTypes.node,
};

export default DebtCard;
