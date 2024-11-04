import {SignIn} from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <>
      <div
        className="
        flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 font-sans p-6"
      >
        <SignIn />
      </div>
    </>
  );
};

export default SignInPage;
