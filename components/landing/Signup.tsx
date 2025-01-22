import { Button } from "../ui/button";

const Signup = () => {
  return (
    <div className="relative flex items-center justify-center md:h-screen h-64 bg-watermark-landing">
      <div className="container">
        <div className="text-center">
          <h3 className="text-[34px] font-bold mb-4">برای اولین سرمایه‌گذاریت آماده‌ای؟</h3>
          <p className="text-lg mb-6">حساب کاربری خود را با چند کلیک بسازید و اولین سرمایه‌گذاری خود را انجام دهید.</p>
          <Button size="lg" className="text-[22px]">ثبت نام</Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
