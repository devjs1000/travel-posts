import React, { useEffect } from "react";
import { auth } from "../helpers/fire";

const useAuth = () => {
  const [myAuth, setMyAuth] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const logout = () => {
    auth.signOut();
    setMyAuth(null);
  };

  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      setMyAuth(user);
      setLoading(false);
    });
  }, []);
  console.log(!!myAuth);

  return { myAuth, loading, status: !!myAuth, logout };
};

export default useAuth;
