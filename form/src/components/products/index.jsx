import CardProduct from "../cardProduct";

const Products = () => {
  const bergers = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="bg-alice-blue-50 w-full h-full rounded-xl flex flex-col p-2 ">
      <header className="text-2xl font-semibold p-2">
        رستوران مک دونالد شعبه بندر
      </header>
      <hr className="font-semibold bg-black" />
      <div className="grid grid-cols-3 gap-1 mt-1">
        {bergers.map((elment) => {
          return <CardProduct />;
        })}
      </div>
    </div>
  );
};
export default Products;
