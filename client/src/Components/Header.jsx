import {UserButton} from "@clerk/clerk-react";
import {Link} from "react-router-dom";
import {useUser} from "@clerk/clerk-react";
const Header = () => {
  const {isSignedIn} = useUser();
  return (
    <>
      <nav>
        <div className="flex items-center justify-between p-2 px-12 border bg-slate-50 ">
          <Link to="/" className="flex items-center">
            <img
              className="w-10 h-10 "
              src="https://img.icons8.com/ios/50/000000/share.png"
              alt="logo"
            />
          </Link>
          <div className="flex items-center ">
            {isSignedIn ? (
              <div className="flex gap-6">
                <UserButton />
              </div>
            ) : (
              <Link
                to="/auth/sign-in"
                className="block w-full px-8 py-3 text-sm font-medium text-white bg-red-600 rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
