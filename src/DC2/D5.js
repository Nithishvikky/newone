import React from "react";

function D5() {
  const [numbers, setNumbers] = React.useState([]);
  const [total, setSum] = React.useState();
  const [error, setError] = React.useState();

  const handleSum = () => {
    try {
      setSum(numbers.reduce((sum, current) => sum + current));
      setError(null);
    } 
    catch (error) {
      setError(error.message);
    }
  };

  return ( 
    <div className="Day5">
    <div  class="input-group mb-3">
      <input class="form-control"
        type="text"
        onChange={(e) => setNumbers(e.target.value.split(" ").map(Number))}
        placeholder="Enter Numbers"
      />
      <span class="input-group-text">.00</span>
      </div>
      <button class="btn btn-primary" onClick={handleSum}>Calculate Sum</button>
      
      {total && <div>The sum of the array is {total}</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
}

export default D5;