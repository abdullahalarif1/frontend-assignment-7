import Container from "@/components/ui/Container";
import TitleSection from "@/components/ui/TitleSection";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";

const GallerySection = () => {
   const parent = {
     hidden: { opacity: 0, scale: 0.1 },
     visible: { opacity: 1, scale: 1 },
   };
  // Dummy image URLs for demonstration
  const images = [
    "https://cdn.shopify.com/s/files/1/1215/2782/files/leo_suppre_elements_banner1_h3.jpg",
    "https://cdn.shopify.com/s/files/1/1215/2782/files/leo_suppre_elements_banner2_h3.jpg",
    "https://cdn.shopify.com/s/files/1/1215/2782/files/leo_suppre_elements_banner6_h3.jpg",
    "https://media.istockphoto.com/id/638677200/photo/man-in-parka-hat-and-scarf-frozen-from-the-cold.webp?b=1&s=170667a&w=0&k=20&c=a30-HESgx6sG3_44as0O0gH5OV-GVh9QvNx5DPJuB8U=",
    "https://media.istockphoto.com/id/1087506784/photo/ready-for-holidays.webp?b=1&s=170667a&w=0&k=20&c=fUDkFaLYmDraU-U4p-fXcbxDcmV3pejgtW6xDzcXuKo=",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Container className=" pb-20">
      <motion.div
        className="container mx-auto px-4"
        variants={parent}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          duration: 1.5,
        }}
      >
        <TitleSection>Gallery</TitleSection>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          transitionTime={1000}
          onChange={handleOnChange}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img
                className="w-full h-[700px]"
                src={image}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
        <div className="flex justify-center mt-6">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 mx-1 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-primary" : "bg-secondary"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
};

export default GallerySection;
