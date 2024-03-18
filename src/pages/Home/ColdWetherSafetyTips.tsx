import Container from "@/components/ui/Container";
import TitleSection from "@/components/ui/TitleSection";

import Marquee from "react-fast-marquee";

const ColdWetherSafetyTips = () => {
  return (
    <div
      className="bg-[#18332c] pb-20 border-b-2 border-primary border-t-2"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="px-2">
        <TitleSection>Cold Weather Safety Tips</TitleSection>
      </div>
      <Container className="border-r-8 border-r-primary border-l-8 border-l-primary">
        <Marquee>
          <div className="grid grid-cols-4 gap-8">
            <div className="bg-card w-[700px] px-5 py-1 border-none shadow-xl ">
              <h3 className="text-2xl italic-regular text-primary font-bold mb-4 ">
                Dress in Layers
              </h3>
              <p className="text-sm text-secondary">
                Layering your clothing helps trap warm air close to your body
                and provides better insulation against the cold.
              </p>
            </div>
            <div className="bg-card w-[700px] p-5 shadow-xl">
              <h3 className="text-2xl italic-regular text-primary font-bold mb-4 ">
                Stay Dry
              </h3>
              <p className="text-sm text-secondary">
                Wet clothing can lead to faster heat loss, so it's important to
                stay dry by wearing waterproof outer layers and avoiding
                prolonged exposure to moisture.
              </p>
            </div>
            <div className="bg-card w-[700px] p-5 shadow-xl">
              <h3 className="text-2xl italic-regular text-primary font-bold mb-4 ">
                Stay Hot
              </h3>
              <p className="text-sm text-secondary">
                Wet clothing can lead to faster heat loss, so it's important to
                stay dry by wearing waterproof outer layers and avoiding
                prolonged exposure to moisture.
              </p>
            </div>
            <div className="bg-card w-[700px] p-5 shadow-xl me-[32px]">
              <h3 className="text-2xl italic-regular text-primary font-bold mb-4 ">
                Stay Calm
              </h3>
              <p className="text-sm text-secondary">
                Wet clothing can lead to faster heat loss, so it's important to
                stay dry by wearing waterproof outer layers and avoiding
                prolonged exposure to moisture.
              </p>
            </div>
          </div>
        </Marquee>
      </Container>
    </div>
  );
};

export default ColdWetherSafetyTips;
