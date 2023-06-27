import { useContext, useState } from "react";
import orderContext from "../../store/context";
const Order = () => {
  const ctx = useContext(orderContext);

  return (
    <div className="bg-alice-blue-50 w-96 h-80 rounded-xl flex flex-col gap-1 sticky top-5">
      <div className="flex justify-between p-2">
        <span>تومان</span>
        <span>{ctx.allOrders}</span>
        <label>:جمع کل سفارشات</label>
      </div>
      <div className="flex justify-between p-2 ">
        <span>تومان</span>
        <span>{ctx.wage}</span>
        <label>:حق سرویس و کارمزد</label>
      </div>
      <div className="flex justify-between p-2 ">
        <span>تومان</span>
        <span>{ctx.offer}</span>
        <label>:تخفیف</label>
      </div>
      <div className="rounded flex justify-end p-2">
        <button className="btn bg-red-600 text-white">✔️</button>
        <input
          type="text"
          placeholder="کد تخفیف"
          className="focus-visible:border-0 focus-visible:outline-0 w-full "
        />
      </div>
      <div className="rounded bg-yellow-500 flex justify-between p-2 m-2">
        <span className="font-semibold">تومان</span>
        <span>{ctx.payMent}</span>
        <label className="font-semibold">:مبلغ قابل پرداخت</label>
      </div>
      <button className="btn bg-red-800 text-white m-2 h-10 rounded">
        ثبت سفارش
      </button>
    </div>
  );
};
export default Order;
