import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div
      className={cn(
        "w-full max-w-[1300px] mx-auto px-2 md:px-0  sm:px-[20px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
