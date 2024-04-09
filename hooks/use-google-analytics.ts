

// In a client-only component or hook
import { useEffect } from "react";
import Analytics from "react-ga4";

export const useGoogleAnalytics = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const gaId = process.env.NEXT_PUBLIC_GA_ID;

      if (gaId) {
        Analytics.initialize(gaId);
      } else {
        console.warn("Google Analytics ID is not set");
      }
    }
  }, []);
};
