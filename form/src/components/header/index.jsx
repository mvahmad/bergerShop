import Form from "../form";

const Header = () => {
  const style = {
    padding: "2rem",
  };
  const style2 = {
    width: "60rem",
  };
  return (
    <>
      <div className="flex flex-row " style={style}>
        <div className="bg-blue-600 color-white w-96" style={style2}>
          <p className="p-5 text-white flex flex-col">
            بلاگفا یک ابزار قدرتمند برای ساخت و مدیریت وبلاگ است . بلاگفا به شما
            کمک میکند تا با سرعت و سهولت اطلاعات ، خاطرات و مطالب و مقالات خود
            را در اینترنت منتشر کنید
          </p>
          <button className="bg-blue-900 border-solid text-white w-48 h-8">
            ثبت نام و ایجاد وبلاگ جدید
          </button>
        </div>
        <Form />
      </div>
    </>
  );
};
export default Header;
