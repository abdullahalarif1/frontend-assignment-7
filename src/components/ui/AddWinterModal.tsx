import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";

type SingleClothe = {
  title: string;
  category: string;
  price: number;
};

type User = {
  email: string;
  exp: number;
  iat: number;
};

type AddWinterModalProps = {
  singleClothe: SingleClothe;
};

export const AddWinterModal = ({ singleClothe }: AddWinterModalProps) => {
  console.log(singleClothe);
  const navigate = useNavigate();

  const user = useAppSelector(useCurrentUser) as User;
  console.log(user);

  const handleConfirmDonation = () => {
    // Perform donation process
    // Redirect to dashboard homepage

    navigate("/dashboard");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-14  rounded-none w-52 mt-5  font-bold text-base  ">
          Donate Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-card  border-2 border-primary text-secondary">
        <DialogHeader>
          <DialogTitle className="italic-regular text-2xl text-primary">
            Confirmation
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <div className=" ">
            <h3 className="font-bold text-lg pb-2">User Info</h3>
            <p className="text-xs">Email: {user?.email} </p>
            <p className="text-xs py-1">exp: {user?.exp} </p>
            <p className="text-xs">iat: {user?.exp} </p>
          </div>
          <div className="   ">
            <h3 className="font-bold text-lg pb-2">Winter Clothe</h3>
            <p className="text-xs">Name: {singleClothe.title} </p>
            <p className="text-xs py-1">Category: {singleClothe.category} </p>
            <p className="text-xs">Price: {singleClothe.price} </p>
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={handleConfirmDonation}
            className="rounded-none"
            type="submit"
          >
            Confirm Donation
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
