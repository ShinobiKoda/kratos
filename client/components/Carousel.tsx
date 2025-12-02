import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { fetchListings } from "@/lib/api/FetchListings";
import { Listing } from "@/lib/types/Listings";

export function CarouselCard() {
  const [data, setData] = useState<Listing[]>([]);

  const getListing = async (): Promise<void> => {
    const listings = await fetchListings();
    setData(listings);
  };

  useEffect(() => {
    getListing();
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-full"
    >
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem
            key={item.id ?? index}
            className="basis-1/2 md:basis-1/4"
          >
            <div className="w-[182px] pr-2.5">
              <Card>
                <CardHeader>
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={100}
                    width={100}
                    className="w-full"
                  />
                </CardHeader>
                <CardContent className="flex flex-col">
                  <h4 className="font-medium leading-normal text-[15px]">
                    {item.name}
                  </h4>
                  <p className="flex items-center text-(--dark-grey) text-[12px] font-normal leading-normal">
                    <IoLocationOutline />
                    <span>{item.name}</span>
                  </p>
                  <p className="flex items-center text-(--dark-grey) text-[12px] font-normal leading-normal">
                    Price: {item.price}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
