import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const usePageTracking = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  console.log(location);
  useEffect(() => {
    //if (!window.location.href.includes("localhost222")) {
      ReactGA.initialize("UA-179517549-1", { debug: true });
    //}
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search);
      console.log('pageview');
    }
    console.log('out of location: ', location);
  }, [initialized, location]);
};

export default usePageTracking;