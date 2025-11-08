import React, { useState, useEffect } from "react";
import "./App.css";
import ExpenseList from "./Expense_list";
import Summary from "./Summary";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [form, setForm] = useState({
    name: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.amount || !form.category) return;
    const updated = [...expenses, form];
    setExpenses(updated);
    localStorage.setItem("expenses", JSON.stringify(updated));
    setForm({ name: "", amount: "", category: "", date: "" });
  };
  
  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  const categoryTotals = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + Number(e.amount);
    return acc;
  }, {});

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "Arial" }}>
      <h2>💰 Expense Tracker</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          name="name"
          placeholder="Expense Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="amount"
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          required
        />
        <input
          name="category"
          placeholder="Category (Food, Travel...)"
          value={form.category}
          onChange={handleChange}
          required
        />
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <ExpenseList expenses={expenses}/>

      <Summary total={total} categoryTotals={categoryTotals} />
    </div>
  );
}

export default App;
