import Container from "@/components/ui/Container";
import TitleSection from "@/components/ui/TitleSection";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SuccessStories = () => {
  return (
    <Container className="py-20">
      <TitleSection>Success Stories</TitleSection>
      <div
        className="flex items-center justify-center pt-10"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-sm md:max-w-screen-lg "
        >
          <CarouselContent className="-mt-1 h-[200px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pt-1 md:basis-1/2">
                <div className="p-1">
                  <Card className="rounded-none border border-primary">
                    <CardContent className="p-6 text-secondary">
                      <div>
                        <img
                          src="https://media.licdn.com/dms/image/C5103AQG4ae90Om8I9Q/profile-displayphoto-shrink_400_400/0/1516265250733?e=2147483647&v=beta&t=J8Q_dYLuC298expveHeGqY8MBBYZlHslTKGHw2Iz3oM"
                          alt="Success Story 1"
                          className="mb-4 border-2 border-primary mx-auto size-16 rounded-full"
                        />
                        <h3 className="text-lg font-semibold italic-regular text-primary mb-2">
                          John's Story
                        </h3>
                        <p className="text-sm">
                          "Thanks to the winter clothes donation, I was able to
                          stay warm and comfortable during the coldest months of
                          the year. I'm truly grateful for the support!"
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" hover:bg-black hover:text-primary border-2 border-primary bg-primary" />
          <CarouselNext className=" hover:bg-black hover:text-primary border-2 border-primary bg-primary" />
        </Carousel>
      </div>
    </Container>
  );
};

export default SuccessStories;
