import { CornerRightDown } from "lucide-react";
import { ReactNode } from "react";

type TChildren = {
  children: ReactNode;
};

const TitleSection = ({ children }: TChildren) => {
  return (
    <div className="text-center max-w-[1086px] mx-auto mt-14 pb-10">
      <h1 className="font-extrabold border-2 border-primary text-primary italic-regular text-3xl md:text-5xl py-6 flex justify-center items-center gap-4">
        {children} <CornerRightDown className="size-8" />
      </h1>
    </div>
  );
};

export default TitleSection;
