const Counter = () => {
  return (
    <div className="flex items-center justify-center">
      <button className="bg-red-600 text-white w-4 h-5 flex items-center justify-center">
        -
      </button>
      <span className="bg-alice-blue-50 w-10">0</span>
      <button className="bg-red-600 text-white w-4 h-5 items-center justify-center">
        +
      </button>
    </div>
  );
};
export default Counter;
