import ReactGA from "react-ga4";

const initializeGA = () => {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId) {
    console.warn("Google Analytics ID is not set");
    return;
  }

  ReactGA.initialize(gaId);
};

const trackGAEvent = (category: string, action: string, label: string) => {
  console.log("GA event:", category, ":", action, ":", label);
  // Send GA4 Event
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

export default initializeGA;
export { initializeGA, trackGAEvent };
