import CardProduct from "../cardProduct";

const Products = () => {
  const bergers = [
    {
      img: "https://www.qfcfastfood.com/assets/images/goods/000000/good_local_1190-500x357-6762.jpg",
      name: "اسنک اسپایسی",
      price: "1,800,000",
      description: "2تکه مرغ سوخاري سيب زميني سالاد کلم",
    },
    {
      img: "https://www.qfcfastfood.com/assets/images/goods/000000/good_local_1191-500x357-6763.jpg",
      name: "دینر اسپایسی",
      price: "1,990,000",
      description: "3 تکه مرغ سوخاري سيب زميني سالاد سيب زميني سالاد کلم",
    },
    {
      img: "https://www.qfcfastfood.com/assets/images/goods/000000/good_local_1192-500x357-6875.jpg",
      name: "فامیلی اسپایسی",
      price: "3,990,000",
      description: "7تکه مرغ سوخاري2عدد سيب زميني2عدد",
    },
    {
      img: "https://www.qfcfastfood.com/assets/images/goods/000000/good_local_1193-500x357-6859.jpg",
      name: "استریپس نرمال",
      price: "1,990,000",
      description: "4تکه فيله سوخاري سيب زميني سالاد",
    },
    {
      img: "https://www.qfcfastfood.com/assets/images/goods/000000/good_local_1287-500x357-6919.jpg",
      name: "کالزونه",
      price: "1,790,000",
      description: "زامبون گوشت زامبون مرغ پپروني قارچ ",
    },
    {
      img: "https://www.qfcfastfood.com/assets/images/goods/000000/good_local_1203-500x357-6773.jpg",
      name: "پیتزا پپرونی",
      price: "1,840,000",
      description: "پپروني مخصوص قارچ مخصوص پنير فلفل دلمه ذرت",
    },
  ];
  return (
    <div className="bg-alice-blue-50 w-full h-full rounded-xl flex flex-col p-2 ">
      <header className="text-2xl font-semibold p-2">
        رستوران مک دونالد شعبه بندر
      </header>
      <hr className="font-semibold bg-black" />
      <div className="grid grid-cols-3 gap-2 mt-1">
        {bergers.map((elment) => {
          return (
            <CardProduct
              name={elment.name}
              img={elment.img}
              price={elment.price}
              description={elment.description}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Products;
