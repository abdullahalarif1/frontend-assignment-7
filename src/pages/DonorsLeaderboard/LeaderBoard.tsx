import { useGetDonorsQuery } from "@/redux/features/donors/donorsApi";
import { TDonorItem } from "@/types/types";
import { CornerRightDown } from "lucide-react";

const Leaderboard = () => {
  const { data, isLoading } = useGetDonorsQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-screen-lg mx-auto py-20 px-2">
      <h1 className="font-extrabold border-2 border-primary text-primary italic-regular text-3xl md:text-5xl py-6 flex justify-center items-center gap-4">
        Donors Leaderboard <CornerRightDown className="size-8" />
      </h1>
      <div className="flex flex-col gap-4 pt-6">
        {data.map((donor: TDonorItem, index: number) => (
          <div
            key={donor._id}
            className="flex items-center justify-between border-primary hover:bg-primary  border-b-2  p-4"
          >
            <div className="flex justify-center items-center gap-3">
              <span className="font-bold">{index + 1}</span>
              <img
                src={donor.img}
                className="size-10 rounded-full border-2 border-primary"
                alt=""
              />
            </div>
            <span className=" mx-4">{donor.name}</span>
            <span className="font-bold">${donor.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
