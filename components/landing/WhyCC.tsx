"use client"
import { useToggleMode } from "@/stores/useToggleMode";
import Image from "next/image";

const WhyCC = () => {
  const listItems = [
    {
      id: 1,
      imageSrc: "/images/whycc/1-Checked User Male.png",
      imageSrcDarkMode: "/images/whycc/1-Checked User Male-dark.png",
      title: "احزار هویت ساده و سریع",
      description:
        "الویت کوین‌سنتر سرعت بالا در خدمات‌رسانی به همراه امنیت بالاست.",
    },
    {
      id: 2,
      imageSrc: "/images/whycc/2-Average Price.png",
      imageSrcDarkMode: "/images/whycc/2-Average Price-dark.png",
      title: "کارمزد منطقی و پایدار",
      description:
        "کوین‌سنتر با ثابت نگاه داشتن میزان کارمزد باعث بالا رفتن سرعت تحلیل و قدرت برتامه‌ریزی می‌شود.",
    },
    {
      id: 3,
      imageSrc: "/images/whycc/3-Protect.png",
      imageSrcDarkMode: "/images/whycc/3-Protect-dark.png",
      title: "کارمزد منطقی و پایدار",
      description:
        "کوین‌سنتر با ثابت نگاه داشتن میزان کارمزد باعث بالا رفتن سرعت تحلیل و قدرت برتامه‌ریزی می‌شود.",
    },
  ];
  const listItems2 = [
    {
      id: 4,
      imageSrc: "/images/whycc/4-Secure.png",
      imageSrcDarkMode: "/images/whycc/4-Secure-dark.png",
      title: "احزار هویت ساده و سریع",
      description:
        "با کوین‌سنتر می‌توانید انتقالات با حجم زیاد را در کمترین سرعت و بدون محدودیت‌ انجام دهید.",
    },
    {
      id: 5,
      imageSrc: "/images/whycc/5-Download From Cloud.png",
      imageSrcDarkMode: "/images/whycc/5-Download From Cloud-dark.png",
      title: "وب اپلیکیشن قدرتمند",
      description:
        "با استفاده از وب اپلیکیشن کوین‌سنتر نگران تحریم و فیلترینگ و بروزرسانی نباشید.",
    },
    {
      id: 6,
      imageSrc: "/images/whycc/6-Customer Support.png",
      imageSrcDarkMode: "/images/whycc/6-Customer Support-dark.png",
      title: "پشتیبانی کوین‌سنتر",
      description:
        "با کوین‌سنتر از خدمات پشتیبانی متنوع همچون مشاوره معامله‌گری، مشاوره سرمایه‌گذاری و غیره بهره‌مند شوید.",
    },
  ];
  const { theme } = useToggleMode();
  return (
    <div className="bg-background-secondary">
      <div className="container lg:px-[84px] lg:py-[84px] px-[26px] py-[48px]">
        <div className="lg:px-52 md:px-24 sm:px-18">
          <h2 className="md:text-[34px] text-[24px] md:text-right text-center font-bold mb-6">
            چرا به کوین‌سنتر اعتماد کنید؟
          </h2>
          <p className="text-[16px] md:text-justify text-center text-wrap font-medium">
            خرید بیت‌کوین و +۵۰ رمزارز دیگر در کوین‌سنتر با استفاده از کارت‌های
            بانکی. خرید بیت‌کوین و +۵۰ رمزارز دیگر در کوین‌سنتر با استفاده از
            کارت‌های بانکی. خرید بیت‌کوین و +۵۰ رمزارز دیگر در کوین‌سنتر با
            استفاده از کارت‌های بانکی.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-0">
            <div className="bullet-list-container bullet-list-container-mobile pt-4 mt-10 md:mb-12 -mb-4">
              {listItems.map((item) => (
                <div
                  key={item.id}
                  className="bullet-section bg-background-secondary first:mt-8 md:mt-16 mt-8 md:pl-28 p-2"
                >
                  <div className="md:text-right text-center w-full">
                    <Image
                      src={theme === "light" ? item.imageSrc : item.imageSrcDarkMode}
                      alt=""
                      width={52}
                      height={52}
                      className="mb-4 inline-block"
                    />
                  </div>
                  <h5 className="font-bold text-18 mb-2 md:text-right text-center">
                    {item.title}
                  </h5>
                  <p className="md:text-justify text-center font-medium">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="bullet-list-container bullet-list-container-mobile pt-4 lg:mt-28 md:mt-16 mt-0">
              {listItems2.map((item) => (
                <div
                  key={item.id}
                  className="bullet-section bg-background-secondary md:mt-16 first:mt-8 mt-8 md:pl-28 p-2"
                >
                  <div className="md:text-right text-center w-full">
                    <Image
                      src={theme === "light" ? item.imageSrc : item.imageSrcDarkMode}
                      alt=""
                      width={52}
                      height={52}
                      className="mb-4 inline-block"
                    />
                  </div>
                  <h5 className="font-bold text-18 mb-2 md:text-right text-center">
                    {item.title}
                  </h5>
                  <p className="md:text-justify text-center font-medium">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCC;
