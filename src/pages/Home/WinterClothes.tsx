import Container from "@/components/ui/Container";
import TitleSection from "@/components/ui/TitleSection";
import { Button } from "@/components/ui/button";
import { useGetClothesQuery } from "@/redux/features/winter-clothes/clothesApi";
import { TClothesItem } from "@/types/types";
import { ArrowRightToLine, Dot } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WinterClothes = () => {
  const { data, isLoading } = useGetClothesQuery(undefined);
  console.log(data);
  const parent = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: { opacity: 1, scale: 1 },
  };

  const child = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: { opacity: 1, scale: 1 },
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <Container>
      <TitleSection>Winter Clothes</TitleSection>

      <motion.div
        className="grid md:grid-cols-3  gap-5"
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
        {data?.slice(0, 6).map((cloth: TClothesItem) => (
          <motion.div
            key={cloth._id}
            className="mt-5  shadow-2xl  p-10 relative text-secondary bg-card "
            variants={child}
          >
            <img
              className="h-[500px] md:h-72 w-full pb-4"
              src={cloth.image}
              alt=""
            />
            <h3 className="font-bold italic-regular text-primary  text-2xl">
              {cloth.title}
            </h3>
            <p className="text-sm">Category: {cloth.category}</p>

            <button className="bg-primary text-black  rounded-none font-bold text-base w-[250px] h-[52px] my-5">
              Available size
            </button>

            <ul className="mb-10">
              {cloth.size.map((size, i) => (
                <li
                  key={i}
                  className=" flex  font-semibold items-center gap-4 pb-3"
                >
                  <Dot className="w-5" />
                  <span className="text-xs">{size}</span>
                </li>
              ))}
            </ul>
            <Link to={`/winter-clothes/${cloth._id}`}>
              <Button className="h-16 w-full rounded-none  font-bold text-base absolute left-0 right-0 bottom-0 ">
                View Detail
              </Button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      <Link to="/winter-clothes">
        <Button className="h-16 w-44 rounded-none flex items-center ms-auto gap-3 mt-8 font-bold text-base ">
          View All <ArrowRightToLine />
        </Button>
      </Link>
    </Container>
  );
};

export default WinterClothes;
