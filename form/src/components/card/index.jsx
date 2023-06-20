const Card = () => {
  const style = {
    direction: "rtl",
  };
  const data = [
    {
      title: "کیک کدو حلوایی",
      subtitle: "hossein-heydari.ir",
      description:
        "این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاده ی کامل این مطلب به سایت اتاق مراجعه کنید",
    },
    {
      title: "کیک کدو حلوایی",
      subtitle: "hossein-heydari.ir",
      description:
        "این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاده ی کامل این مطلب به سایت اتاق مراجعه کنید",
    },
    {
      title: "کیک کدو حلوایی",
      subtitle: "hossein-heydari.ir",
      description:
        "این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاده ی کامل این مطلب به سایت اتاق مراجعه کنید",
    },
    {
      title: "کیک کدو حلوایی",
      subtitle: "hossein-heydari.ir",
      description:
        "این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاده ی کامل این مطلب به سایت اتاق مراجعه کنید",
    },
    {
      title: "کیک کدو حلوایی",
      subtitle: "hossein-heydari.ir",
      description:
        "این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاده ی کامل این مطلب به سایت اتاق مراجعه کنید",
    },
    {
      title: "کیک کدو حلوایی",
      subtitle: "hossein-heydari.ir",
      description:
        "این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاده ی کامل این مطلب به سایت اتاق مراجعه کنید",
    },
    {
      title: "کیک کدو حلوایی",
      subtitle: "hossein-heydari.ir",
      description:
        "این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاده ی کامل این مطلب به سایت اتاق مراجعه کنید",
    },
    {
      title: "کیک کدو حلوایی",
      subtitle: "hossein-heydari.ir",
      description:
        "این مطلب درمورد پرده اتاق کودک بسیار زیبا و شیک است . این مطلب از سایت اتاق میباشد . برای مشاده ی کامل این مطلب به سایت اتاق مراجعه کنید",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-2 mr-7 pr-12" style={style}>
        {data.map((element) => {
          return (
            <div className="w-72 overflow-hidden bg-slate-300">
              <div className="px-6 py-4 flex flex-col items-start mr-2">
                <div className="font-bold text-blue-600 text-2xl">
                  {element.title}
                </div>
                <div className="text-slate-400 text-lg italic ">
                  {element.subtitle}
                </div>
                <p className="text-base">{element.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
