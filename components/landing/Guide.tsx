import { Card, CardContent } from "../ui/card";

const GuideMotionGraphy = () => {
  return (
    <Card className="lg:h-full shadow-none md:h-36 sm:h-36">
      <CardContent></CardContent>
    </Card>
  );
};

const Guide = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 md:p-4 p-0 gap-10 h-full">
      <div className="h-full">
        <GuideMotionGraphy />
      </div>
      <div>
        <div>
          <h2 className="md:text-[34px] text-[24px] font-bold mb-4 md:text-right text-center">
            پروازی امن به جهانی نوین!
          </h2>
          <p className="text-[16px] text-justify text-wrap font-medium">
            ارز دیجیتال ممکنه برای خیلی‌ها از ماها موضوع پیچیده‌ای به نظر برسه و
            همین موضوع ممکنه دلیلی بشه که از برداشتن اولین قدم بترسیم. برای حل
            این مشکل کوین‌سنتر راه‌حل داره!
          </p>
        </div>
        {/* vertical bullet list */}
        <div className="bullet-list-container">
          <div className="mt-16 bullet-section">
            <div className="bullet"></div>
            <h4 className="text-[18px] font-bold">یاد بگیر !</h4>
            <p className="text-[16px] text-justify text-wrap font-medium">
              کوین‌سنتر هر ماه وبینارهای رایگان برای افراد مبتدی و پیشرفته
              برگذار می‌کند تا به شما در مسیر یادگیری کمک کند. در این وبینارها
              شما می‌تونید سوالاتون رو از متخصصان ما بپرسید.
            </p>
          </div>
          <div className="mt-10 bullet-section">
            <div className="bullet"></div>
            <h4 className="text-[18px] font-bold">آسون شروع کن!</h4>
            <p className="text-[16px] text-justify text-wrap font-medium">
              در خبرنامه هفتگی ما عضو شو تا راهنمای ویژه تازه‌کارها رو دریافت
              کنی. در این راهنما تیم متخصص ما بهت یاد میده سرمایه‌گذاری رو از
              کجا شروع کنی.
            </p>
          </div>
          <div className="mt-10 bullet-section">
            <div className="bullet"></div>
            <h4 className="text-[18px] font-bold">حرفه‌ای ادامه بده!</h4>
            <p className="text-[16px] text-justify text-wrap font-medium">
              کوین‌سنتر هر ماه وبینارهای رایگان برای افراد مبتدی و پیشرفته
              برگذار می‌کند تا به شما در مسیر یادگیری کمک کند. در این وبینارها
              شما می‌تونید سوالاتون رو از متخصصان ما بپرسید.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
