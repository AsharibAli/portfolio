declare interface Window {
  Chatbot: {
    init: (options: {
      chatflowid: string;
      apiHost: string;
      theme: any;
    }) => void;
  };
}
