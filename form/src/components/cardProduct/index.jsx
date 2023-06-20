import Counter from "../counter";

const CardProduct = () => {
  const rtl = {
    direction: "rtl",
  };
  return (
    <div className="w-72 rounded overflow-hidden bg-white " style={rtl}>
      <div className="px-4 py-4 flex flex-col items-start">
        <div className="">title</div>
        <div className="text-slate-400 text-lg italic">subtitle</div>
        <p className="text-base">description</p>
        <Counter />
      </div>
    </div>
  );
};
export default CardProduct;
