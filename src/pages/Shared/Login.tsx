import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { verifyToken } from "@/lib/verifyToken";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { EyeIcon, EyeOffIcon, LogIn } from "lucide-react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import logo from '../../assets/large-removebg-preview.png'

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    // reset,
  } = useForm();

  const [login] = useLoginMutation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("logging in");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap(); // removing extra data.data
      // from decode token
      const user = verifyToken(res.token);
      console.log(user);
      dispatch(setUser({ user: user, token: res.token }));
      toast.success("successfully logged in", { id: toastId, duration: 2000 });
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Container className="bg-auth">
      <div className="min-h-screen   px-3 py-20 text-secondary ">
        <img className="w-96 mx-auto" src={logo} alt="" />
        <div className="flex flex-col justify-center items-center lg:flex-row ">
          <div className="card flex-shrink-0 w-full md:max-w-lg ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  Login <LogIn className="text-lg ps-1" />
                </Button>
              </div>
              <div className=" text-xs pt-2 text-grey-600">
                New to Urban Winter Clothes?{" "}
                <span>
                  <Link
                    className="text-blue-400  hover:underline"
                    to="/register"
                  >
                    Please Sign-up
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

export default Login;
