import Container from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetDonorsQuery } from "@/redux/features/donors/donorsApi";
import { TDonorItem } from "@/types/types";
// import { useWindowSize } from "react-use"; // Import the useWindowSize hook

const DonorTestimonials = () => {
  const { data, isLoading } = useGetDonorsQuery(undefined);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <Container className="py-20">
      <div className="text-center max-w-[1086px] mx-auto my-14 pb-10">
        <h1 className="font-extrabold border-2 border-primary text-primary italic-regular text-3xl md:text-5xl py-6 flex justify-center items-center gap-4">
          Donor Testimonials
        </h1>
      </div>
      <div
        className="flex justify-center items-center relative"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      
      >
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm md:max-w-screen-lg "
        >
          <CarouselContent>
            {data.map((testimonial: TDonorItem) => (
              <CarouselItem
                key={testimonial._id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 pt-4 md:pt-6">
                  <Card className="rounded-none border border-primary ">
                    <CardContent className="p-6">
                      <img
                        className="size-20 rounded-full border-2 border-primary mx-auto mb-10"
                        src={testimonial.img}
                        alt=""
                      />
                      <h3 className="text-2xl text-primary italic-regular font-semibold mb-2">
                        {testimonial.name}
                      </h3>
                      <p className="text-secondary text-sm">
                        {testimonial.testimonial}
                      </p>
                      <p className="text-primary mt-2">
                        Location: {testimonial.location}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="my-5">
            <CarouselPrevious className="hover:bg-black hover:text-primary border-2 md:size-10 border-primary bg-primary absolute left-0 -top-5" />
            <CarouselNext className="hover:text-primary border-2 border-primary md:size-10 bg-primary hover:bg-black absolute left-10 md:left-12 -top-5" />
          </div>
        </Carousel>
      </div>
    </Container>
  );
};

export default DonorTestimonials;
