import { AddWinterModal } from "@/components/ui/AddWinterModal";
import Container from "@/components/ui/Container";
import { useGetSingleClothesQuery } from "@/redux/features/winter-clothes/clothesApi";
import { Dot } from "lucide-react";
import { useParams } from "react-router-dom";

const WinterClothesDetail = () => {
  const { id } = useParams();
  const { data: singleClothe, isLoading } = useGetSingleClothesQuery({
    _id: id,
  });
  console.log(singleClothe);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!singleClothe) {
    return <div>No data found for this item.</div>;
  }
  return (
    <Container className="text-secondary pt-28">
      <div className="text-center">
        <div className="mt-5 shadow-2xl p-10 relative text-secondary bg-card ">
          <img
            className="mx-auto w-full h-[500px] mb-5 border-2 border-primary p-3"
            src={singleClothe.image}
            alt=""
          />
          <h3 className="font-bold italic-regular text-primary  text-4xl">
            {singleClothe.title}
          </h3>
          <p className="text-sm">Category: {singleClothe.category}</p>

          <button className="bg-primary text-black  rounded-none font-bold text-base w-[250px] h-[52px] my-5">
            Available size
          </button>

          <ul className="mb-5 flex justify-center  items-center">
            {singleClothe.size.map((size: [], i: number) => (
              <li key={i} className=" flex   font-semibold items-center  ">
                <Dot className="w-5" />
                <span className="text-xs">{size}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm">Description: {singleClothe.description}</p>

          <AddWinterModal singleClothe={singleClothe} />
        </div>
      </div>
    </Container>
  );
};

export default WinterClothesDetail;
