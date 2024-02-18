import Container from "@/components/ui/Container";
import logo from "../../assets/large-removebg-preview.png";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { EyeIcon, EyeOffIcon, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useRegisteringMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { createUser } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";

const Register = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [registering] = useRegisteringMutation();
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Registering...");
    console.log(data);
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      const res = await registering(userInfo).unwrap(); // removing extra data.data
      dispatch(createUser({ user: res }));
      toast.success("successfully Registered", { id: toastId, duration: 2000 });
      reset();
      navigate("/login");
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <Container className="bg-auth">
      <div className="min-h-screen  py-10 px-3 text-secondary ">
        <img className="w-96 mx-auto" src={logo} alt="" />
        <div className="flex flex-col justify-center items-center lg:flex-row ">
          <div className="card flex-shrink-0 w-full md:max-w-lg ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control pb-4">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Type name"
                  className=" border-2  border-primary focus:border-green-400 w-full mt-1 px-2 py-4 bg-inherit"
                />
              </div>
              <div className="form-control pb-4">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  {...register("email", { required: true })}
                  placeholder="Type email"
                  className=" border-2  border-primary focus:border-green-400 w-full mt-1 px-2 py-4 bg-inherit"
                />
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <div className="password-input  relative">
                  <input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="Type password"
                    className=" border-2 border-primary focus:border-green-400 w-full mt-1 px-2 py-4 bg-inherit"
                  />
                  <div
                    className="password-toggle-icon absolute right-5 top-4"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                  </div>
                </div>
              </div>

              <div className="form-control mt-6  ">
                <Button className="rounded-none ">
                  Register <LogIn className="text-lg ps-1" />
                </Button>
              </div>
              <div className=" text-xs pt-2 text-grey-600">
                Already registered?{" "}
                <span>
                  <Link className="text-blue-400  hover:underline" to="/login">
                    Please Login
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
