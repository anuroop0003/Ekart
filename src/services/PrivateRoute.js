"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const isAuthenticated = JSON.parse(localStorage.getItem("user"))?.token;

  useEffect(() => {
    setLoader(true);
    const timer = setTimeout(() => setLoader(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isAuthenticated) {
    router.push("/");
    return null;
  }

  const Spinner = () => {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-slate-900">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            {/* Loading... */}
          </span>
        </div>
      </div>
    );
  };

  return <>{!loader ? <Spinner /> : children}</>;
};

export default PrivateRoute;
