import FeatureCard, { FeatureCardProps } from "./FeatureCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

const FeaturesCarousel = () => {
  const featuresList:FeatureCardProps[] = [
    {
      src: "/images/features/P2P Banner.png",
      className: "rounded-1xl"
    },
    {
      src: "/images/features/OTC Banner.png",
      className: "rounded-1xl"
    },
    {
      src: "/images/features/News Banner.png",
      className: "rounded-1xl"
    },
    {
      src: "/images/features/Education Banner.png",
      className: "rounded-1xl dark:border-2"
    },
  ]
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {featuresList.map((item, index) => (
          <CarouselItem key={index} className="lg:basis-1/4 sm:basis-1/3 basis-1/2 p-2 lg:pl-8 pl-0 w-full">
            <FeatureCard src={item.src} className={item.className}/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="md:block hidden" />
      <CarouselNext className="md:block hidden"/>
    </Carousel>
  );
};

export default FeaturesCarousel;
