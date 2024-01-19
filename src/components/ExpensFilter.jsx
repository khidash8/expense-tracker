import PropTypes from "prop-types";
import categories from "./Categories";

const ExpensFilter = ({ onSelectCategory }) => {
  return (
    <div className="my-4 container">
      <label htmlFor="category" className="form-label">
        Categories
      </label>
      <select
        className="form-select"
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpensFilter;

// * <!-- PropTypes / Validation --> *
ExpensFilter.propTypes = {
  onSelectCategory: PropTypes.func,
};
