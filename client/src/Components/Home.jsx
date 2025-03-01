import Constants from "./utils/Constants";
import {Link} from "react-router-dom";
import {useUser} from "@clerk/clerk-react";

const Hero = () => {
  const {isSignedIn} = useUser();
  return (
    <>
      <section className="h-full bg-gray-50 ">
        <div className="max-w-screen-xl px-4 py-48 mx-auto lg:flex lg:h-{82vh} lg:items-center">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl ">
              <strong className="font-extrabold text-red-700 sm:block">
                {Constants.title}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">{Constants.desc}</p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {isSignedIn ? (
                <Link
                  to="/dashboard"
                  className="block w-full px-6 py-3 text-sm font-medium text-white bg-red-600 rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                  href="#"
                >
                  Got To Dashboard
                </Link>
              ) : (
                <Link
                  to="/auth/sign-in"
                  className="block w-full px-12 py-3 text-sm font-medium text-white bg-red-600 rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                  href="#"
                >
                  Get Started
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
