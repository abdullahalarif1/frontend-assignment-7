import TitleSection from "@/components/ui/TitleSection";
import { Button } from "@/components/ui/button";
import { useAddVolunteerMutation } from "@/redux/features/volunteer/volunteerApi";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

const VolunteerForm = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");

  const [addVolunteer] = useAddVolunteerMutation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const dataVolunteer = {
      email: email,
      phoneNumber: phoneNumber,
      location: location,
    };
    console.log(dataVolunteer);
    addVolunteer(dataVolunteer);

    toast.success("Successfully added");

    setEmail("");
    setLocation("");
    setPhoneNumber("");
  };

  return (
    <div className="pt-5 px-2">
      <TitleSection>Join Us as a Volunteer</TitleSection>

      <div className=" p-10 max-w-xl mx-auto bg-[#18332c] rounded-lg shadow-lg ">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium ">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-primary focus:border-green-400 w-full mt-1 px-4 py-4 bg-inherit"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium pb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="border border-primary focus:border-green-400 w-full mt-1 px-4 py-4 bg-inherit"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              placeholder="Number"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-sm font-medium pb-1"
            >
              Location
            </label>
            <input
              type="text"
              placeholder="Location"
              id="location"
              className="border border-primary focus:border-green-400 w-full mt-1 px-4 py-4 bg-inherit"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            className=" font-semibold py-2 px-4 rounded-none  hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerForm;
