import PropTypes from "prop-types";

// <!-- Render -->
const ExpenseList = ({ expenses, onDelete }) => {
  if (expenses.length === 0) return;

  return (
    <table className="table table-bordered container my-4 mx-auto">
      {/* <!-- Table head --> */}
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>

      {/* <!-- Table body --> */}
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>${expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>

      {/* <!-- Table footer --> */}
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {expenses
              .map((expense) => expense.amount)
              .reduce((acc, expense) => acc + expense, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;

// * <!-- PropTypes / Validation --> *
ExpenseList.propTypes = {
  expenses: PropTypes.array,
  onDelete: PropTypes.func,
};
