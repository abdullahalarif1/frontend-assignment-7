import { Button } from "@/components/ui/button";
import "./Banner.css";
import Container from "@/components/ui/Container";
import { MoveRight } from "lucide-react";
// import { motion } from "framer-motion";

const Banner = () => {
  // const parent = {
  //   hidden: { opacity: 0, scale: 0.1 },
  //   visible: { opacity: 1, scale: 1 },
  // };

  return (
    <div className="home-banner-container">
      <Container className=" px-2 sm:px-0 pt-10 ">
        <h1
          className="text-3xl sm:text-6xl uppercase text-primary-foreground font-extrabold italic-regular"
          // variants={parent}
          // initial="hidden"
          // animate="visible"
          // transition={{
          //   ease: "easeInOut",
          //   duration: 1.5,
          //   delayChildren: 0.5,
          //   staggerChildren: 0.5,
          // }}
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-offset="200"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          Brand New Winter <br /> Collection
        </h1>
        <h2
          className="text-xl md:text-[40px] font-extrabold text-primary pt-2 md:pt-8 flex items-center gap-2 "
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-offset="200"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          For Winter <MoveRight />
        </h2>
        <p
          className=" md:text-lg max-w-xl  text-secondary py-7 md:pb-9 md:pt-12 "
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-offset="200"
          data-aos-mirror="true"
          data-aos-once="false"
        >
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
