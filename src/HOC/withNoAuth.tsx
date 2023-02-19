import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../helpers/fire";

export function withNoAuth(Component: any) {
  return function (props: any) {
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
}
