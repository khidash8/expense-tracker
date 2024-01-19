import { useForm } from "react-hook-form";
import categories from "./Categories";
import PropTypes from "prop-types";

const FormData = {
  description: "",
  amount: "",
  category: "",
};

const ExpenseAddForm = ({ onSubmitForm }) => {
  const {
    handleSubmit,
    reset,
    formState: { errors },
    register,
  } = useForm(FormData);

  return (
    <form
      className="container"
      onSubmit={handleSubmit((data) => {
        onSubmitForm(data);
        reset();
      })}
    >
      {/* <!-- Description --> */}
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description", { required: true, minLength: 3 })}
          id="description"
          type="text"
          className="form-control"
        />

        {errors.description?.type === "required" && (
          <p className="text-danger">Description is required</p>
        )}

        {errors.description?.type === "minLength" && (
          <p className="text-danger">
            Description must be at least 3 characters
          </p>
        )}
      </div>

      {/* <!-- Amount --> */}
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", {
            required: true,
            min: 0.01,
            valueAsNumber: true,
          })}
          id="amount"
          type="text"
          className="form-control"
        />

        {errors.amount?.type === "required" && (
          <p className="text-danger">Amount is required</p>
        )}

        {errors.amount?.type === "min" && (
          <p className="text-danger">Minimum amount must be $0.01</p>
        )}
      </div>

      {/* <!-- Category --> */}
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category", { required: true })}
          id="category"
          className="form-select"
        >
          <option value=""></option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {errors.category && <p className="text-danger">Category is required</p>}
      </div>

      {/* <!-- Submit --> */}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseAddForm;

// * <!-- PropTypes / Validation --> *
ExpenseAddForm.propTypes = {
  onSubmitForm: PropTypes.func,
};
