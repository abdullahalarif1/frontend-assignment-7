import Container from "@/components/ui/Container";
import TitleSection from "@/components/ui/TitleSection";
import { useGetVolunteerQuery } from "@/redux/features/volunteer/volunteerApi";
import { TVolunteer } from "@/types/types";
import { Locate, Mail, Phone } from "lucide-react";

const OurVolunteers = () => {
  const { data: volunteers, isLoading } = useGetVolunteerQuery(undefined);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <Container className=" mx-auto p-6">
      <TitleSection>About Us</TitleSection>
      <section id="our-volunteers" className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Our Volunteers</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteers.map((volunteer: TVolunteer) => (
            <li
              key={volunteer._id}
              className="bg-primary rounded-ee-xl shadow-md p-4"
            >
              <p className="text-gray-700 flex  items-center gap-2">
                <Mail />
                {volunteer.email}
              </p>
              <p className="text-gray-700 flex py-1  items-center gap-2">
                <Phone />
                {volunteer.phoneNumber}
              </p>
              <p className="text-gray-700 flex  items-center gap-2">
                <Locate />
                {volunteer.location}
              </p>
            </li>
          ))}
        </ul>
      </section>
      {/* Other sections of the About Us page */}
    </Container>
  );
};

export default OurVolunteers;
