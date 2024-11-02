import {Link} from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav>
        <div className="flex items-center justify-between p-3 px-12 border ">
          <Link to="/" className="flex items-center">
            <img
              className="w-10 h-10"
              src="https://img.icons8.com/ios/50/000000/share.png"
              alt="logo"
            />
          </Link>
          <div className="flex items-center gap-5">
            <Link
              to="/dashboard"
              className="px-5 py-2 text-sm font-bold text-white bg-red-600 rounded-lg hover:bg-red-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
