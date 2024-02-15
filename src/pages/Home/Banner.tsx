import { Button } from "@/components/ui/button";
import "./Banner.css";
import Container from "@/components/ui/Container";
import { MoveRight } from "lucide-react";

const Banner = () => {
  return (
    // <div
    //   style={{
    //     background: `url(${`https://cdn.shopify.com/s/files/1/1215/2782/files/leo_suppre_elements_slide1_h3.jpg`})`,
    //     height: "100vh",
    //     backgroundPosition: "center",
    //   }}
    // >
    <div className="home-banner-container ">
      <Container className=" px-2 sm:px-0 pt-10 ">
        <h1 className="text-3xl sm:text-6xl uppercase text-primary-foreground font-extrabold italic-regular">
          Brand New Winter <br /> Collection
        </h1>
        <h2 className="text-xl md:text-[40px] font-extrabold text-primary pt-2 md:pt-8 flex items-center gap-2 ">
          For Winter <MoveRight />
        </h2>
        <p className=" md:text-lg max-w-xl  text-secondary py-7 md:pb-9 md:pt-12 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
          nec gravida ipsum pulvinar vel non.
        </p>
        <Button className="w-[100px] sm:min-w-[195px] sm:h-[52px] rounded-none font-bold text-base ">
          Explore
        </Button>
      </Container>
    </div>
    // </div>
  );
};

export default Banner;
