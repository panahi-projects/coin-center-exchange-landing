"use client";
import { useToggleMode } from "@/stores/useToggleMode";
import Image from "next/image";

interface Props {
  width?: number;
  height?: number;
}

const Logo = ({width, height} : Props) => {
  const { theme } = useToggleMode();
  return (
      <Image
        src={
          theme === "light" ? "/images/logo-light.png" : "/images/logo-dark.png"
        }
        width={width || 40}
        height={height || 40}
        alt="کوین سنتر"
        title="کوین سنتر"
      />
  );
};

export default Logo;
