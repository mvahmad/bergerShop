const Form = () => {
  return (
    <div className="p-2 bg-slate-200">
      <form className="flex flex-col w-56 h-32 gap-3 ">
        <input
          className="border-solid border-2 border-current"
          type="text"
          placeholder="نام کاربری"
        />
        <input
          className="border-solid border-2 border-current"
          type="text"
          placeholder="رمز عبور"
        />
        <button className="bg-blue-600 border-solid text-white ">
          ورود به بخش مدیریت سایت
        </button>
      </form>
      <a href="#" className="">
        فراموشی رمز عبور
      </a>
    </div>
  );
};
export default Form;
