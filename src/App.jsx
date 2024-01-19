import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpensFilter from "./components/ExpensFilter";
import ExpenseAddForm from "./components/ExpenseAddForm";

const App = () => {
  // ** <!----------------------------- States / Hooks --> **
  const [expenses, setExpenses] = useState([
    { id: 1, description: "rent", amount: 1000, category: "Rent" },
    { id: 2, description: "groceries", amount: 500, category: "Groceries" },
    { id: 3, description: "travel", amount: 200, category: "Entertainment" },
    { id: 4, description: "rent", amount: 300, category: "Rent" },
  ]);

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
