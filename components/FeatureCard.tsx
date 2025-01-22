import Image from "next/image";
import Link from "next/link";

export interface FeatureCardProps {
  src: string;
  className?: string
}

const FeatureCard = ({ src, className }: FeatureCardProps) => {
  return (
    <Link href="#">
      <Image src={src} width={264} height={173} alt="feature" className={className} />
    </Link>
  );
};

export default FeatureCard;
