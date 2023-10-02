import { useParams } from "react-router-dom";

const DebtPage = ({ debts }) => {
  const { debtId } = useParams();
  const { name, phone, amount, deadline, description } = debts.find(
    (debt) => debt.id === debtId
  );
  return (
    <div className="text-center">
      <h1>{name}</h1>
      <p>{phone}</p>
      <p>{amount} $</p>
      <p>{deadline}</p>
      <p>{description}</p>
    </div>
  );
};

export default DebtPage;
