import React, { forwardRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import DebtCard from "../card/DebtCard";

const DebtsPage = forwardRef(
  (
    {
      debts,
      show,
      handleShow,
      handleClose,
      validated,
      handleSubmit,
      debt,
      handleDebt,
      editDebt,
      selected,
      deleteDebt,
      search,
      handleSearch,
    },
    ref
  ) => {
    const debtsFound = debts.filter((debt) =>
      debt.name.toLowerCase().includes(search)
    );
    return (
      <div>
        <div className="input-group mb-3">
          <input
            ref={ref}
            value={search}
            onChange={handleSearch}
            type="text"
            className="form-control"
            placeholder="Searching..."
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleShow}>
            Add debt
          </button>
        </div>
        {debtsFound.map((debt) => (
          <DebtCard
            key={debt.id}
            editDebt={editDebt}
            deleteDebt={deleteDebt}
            {...debt}>
            {debt.description}
          </DebtCard>
        ))}
        <Modal show={show} onHide={handleClose}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Debt data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={debt.name}
                  onChange={handleDebt}
                  required
                  type="text"
                />
                <Form.Control.Feedback type="invalid">
                  Please fill !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  value={debt.phone}
                  onChange={handleDebt}
                  required
                  type="text"
                />
                <Form.Control.Feedback type="invalid">
                  Please fill !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="amount">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  value={debt.amount}
                  onChange={handleDebt}
                  required
                  type="number"
                />
                <Form.Control.Feedback type="invalid">
                  Please fill !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="deadline">
                <Form.Label>Deadline</Form.Label>
                <Form.Control
                  value={debt.deadline}
                  onChange={handleDebt}
                  required
                  type="date"
                />
                <Form.Control.Feedback type="invalid">
                  Please fill !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  value={debt.description}
                  onChange={handleDebt}
                  required
                  as="textarea"
                />
                <Form.Control.Feedback type="invalid">
                  Please fill !
                </Form.Control.Feedback>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary">
                {selected === null ? "Add" : "Save"} debt
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
  }
);

export default DebtsPage;
