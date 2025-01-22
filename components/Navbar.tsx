"use client";
import { useDirection } from "@/provider/DirectionProvider";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Button } from "./ui/button";
import ToggleThemeButton from "./ToggleThemeButton";
import Logo from "./Logo";

const Navbar = () => {
  const menuItems = [
    { id: 1, name: "markets", title: "بازارها" },
    { id: 2, name: "goldsandcurrencies", title: "طلا و ارز" },
    { id: 3, name: "dealing", title: "معامله" },
    { id: 4, name: "tutorial", title: "آموزش" },
    { id: 5, name: "investment", title: "سرمایه گذاری" },
    { id: 6, name: "academy", title: "آکادمی" },
  ];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { direction, toggleDirection } = useDirection(); // Use the direction context

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    if (dropdownOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [dropdownOpen]);

  return (
    <nav
      dir={direction}
      className="bg-background-secondary text-foreground relative"
    >
      <div className="container relative">
        <div className="mx-auto px-4 md:flex items-center gap-10">
          <div
            dir={direction === "ltr" ? "rtl" : "ltr"}
            className="flex items-center justify-items-start md:w-auto w-full"
          >
            <div className="flex items-center py-5 md:px-2 p-0 flex-1">
              <Logo />
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-start absolute right-5">
              <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                <HiMenuAlt3 size={24} />
              </button>
            </div>
          </div>
          {/* Primary Navigation */}
          <div
            className={`md:flex md:flex-row md:relative absolute bg-background-secondary w-full right-0 md:shadow-none shadow-md flex-col items-center justify-start md:space-x-1 navigation-menu pb-3 md:pb-0 ${
              mobileMenuOpen ? "" : "hidden"
            }`}
          >
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={"/" + item.name}
                className="py-2 lg:px-4 md:px-2 px-6 block lg:text-[16px] text-[14px]"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-[54px] md:left-4 md:right-auto flex gap-2 items-center justify-center">
          <ToggleThemeButton />
          <Button>ثبت نام | ورود</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
