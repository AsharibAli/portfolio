"use client";
import { useEffect } from "react";

const FlowiseChatbot = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `import Chatbot from "https://cdn.jsdelivr.net/gh/AsharibAli/FlowiseChatEmbed@latest/dist/web.js"
    Chatbot.init({
        chatflowid: "96c49997-4611-412a-ae98-089140a82435",
        apiHost: "https://flowise-r1c3.onrender.com",
        chatflowConfig: {
            // topK: 2
        },
        theme: {
            button: {
                backgroundColor: "#000000",
                right: 20,
                bottom: 20,
                size: "medium",
                iconColor: "white",
                customIconSrc: "https://raw.githubusercontent.com/AsharibAli/project-images/main/logo.png",
            },
            chatWindow: {
                showTitle: true, 
                title: '🤖 Asharib Assistant AI 👈',
                welcomeMessage: "Hey! I am Asharib Assistant AI, here to help you with any questions you have. What can I assist you with today?",
                backgroundColor: "#ffffff",
                height: 700,
                width: 400,
                fontSize: 16,
                poweredByTextColor: "#000000",
                botMessage: {
                    backgroundColor: "#f7f8ff",
                    textColor: "#000000",
                    showAvatar: true,
                    avatarSrc: "https://raw.githubusercontent.com/AsharibAli/project-images/main/profile1.jpg",
                },
                userMessage: {
                    backgroundColor: "#000000",
                    textColor: "#ffffff",
                    showAvatar: true,
                    avatarSrc: "https://raw.githubusercontent.com/AsharibAli/project-images/main/usericon.png",
                },
                textInput: {
                    placeholder: "Type your question",
                    backgroundColor: "#ffffff",
                    textColor: "#303235",
                    sendButtonColor: "#000000",
                }
            }
        }
    })`;

    // Append the script to the document
    document.body.appendChild(script);

    // Clean up the script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Return an empty div to ensure it's a valid JSX component
  return <div />;
};

export default FlowiseChatbot;
