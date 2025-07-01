"use client";
import { useEffect, useRef } from "react";
const withLogger = (WrappedComponent) => {
  const LoggerComponent = (props) => {
    const isMounted = useRef(false);
    useEffect(() => {
      console.log(` mounted`);
      isMounted.current = true;
      return () => console.log(` unmounted`);
      
  });
    useEffect(() => {
      if (isMounted.current) {
        console.log(` updated`);
      }
    });

    return <WrappedComponent {...props} />;
  };

  return LoggerComponent;
};

export default withLogger;
