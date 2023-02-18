import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../helpers/fire";

export const withNoAuth = (Component: any) => {
  return (props: any) => {
    const router = useRouter();
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          router.push("/");
        }
      });
    }, []);

    return <Component {...props} />;
  };
};
