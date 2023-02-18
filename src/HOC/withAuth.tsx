import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { auth } from "../helpers/fire";

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (!user) {
          router.push("/login");
        }
      });

      return () => unsubscribe();
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
