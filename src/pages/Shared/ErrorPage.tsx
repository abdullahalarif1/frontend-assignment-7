/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError() as any;

  return (
    <section className="flex items-center bg-card h-screen py-32  text-white">
      <div className="container flex flex-col items-center justify-center px-5  mx-auto my-8">
        <img
          className="h-96 w-full rounded-md"
          src="https://thumbs.dreamstime.com/b/404-error-page-not-found-26920014.jpg"
          alt=""
        />
        <div className="max-w-md text-center pb-10">
          <h2 className=" font-semibold text-2xl text-red-600">
            {status || "not available status"}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link to="/">
            <Button className="rounded-none">Back to homepage</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
