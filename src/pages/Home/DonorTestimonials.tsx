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

const DonorTestimonials = () => {
  const donorData = [
    {
      id: 1,
      img: "https://media.licdn.com/dms/image/D5603AQHQsxTFYObr6Q/profile-displayphoto-shrink_800_800/0/1680094997594?e=2147483647&v=beta&t=BNdZKZoHhQlMBywuMDIbNZfaKby7iFIcgc7bq3K_v20",
      name: "Sarah Johnson",
      location: "New York, NY",
      testimonial:
        "I donated winter coats and gloves to help those in need stay warm during the cold winter months. It feels great to make a difference!",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0VYsbTD9AG5x-bXexTbzbmKp8sjHNh-jsCl4juyhfnw&s",
      name: "Michael Smith",
      location: "Chicago, IL",
      testimonial:
        "I'm proud to support this cause by donating winter hats and scarves. It's heartwarming to see the impact we can make together.",
    },
    {
      id: 3,
      img: "https://m.media-amazon.com/images/M/MV5BNDVlZTk2ZjctMDE5Yy00MDkwLThkZTMtZGZkNzJhM2RlM2Y1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
      name: "Emily Brown",
      location: "Los Angeles, CA",
      testimonial:
        "Donating winter clothes was a small gesture, but knowing it will bring warmth to someone in need makes it all worthwhile.",
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_xTa2Mapt9VUh2THHnorEXjoDlpookYOFHj_g649Tw&s",
      name: "David Rodriguez",
      location: "Houston, TX",
      testimonial:
        "I donated winter boots and socks to help those facing homelessness stay comfortable and safe during the winter season.",
    },
    {
      id: 5,
      img: "https://ca-times.brightspotcdn.com/dims4/default/c5bb5f7/2147483647/strip/true/crop/3145x3145+1725+484/resize/200x200!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F9f%2F00%2F483d2f9e40099e53712c624cf6f4%2Fjessica-martinez-tcn.jpg",
      name: "Jessica Martinez",
      location: "Miami, FL",
      testimonial:
        "I'm grateful for the opportunity to give back by donating winter clothes. Together, we can make a difference in our community.",
    },
    {
      id: 6,
      img: "https://cdn.britannica.com/96/234396-050-A4958606/Christopher-Lee-Bangkok-International-Film-Festival-Thailand-February-20-2006.jpg",
      name: "Christopher Lee",
      location: "Seattle, WA",
      testimonial:
        "Donating winter clothing items is my way of spreading warmth and kindness. It's amazing to see the impact of our collective efforts.",
    },
  ];

  return (
    <Container className="py-20">
      <TitleSection>Donor Testimonials</TitleSection>
      <div className="flex justify-center items-center ">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm md:max-w-screen-lg "
        >
          <CarouselContent>
            {donorData.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="rounded-none border border-primary">
                    <CardContent className="p-6">
                      <img className="size-20 rounded-full border-2 border-primary mx-auto mb-10" src={testimonial.img} alt="" />
                      <h3 className="text-2xl text-primary  italic-regular  font-semibold  mb-2">
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
          <CarouselPrevious className=" hover:bg-black hover:text-primary border-2 border-primary bg-primary" />
          <CarouselNext className="hover:text-primary  border-2 border-primary bg-primary hover:bg-black" />
        </Carousel>
      </div>
      
    </Container>
  );
};

export default DonorTestimonials;
