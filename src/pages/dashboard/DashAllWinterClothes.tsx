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
import {
  useDeleteClothesMutation,
  useGetClothesQuery,
} from "@/redux/features/winter-clothes/clothesApi";
import { TClothesItem } from "@/types/types";
import { Dot } from "lucide-react";
import Edit from "./Edit";
import { toast } from "sonner";

const DashAllWinterClothes = () => {
  const { data, isLoading } = useGetClothesQuery(undefined);
  const [deleteClothes] = useDeleteClothesMutation();

  const handleDeleteClothes = (ClotheId: string) => {
    deleteClothes(ClotheId);
    console.log("Todo deleted successfully");
    toast.success("Todo deleted successfully");
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className="text-secondary py-10 px-5">
      <Table >
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
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
              <TableCell className=" flex items-center gap-1">
                <Edit cloth={cloth} />
                <Button
                  onClick={() => handleDeleteClothes(cloth._id)}
                  className="rounded-none w-20"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DashAllWinterClothes;
