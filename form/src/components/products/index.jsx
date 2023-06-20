import CardProduct from "../cardProduct";

const Products = () => {
  return (
    <div className="bg-alice-blue-50 w-full h-full rounded-xl flex flex-col">
      <header className="text-2xl font-semibold p-2">
        رستوران مک دونالد شعبه بندر
      </header>
      <hr className="font-semibold bg-black" />
      <CardProduct />
    </div>
  );
};
export default Products;
