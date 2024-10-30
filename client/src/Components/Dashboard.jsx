import {UserButton} from "@clerk/clerk-react";
import {Navigate} from "react-router-dom";
import {useUser} from "@clerk/clerk-react";

const Dashboard = () => {
  const {user, isLoaded, isSignedIn} = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to="/auth/sign-in" />;
  } else {
    // <Navigate to="/dashboard" />;
  }
  return (
    <>
      <h1>Dashboard</h1>
      <UserButton />
    </>
  );
};

export default Dashboard;
