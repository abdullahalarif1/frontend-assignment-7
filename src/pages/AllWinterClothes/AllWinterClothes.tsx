import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { useGetClothesQuery } from "@/redux/features/winter-clothes/clothesApi";
import { TClothesItem } from "@/types/types";
import { CornerRightDown, Dot } from "lucide-react";
import { Link } from "react-router-dom";

const AllWinterClothes = () => {
  const { data, isLoading } = useGetClothesQuery(undefined);
  console.log(data);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  
  return (
    <Container>
      <div className="text-center max-w-[1086px] mx-auto mt-28 pb-14">
        <h1 className="font-extrabold border-2 border-primary text-primary italic-regular text-3xl md:text-5xl py-6 flex justify-center items-center gap-4">
          All Winter Clothes <CornerRightDown className="size-8" />
        </h1>
      </div>

      <div className="grid md:grid-cols-3  gap-5">
        {data.map((cloth: TClothesItem) => (
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
            <Link to={`/winter-clothes/${cloth._id}`}>
              <Button className="h-16 w-full rounded-none  font-bold text-base absolute left-0 right-0 bottom-0 ">
                View Detail
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AllWinterClothes;
