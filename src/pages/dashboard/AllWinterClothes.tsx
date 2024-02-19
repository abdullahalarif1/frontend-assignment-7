import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetClothesQuery } from "@/redux/features/winter-clothes/clothesApi";
import { TClothesItem } from "@/types/types";
import { Dot } from "lucide-react";

const DashAllWinterClothes = () => {
  const { data, isLoading } = useGetClothesQuery(undefined);

  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <div className="text-secondary py-10 px-5">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow >
            <TableHead className="italic-regular text-primary text-lg font-semibold">
              Cloth Title
            </TableHead>
            <TableHead className="italic-regular text-primary text-lg font-semibold">
              Category
            </TableHead>
            <TableHead className="italic-regular text-primary text-lg font-semibold">
              Size
            </TableHead>
            <TableHead className="italic-regular text-primary text-lg font-semibold">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((cloth: TClothesItem) => (
            <TableRow key={cloth._id}>
              <TableCell className="font-medium">{cloth.title}</TableCell>
              <TableCell>{cloth.category}</TableCell>
              <TableCell>
                <div className="flex  items-center">
                  {cloth.size.map((size, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center"
                    >
                      {/* Assuming Dot is a component to represent a dot */}
                      <Dot className="w-5" />
                      <span className="inline">{size}</span>
                    </div>
                  ))}
                </div>
              </TableCell>
              <TableCell className="space-y-1 md:space-x-2">
                <Button className="rounded-none w-20">Edit</Button>
                <Button className="rounded-none w-20">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DashAllWinterClothes;
