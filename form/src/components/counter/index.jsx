import { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);
  function inCrise() {
    setcount(count + 1);
  }
  function diCrise() {
    if (count > 0) {
      setcount(count - 1);
    }
  }
  return (
    <div className="flex items-center justify-center">
      <button
        className="bg-red-600 text-white w-4 h-5 flex items-center justify-center"
        onClick={diCrise}
      >
        -
      </button>
      <span className="bg-alice-blue-50 w-10">{count}</span>
      <button
        className="bg-red-600 text-white w-4 h-5 items-center justify-center"
        onClick={inCrise}
      >
        +
      </button>
    </div>
  );
};
export default Counter;
