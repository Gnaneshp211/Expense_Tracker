function ExpenseList({ expenses }) {
  return (
    <div>
      <h3>Expense List</h3>
      {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        <table border="1" width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((e, i) => (
              <tr key={i}>
                <td>{e.name}</td>
                <td>₹{e.amount}</td>
                <td>{e.category}</td>
                <td>{e.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ExpenseList;