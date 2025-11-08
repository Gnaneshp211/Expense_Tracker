function Summary({ total, categoryTotals }) {
  return (
    <div>
      <h3>Summary</h3>
      <p><b>Total:</b> ₹{total}</p>
      <ul>
        {Object.entries(categoryTotals).map(([cat,amt])=>(
          <li key={cat}>{cat}: ₹{amt}</li>
        ))}
      </ul>
    </div>
  );
}

export default Summary;