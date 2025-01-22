import Image from "next/image";

const LatestArticles = () => {
  const articles = [
    {
      id: 1,
      title: "پیش‌فروش HMSTR سودهای ابتدایی را از آن خود کنید",
      imageSrc: "/images/blog/1.png",
    },
    {
      id: 2,
      title: "پیش‌فروش HMSTR سودهای ابتدایی را از آن خود کنید",
      imageSrc: "/images/blog/2.png",
    },
    {
      id: 3,
      title: "عاشق های آنلاین: کلاهبرداران رمزنگاری در کمین سرمایه های شما",
      imageSrc: "/images/blog/3.png",
    },
  ];
  return (
    <div className="mx-auto">
      <h3 className="font-bold text-[28px]">جدیدترین مطالب</h3>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2">
        {articles.map((article) => (
          <div key={article.id} className="sm:p-2 py-2 h-full">
            <div className="bg-background-secondary shadow-none rounded-2xl overflow-hidden">
              <img
                src={article.imageSrc}
                alt="Image 1"
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h2 className="text-center text-xl font-bold">
                  {article.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestArticles;
