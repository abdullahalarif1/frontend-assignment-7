import { Button } from "@/components/ui/button";
import { useAddTestimonialMutation } from "@/redux/features/donors/donorsApi";
import { Plus } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

const CreateTestimonial = () => {
  const [testimonialName, setTestimonialName] = useState("");
  const [testimonialImage, setTestimonialImage] = useState("");
  const [testimonialLocation, setTestimonialLocation] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [testimonialAmount, setTestimonialAmount] = useState("");

  const [addTestimonial] = useAddTestimonialMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Make a POST request to your API endpoint with the service name

      const testimonialDetails = {
        img: testimonialImage,
        name: testimonialName,
        location: testimonialLocation,
        testimonial: testimonial,
        amount: testimonialAmount,
      };
      addTestimonial(testimonialDetails);
      console.log(testimonialDetails);

      toast.success("Successfully Added");

      // Handle success
      // Optionally, you can reset the form or perform other actions
      setTestimonialName("");
      setTestimonial("");
      setTestimonialAmount("");
      setTestimonialImage("");
      setTestimonialLocation("");
    } catch (error) {
      // Handle error
      console.error("Error adding service:", error);
    }
  };

  return (
    <div className="p-2 py-6 md:p-10 max-w-xl mx-auto bg-[#18332c] rounded-lg shadow-lg mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center w-full items-center flex-col gap-7 text-secondary"
      >
        <input
          type="text"
          value={testimonialName}
          onChange={(e) => setTestimonialName(e.target.value)}
          className="border border-primary focus:border-green-400 w-full mt-1 px-4 py-4 bg-inherit"
          placeholder="Donor Testimonial Name"
          required
        />
        <input
          type="text"
          value={testimonialImage}
          onChange={(e) => setTestimonialImage(e.target.value)}
          className="border border-primary focus:border-green-400 w-full mt-1 px-4 py-4 bg-inherit"
          placeholder="Donor Testimonial Image Link"
          required
        />
        <input
          type="text"
          value={testimonialLocation}
          onChange={(e) => setTestimonialLocation(e.target.value)}
          className="border border-primary focus:border-green-400 w-full mt-1 px-4 py-4 bg-inherit"
          placeholder="Donor Testimonial Location"
          required
        />
        <input
          type="text"
          value={testimonial}
          onChange={(e) => setTestimonial(e.target.value)}
          className="border border-primary focus:border-green-400 w-full mt-1 px-4 py-4 bg-inherit"
          placeholder="Testimonial"
          required
        />
        <input
          type="text"
          value={testimonialAmount}
          onChange={(e) => setTestimonialAmount(e.target.value)}
          className="border border-primary focus:border-green-400 w-full mt-1 px-4 py-4 bg-inherit"
          placeholder="Testimonial Amount"
          required
        />

        <Button className="rounded-none me-auto">
          Add Testimonial <Plus className="text-lg ps-1" />
        </Button>
      </form>
    </div>
  );
};

export default CreateTestimonial;
