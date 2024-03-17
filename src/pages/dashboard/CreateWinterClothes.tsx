import { Button } from "@/components/ui/button";
import { useAddClotheMutation } from "@/redux/features/winter-clothes/clothesApi";
import { Plus } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

const CreateWinterClothes = () => {
  const [clotheImage, setClotheImage] = useState("");
  const [clotheTitle, setClotheTitle] = useState("");
  const [clotheSize, setClotheSize] = useState<string[]>([]);
  const [clotheCategory, setClotheCategory] = useState("");
  const [clotheDescription, setClotheDescription] = useState("");

  const [addClothe] = useAddClotheMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Make a POST request to your API endpoint with the service name

      const clotheDetails = {
        image: clotheImage,
        title: clotheTitle,
        category: clotheCategory,
        description: clotheDescription,
        size: clotheSize,
      };
      addClothe(clotheDetails);

      toast.success("Successfully Added");

      // Handle success
      // Optionally, you can reset the form or perform other actions
      setClotheTitle("");
      setClotheSize([]);
      setClotheImage("");
      setClotheCategory('')
      setClotheDescription('')
    } catch (error) {
      // Handle error
      console.error("Error adding service:", error);
    }
  };
  return (
    <div className="p-2 py-6 md:p-10 max-w-xl mx-auto bg-[#18332c] rounded-lg shadow-lg mt-5">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center w-full items-center flex-col gap-7 text-secondary"
      >
        <input
          type="text"
          value={clotheTitle}
          onChange={(e) => setClotheTitle(e.target.value)}
          className="border border-primary focus:border-green-400 w-full mt-1 px-4 py-4 bg-inherit"
          placeholder="Clothe Name"
          required
        />
        <input
          type="text"
          value={clotheCategory}
          onChange={(e) => setClotheCategory(e.target.value)}
          className="border border-primary focus:border-green-400 w-full mt-1 px-4 py-4 bg-inherit"
          placeholder="Clothe Category"
          required
        />
        <input
          type="text"
          value={clotheImage}
          onChange={(e) => setClotheImage(e.target.value)}
          className="border border-primary focus:border-green-400 w-full mt-1 px-4 py-4 bg-inherit"
          placeholder="Clothe Image Link"
          required
        />

        <textarea
          value={clotheSize.join("\n")}
          onChange={(e) => setClotheSize(e.target.value.split("\n"))}
          className="border border-primary focus:border-green-400 w-full mt-1 px-4 py-4 bg-inherit"
          placeholder="Clothe Size (One per line)"
          required
        />
        <textarea
          value={clotheDescription}
          onChange={(e) => setClotheDescription(e.target.value)}
          className="border border-primary focus:border-green-400 w-full mt-1 px-4 py-4 bg-inherit"
          placeholder="Clothe Description"
          required
        />

        <Button className="rounded-none me-auto">
          Add Winter Clothe <Plus className="text-lg ps-1" />
        </Button>
      </form>
    </div>
  );
};

export default CreateWinterClothes;
