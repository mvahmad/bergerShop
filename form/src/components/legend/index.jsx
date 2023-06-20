const Legend = () => {
  const style = {
    width: "32rem",
  };
  return (
    <div className="flex flex-row p-7 ml-4 items-center">
      <hr className="border-solid border border-current" style={style} />
      <div className="text-blue-800 ">وبلاگ های بروز شده</div>
      <hr className="border-solid border border-current " style={style} />
    </div>
  );
};
export default Legend;
