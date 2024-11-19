// import {Navigate} from "react-router-dom";
import {useUser} from "@clerk/clerk-react";
import {Navigate} from "react-router-dom";
import {useRef, useState, useEffect} from "react";
import {uploadFile} from "../Api/api";

const Dashboard = () => {
  const [file, setFile] = useState();

  const fileInputRef = useRef();

  const fileUploadHandler = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    const getImage = () => {
      if (file) {
        const data = new FormData();
        data.append("Name", file.name);
        data.append("File", file);

        uploadFile(data);
      }
    };
    getImage();
  }, [file]);

  const {isLoaded, isSignedIn} = useUser();

  if (!isSignedIn && isLoaded) {
    //
    return <Navigate to="/auth/sign-in" />;
  } else {
    <Navigate to="/dashboard" />;
  }

  return (
    <>
      <div>
        <div className="font-semibold text-center mt-16 mb-6">
          <span className=" text-3xl font-extrabold text-red-600">
            Upload your file here
          </span>
          <br />
          <p className="text-2xl mt-2 mb-12">
            Upload any file from your device, and get a shareable link.
          </p>
        </div>
        {/* Upload File Container */}
        <div
          onClick={fileUploadHandler}
          className="bg-red-50 text-gray-500 font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-red-300 border-dashed mx-auto font-[sans-serif]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-11 mb-2 fill-red-600"
            viewBox="0 0 32 32"
          >
            <path
              d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
              data-original="#000000"
            />
            <path
              d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
              data-original="#000000"
            />
          </svg>
          Upload file
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            ref={fileInputRef}
            className="hidden"
          />
          <p className="text-xs font-medium text-gray-400 mt-2">
            Click this box to upload a file
          </p>
        </div>
        {/* Upload File Container */}
      </div>
    </>
  );
};

export default Dashboard;
