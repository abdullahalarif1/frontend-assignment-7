import Container from "@/components/ui/Container";
import TitleSection from "@/components/ui/TitleSection";
import { Button } from "@/components/ui/button";
import { useGetClothesQuery } from "@/redux/features/winter-clothes/clothesApi";
import { ArrowRightToLine, Check, Dot } from "lucide-react";
import { Link } from "react-router-dom";

const WinterClothes = () => {
  const { data, isLoading } = useGetClothesQuery(undefined);
  console.log(data);

  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <Container>
     
        <TitleSection>Winter Clothes</TitleSection>
 

      <div className="grid md:grid-cols-3  gap-5">
        {data.slice(0, 6).map((cloth) => (
          <div className="mt-5  shadow-2xl  p-10 relative text-secondary bg-card ">
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
              {cloth.size.map((size) => (
                <li className=" flex  font-semibold items-center gap-4 pb-3">
                  <Dot className="w-5" />
                  <span className="text-xs">{size}</span>
                </li>
              ))}
            </ul>
            <Button className="h-16 w-full rounded-none  font-bold text-base absolute left-0 right-0 bottom-0 ">
              View Detail
            </Button>
          </div>
        ))}
      </div>
      <Link to="/winter-clothes">
        <Button className="h-16 w-44 rounded-none flex items-center ms-auto gap-3 mt-8 font-bold text-base ">
          View All <ArrowRightToLine />
        </Button>
      </Link>
    </Container>
  );
};

export default WinterClothes;
