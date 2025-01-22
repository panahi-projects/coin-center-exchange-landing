import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="columns-1 md:p-4 p-0 pt-4">
      <div className="lg:columns-2 md:columns-1">
        <div className="md:min-h-72 mb-12 md:pl-[36px] lg:text-right text-center text-wrap">
          <h2 className="font-bold mb-4 lg:text-[40px] md:text-[32px] text-[24px] lg:text-justify text-center leading-normal mt-4 w-full">
            اولین هوش مصنوعی مبتنی بر ارز دیجیتال به همه سوالات شما پاسخ میده
          </h2>
          <p className="md:text-[16px] text-[14px]">
            سی‌سی به ده سوال شما به صورت رایگان جواب می‌ده! اگر نمی‌دونی از کجا
            شروع کنی، به سی‌سی بگو کی هستی و هدفت چیه، اون بهت می‌گه چه راهی رو
            دنبال کنی!
          </p>
        </div>
        <div className="md:pr-[36px]">
          <Card className="border-0 shadow-none h-full p-8">
            <CardContent className="flex flex-col items-center p-6">
              <div className="border-solid border-8 border-sky-300 rounded-full">
                <Image
                  src="/images/ai-chat-bot.png"
                  alt="ai-bot"
                  width={124}
                  height={124}
                  className="border-solid border-[7px] border-spacing-4 border-white rounded-full"
                />
              </div>
              <Button className="w-full mt-10 text-lg">شروع چت</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hero;
