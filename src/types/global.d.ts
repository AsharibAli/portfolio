declare interface Window {
  Chatbot: {
    init: (options: { chatflowid: any; apiHost: any; theme: any }) => void;
  };
  gtag?: (
    command: "event" | "config" | "set" | "js",
    targetOrEventName: string | Date,
    params?: Record<string, unknown>,
  ) => void;
  dataLayer?: unknown[];
}
