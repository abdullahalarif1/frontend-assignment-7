import Container from "@/components/ui/Container";
import TitleSection from "@/components/ui/TitleSection";

const AboutUs = () => {
  return (
    <Container className="mt-32 pt-10  bg-card">
      <TitleSection>About Us</TitleSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-secondary p-10 ">
        <div>
          <h3 className="text-lg font-semibold italic-regular text-primary mb-4">
            Our Mission
          </h3>
          <p className="text-sm ">
            At WinterClothesDistribution.org, our mission is to ensure that no
            one goes cold during the harsh winter months. We believe that
            everyone deserves access to warm clothing and protection from the
            elements, regardless of their socioeconomic status.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold italic-regular text-primary mb-4">
            What We Do
          </h3>
          <p className="text-sm">
            We specialize in the management and distribution of winter clothes
            to individuals and families in need. Through partnerships with local
            shelters, charities, and community organizations, we collect donated
            winter clothing items and distribute them to those most in need.
          </p>
        </div>
      </div>
      <div className=" text-secondary ps-10 pe-10 pb-10">
        <h3 className="text-lg font-semibold italic-regular text-primary mb-4">
          Our Impact
        </h3>
        <p className="text-sm">
          Since our inception, we have distributed thousands of winter clothing
          items to individuals and families across the country. Our efforts have
          helped keep people warm and safe during cold weather conditions,
          providing them with essential protection and comfort.
        </p>
      </div>
    </Container>
  );
};

export default AboutUs;
