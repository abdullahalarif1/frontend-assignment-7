import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateClothesMutation } from "@/redux/features/winter-clothes/clothesApi";
import { TClothesItem } from "@/types/types";
import { useState } from "react";
import { toast } from "sonner";

// type TUpdateClotheItem = {
//   title: string;
//   category: string;
//   size: string;
// };

interface TCloth {
  cloth: TClothesItem;
}

const Edit = ({ cloth }: TCloth) => {
  console.log(cloth);
  const [updateClothes, { isLoading }] = useUpdateClothesMutation();
  const [clothesName, setClothesName] = useState("");
  const [clothesCategory, setClothesCategory] = useState("");
  const [clothesSize, setClothesSize] = useState<string[]>([]);

  if (isLoading) {
    return <p>Loading...</p>;
  }


  const handleSaveChanges = () => {
    // Perform the update operation

    const updateClotheItem = {
      title: clothesName,
      category: clothesCategory,
      size: clothesSize,
    };

    updateClothes({ id: cloth._id, data: updateClotheItem })
      .unwrap()
      .then((response) => {
        console.log("Cloth updated successfully:", response);
        toast.success("Cloth updated successfully");
        // Optionally, you can handle success, close the modal, or navigate to another page
      })
      .catch((error) => {
        console.error("Error updating cloth:", error);
        // Handle error
        toast.error("Something Went wrong");
      });
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-none w-20">Edit</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-card border-2 border-primary text-secondary">
          <DialogHeader>
            <DialogTitle className="text-primary text-xl italic-regular">
              Edit Cloth
            </DialogTitle>
            <DialogDescription className="text-sm text-secondary">
              Make changes to your cloth here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                name="title"
                defaultValue={cloth.title}
                onChange={(e) => setClothesName(e.target.value)}
                className="col-span-3 rounded-none bg-inherit border border-primary"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input
                id="category"
                name="category"
                defaultValue={cloth.category}
                onChange={(e) => setClothesCategory(e.target.value)}
                className="col-span-3 rounded-none bg-inherit border border-primary"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="size" className="text-right">
                Size
              </Label>
              <Input
                id="size"
                name="size"
                defaultValue={cloth.size}
                onChange={(e) => setClothesSize(e.target.value.split("\n"))}
                className="col-span-3 rounded-none bg-inherit border border-primary"
              />
            </div>
          </div>
          <DialogFooter>
            <Button className="rounded-none" onClick={handleSaveChanges}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Edit;
