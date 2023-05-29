import Add from "../buttons/Add";
import Cancel from "../buttons/Cancel";
import { useState, useEffect } from "react";

function IncomeForm({ data, updateIncData }) {
  const [inc, setInc] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    setInc(data);
  }, [data]);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  const handleCategorySelection = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleAmtChange = (event) => {
    const input = event.target.value;
    if (input === "" || /^\d{1,15}$/.test(input)) {
      setNewAmount(input);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedCategory && newAmount) {
      const updatedIncData = inc.map((item) => {
        if (item.category === selectedCategory) {
          return { ...item, amount: item.amount + parseInt(newAmount) };
        }
        return item;
      });
      setInc(updatedIncData);
      setSelectedCategory("");
      setNewAmount("");
      updateIncData(updatedIncData);
    }
    // console.log(inc);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setSelectedCategory("");
    setNewAmount("");
  };

  // useEffect(() => {
  //   updateIncData(updatedData);
  // }, [inc]);

  return (
    <>
      <button
        className="btn btn-primary btn-sm"
        type="button"
        onClick={toggleForm}
      >
        Add Transaction
      </button>
      {isFormOpen && (
        <form
          className="row mb-3 d-grid gap-2 col-10 mx-auto card card-body"
          onSubmit={handleSubmit}
        >
          <select
            className="form-select"
            value={selectedCategory}
            onChange={handleCategorySelection}
          >
            <option value="">Select a Category</option>
            {data.map((item) => (
              <option key={item.id} value={item.category}>
                {item.category}
              </option>
            ))}
          </select>
          <label className="col-sm-2 col-form-label" htmlFor="amount">
            Enter Amount
          </label>
          <input
            className="form-control"
            value={newAmount}
            onChange={handleAmtChange}
            type="number"
            id="amount"
            placeholder="Amount"
            required
          />
          <span>
            <Add />
          </span>
          <span>
            <Cancel handle={handleClick} />
          </span>
        </form>
      )}
    </>
  );
}

export default IncomeForm;
