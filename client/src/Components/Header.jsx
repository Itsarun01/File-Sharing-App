const Header = () => {
  return (
    <>
      <nav>
        <div className="flex items-center justify-between p-3 px-12 border ">
          <div className="flex items-center">
            <img
              className="w-10 h-10"
              src="https://img.icons8.com/ios/50/000000/share.png"
              alt="logo"
            />
          </div>
          <div className="flex items-center gap-5">
            <span className="px-5 py-2 font-bold text-white bg-red-500 rounded-lg hover:bg-red-700">
              Get Started
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
