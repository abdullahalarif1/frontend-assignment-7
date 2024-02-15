import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { verifyToken } from "@/lib/verifyToken";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { EyeIcon, EyeOffIcon, LogIn } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  const [login, { error }] = useLoginMutation();

  console.log("error", error);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    const res = await login(userInfo).unwrap(); // removing extra data.data
    // from decode token
    const user = verifyToken(res.token);
    console.log(user);
    dispatch(setUser({ user: user, token: res.token }));
  };

  return (
    <Container className="bg-auth">
      <div className="min-h-screen   px-3 py-20 text-secondary ">
        <div className="flex flex-col justify-center items-center lg:flex-row ">
          <div className="card flex-shrink-0 w-full md:max-w-lg ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control pb-4">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  {...register("email", { required: true })}
                  placeholder="Type email"
                  className=" border-2 border-primary focus:border-green-400 w-full mt-1 px-2 py-4 bg-inherit"
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
