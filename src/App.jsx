import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpensFilter from "./components/ExpensFilter";
import ExpenseAddForm from "./components/ExpenseAddForm";

const App = () => {
  // ** <!----------------------------- States / Hooks --> **
  const [expenses, setExpenses] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");

  // ** <!----------------------------- Functions / event handlers --> **
  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  //  ** <!----------------------------- Variables --> **
  const filteredExpenses = selectedCategory
    ? expenses.filter((exp) => exp.category === selectedCategory)
    : expenses;

  // ! <!------------------------------ Render --> **
  return (
    <div>
      <h1 className="text-center my-4">Expense Tracker</h1>
      <div className="mb-4">
        <ExpenseAddForm
          onSubmitForm={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>

      <div className="mb-4">
        <ExpensFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={filteredExpenses}
        onDelete={(id) => handleDelete(id)}
      />
    </div>
  );
};

export default App;
