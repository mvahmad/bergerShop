import Counter from "../counter";

const CardProduct = ({ name, price, img, description }) => {
  const rtl = {
    direction: "rtl",
  };
  return (
    <div
      className="w-60 rounded overflow-hidden flex flex-col bg-white "
      style={rtl}
    >
      <div>
        <img src={img} />
      </div>
      <div className="flex flex-col items-start">
        <div className="px-4 pt-4 font-medium">{name}</div>
        <div className="px-4 text-lg italic">
          <span className=" text-balck">قیمت</span>
          <span className="text-red-600">{price}</span>
          <span className=" text-balck">ریال</span>
        </div>
        <div className="px-4 text-base text-right">{description}</div>
        <div className="px-4 pb-2 pt-4">
          <Counter />
        </div>
      </div>
    </div>
  );
};
export default CardProduct;
