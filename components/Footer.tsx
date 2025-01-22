import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Logo from "./Logo";
import { FaLinkedin, FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare  } from "react-icons/fa";

interface InfoProps {
  detail: {
    title: string;
    phone: string;
    email: string;
    address: string;
  };
  logoCenter?: boolean;
}

const SocialMediaIcons = () => {
  return (
    <div>
      <span className="inline-block m-1 cursor-pointer">
        <FaInstagramSquare size={24}/>
      </span>
      <span className="inline-block m-1 cursor-pointer">
        <FaLinkedin size={24}/>
      </span>
      <span className="inline-block m-1 cursor-pointer">
        <FaTwitterSquare size={24}/>
      </span>
      <span className="inline-block m-1 cursor-pointer">
        <FaWhatsappSquare  size={24}/>
      </span>
    </div>
  );
};

const Info = ({ detail, logoCenter }: InfoProps) => {
  return (
    <>
      <div
        className={[
          "flex mb-3 text-center ",
          logoCenter ? "justify-center" : "",
        ].join("")}
      >
        <Logo width={60} height={60} />
      </div>
      <div className="text-xl font-bold mb-3">{detail.title}</div>
      <div className="text-base mb-3">{detail.phone}</div>
      <div className="text-base mb-3">{detail.email}</div>
      <div className="text-base mb-3">{detail.address}</div>
        <SocialMediaIcons />
    </>
  );
};

const Footer = () => {
  const footerItems = {
    info: {
      title: "صرافی کوین‌سنتر",
      phone: "۰۴۲۷۸۹۰۱-۰۳۹۹",
      email: "support@bityet.com",
      address:
        "شیراز، خیابان دکتر حسابی، شهرک آیین، خیابان پارک و علم و فناوری فارس",
    },
    about: {
      id: "1",
      title: "درباره کوین سنتر",
      items: [
        {
          id: "1-1",
          title: "درباره کوین سنتر",
          link: "/",
        },
        {
          id: "1-2",
          title: "استخدام",
          link: "/",
        },
        {
          id: "1-3",
          title: "سطوح کاربری",
          link: "/",
        },
        {
          id: "1-4",
          title: "شرایط و مقررات استفاده",
          link: "/",
        },
        {
          id: "1-5",
          title: "پاک کردن کوکی",
          link: "/",
        },
        {
          id: "1-6",
          title: "سطوح کارمزدی",
          link: "/",
        },
      ],
    },
    products: {
      id: "2",
      title: "محصولات",
      items: [
        {
          id: "2-1",
          title: "سرمایه گذاری",
          link: "/",
        },
        {
          id: "2-2",
          title: "خرید آسان",
          link: "/",
        },
        {
          id: "2-3",
          title: "چت بات",
          link: "/",
        },
        {
          id: "2-4",
          title: "کارت هدیه",
          link: "/",
        },
      ],
    },
    services: {
      id: "3",
      title: "خدمات",
      items: [
        {
          id: "3-1",
          title: "چت بات",
          link: "/",
        },
        {
          id: "3-2",
          title: "راهنمای استفاده",
          link: "/",
        },
        {
          id: "3-3",
          title: "کارنامه سود و زیان",
          link: "/",
        },
        {
          id: "3-4",
          title: "آکادمی",
          link: "/",
        },
      ],
    },
  };
  return (
    <footer className="bg-background-secondary">
      <div>
        <div className="container mx-auto lg:py-[84] py-[42px] lg:px-[84px] px-[42px]">
          {/* desktop screen */}
          <div className="md:block hidden">
            <div className="grid lg:grid-cols-11 md:grid-cols-6 lg:gap-14 md:gap-4 ">
              <div className="info lg:col-span-3 md:col-span-2 lg:max-w-64 max-w-56">
                <Info detail={footerItems.info} />
              </div>
              <div className="about lg:col-span-2">
                <div className="text-[20px] font-bold mb-3">
                  {footerItems.about.title}
                </div>
                <ul>
                  {footerItems.about.items.map((item) => (
                    <li key={item.id} className="pt-2">
                      <Link href={item.link} className="font-medium">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="products lg:col-span-2">
                <div className="text-[20px] font-bold mb-3">
                  {footerItems.products.title}
                </div>
                <ul>
                  {footerItems.products.items.map((item) => (
                    <li key={item.id} className="pt-2">
                      <Link href={item.link} className="font-medium">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="services lg:col-span-2">
                <div className="text-[20px] font-bold mb-3">
                  {footerItems.services.title}
                </div>
                <ul>
                  {footerItems.services.items.map((item) => (
                    <li key={item.id} className="pt-2">
                      <Link href={item.link} className="font-medium">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="about lg:col-span-2">
                <div className="text-[20px] font-bold mb-3">
                  {footerItems.about.title}
                </div>
                <ul>
                  {footerItems.about.items.map((item) => (
                    <li key={item.id} className="pt-2">
                      <Link href={item.link} className="font-medium">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* mobile screen */}
          <div className="md:hidden block">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="about">
                <AccordionTrigger className="py-2">
                  <div className="text-base font-bold">
                    {footerItems.about.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul>
                    {footerItems.about.items.map((item) => (
                      <li key={item.id} className="pt-2">
                        <Link href={item.link} className="font-medium">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="products">
                <AccordionTrigger className="py-2">
                  <div className="text-base font-bold">
                    {footerItems.products.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul>
                    {footerItems.products.items.map((item) => (
                      <li key={item.id} className="pt-2">
                        <Link href={item.link} className="font-medium">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="services">
                <AccordionTrigger className="py-2">
                  <div className="text-base font-bold">
                    {footerItems.services.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul>
                    {footerItems.services.items.map((item) => (
                      <li key={item.id} className="pt-2">
                        <Link href={item.link} className="font-medium">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="about-2">
                <AccordionTrigger className="py-2">
                  <div className="text-base font-bold">
                    {footerItems.about.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul>
                    {footerItems.about.items.map((item) => (
                      <li key={item.id} className="pt-2">
                        <Link href={item.link} className="font-medium">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="text-center">
              <Info detail={footerItems.info} logoCenter={true} />
            </div>
          </div>
        </div>
        <div className="border-t-2 border-solid border-foreground">
          <div className="container mx-auto">
            <p className="p-4 text-center">
              کلیه حقوق این وبسایت متعلق به کوین‌سنتر است.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
