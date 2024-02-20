import Container from "@/components/ui/Container";
import TitleSection from "@/components/ui/TitleSection";
import { motion } from "framer-motion";

const AboutUs = () => {
  const parent = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: { opacity: 1, scale: 1 },
  };

  const child = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <Container className="mt-32 pt-10  bg-card">
      <TitleSection>About Us</TitleSection>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 text-secondary p-10 "
        variants={parent}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          duration: 1.5,
          delayChildren: 0.5,
          staggerChildren: 0.5,
        }}
      >
        <motion.div variants={child}>
          <h3 className="text-lg font-semibold italic-regular text-primary mb-4">
            Our Mission
          </h3>
          <p className="text-sm ">
            At WinterClothesDistribution.org, our mission is to ensure that no
            one goes cold during the harsh winter months. We believe that
            everyone deserves access to warm clothing and protection from the
            elements, regardless of their socioeconomic status.
          </p>
        </motion.div>
        <motion.div variants={child}>
          <h3 className="text-lg font-semibold italic-regular text-primary mb-4">
            What We Do
          </h3>
          <p className="text-sm">
            We specialize in the management and distribution of winter clothes
            to individuals and families in need. Through partnerships with local
            shelters, charities, and community organizations, we collect donated
            winter clothing items and distribute them to those most in need.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        variants={child}
        className=" text-secondary ps-10 pe-10 pb-10"
      >
        <h3 className="text-lg font-semibold italic-regular text-primary mb-4">
          Our Impact
        </h3>
        <p className="text-sm">
          Since our inception, we have distributed thousands of winter clothing
          items to individuals and families across the country. Our efforts have
          helped keep people warm and safe during cold weather conditions,
          providing them with essential protection and comfort.
        </p>
      </motion.div>
    </Container>
  );
};

export default AboutUs;
