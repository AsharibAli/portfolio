"use client";
import React from "react";
import Script from "next/script";

const AsharibChatbot = () => {
  return (
    <div className="m-0">
      <Script
        src="https://cdn.jsdelivr.net/gh/AsharibAli/FlowiseChatEmbed@latest/dist/web.js"
        type="module"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.Chatbot) {
            window.Chatbot.init({
              chatflowid: "96c49997-4611-412a-ae98-089140a82435",
              apiHost: "https://flowise-r1c3.onrender.com",
              theme: {
                button: {
                  backgroundColor: "#000000",
                  // right: 20,
                  // bottom: 20,
                  // size: "small",
                  iconColor: "white",
                  customIconSrc:
                    "https://raw.githubusercontent.com/AsharibAli/project-images/main/logo.png",
                },
                chatWindow: {
                  showTitle: true,
                  title: "🤖 Asharib Assistant AI 👈",
                  welcomeMessage:
                    "Hey! I am Asharib Assistant AI, here to help you with any questions you have. What can I assist you with today?",
                  backgroundColor: "#ffffff",
                  height: 700,
                  width: 400,
                  fontSize: 16,
                  poweredByTextColor: "#000000",
                  botMessage: {
                    backgroundColor: "#f7f8ff",
                    textColor: "#000000",
                    showAvatar: true,
                    avatarSrc:
                      "https://raw.githubusercontent.com/AsharibAli/project-images/main/profile1.jpg",
                  },
                  userMessage: {
                    backgroundColor: "#000000",
                    textColor: "#ffffff",
                    showAvatar: true,
                    avatarSrc:
                      "https://raw.githubusercontent.com/AsharibAli/project-images/main/usericon.png",
                  },
                  textInput: {
                    placeholder: "Type your question",
                    backgroundColor: "#ffffff",
                    textColor: "#303235",
                    sendButtonColor: "#000000",
                  },
                  feedback: {
                    color: "#000000",
                  },
                  footer: {
                    textColor: "#000000",
                    text: "Build with ❤️ by",
                    company: "Asharib Ali",
                    companyLink: "https://github.com/AsharibAli/",
                  },
                },
              },
            });
          }
        }}
      />
    </div>
  );
};

export default AsharibChatbot;
