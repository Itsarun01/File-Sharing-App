const Hero = () => {
  return (
    <>
      <section className="bg-gray-50 w-{100vh} h-screen">
        <div className="max-w-screen-xl px-4 py-48 mx-auto lg:flex lg:h-screen lg:items-center">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl ">
              <strong className="font-extrabold text-red-700 sm:block">
                File Sharing App.
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              this App Make you able to share your files with your friends and
              family. You can share any type of file with any size.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                className="block w-full px-12 py-3 text-sm font-medium text-white bg-red-600 rounded shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
