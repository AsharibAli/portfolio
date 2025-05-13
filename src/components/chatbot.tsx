"use client";
import React from "react";
import Script from "next/script";

const AsharibAssistant = () => {
  return (
    <div className="m-0">
      <Script
        src="https://cdn.jsdelivr.net/npm/flowise-embed@latest/dist/web.js"
        type="module"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.Chatbot) {
            window.Chatbot.init({
              chatflowid: process.env.NEXT_PUBLIC_CHATFLOW_ID,
              apiHost: process.env.NEXT_PUBLIC_API_HOST,
              theme: {
                button: {
                  backgroundColor: "#000000",
                  right: 15,
                  bottom: 16,
                  size: "medium",
                  iconColor: "white",
                  dragAndDrop: true,
                  customIconSrc:
                    "https://raw.githubusercontent.com/AsharibAli/project-images/main/logo.png",
                  autoWindowOpen: {
                    autoOpen: true,
                    openDelay: 5,
                    autoOpenOnMobile: false,
                  },
                },
                tooltip: {
                  showTooltip: true,
                  tooltipMessage: "Try my Assistant",
                  tooltipBackgroundColor: "white",
                  tooltipTextColor: "black",
                  tooltipFontSize: 16,
                },
                chatWindow: {
                  showTitle: true,
                  title: "🤖 Asharib Assistant 👈",
                  welcomeMessage:
                    "Hello! I am Asharib Assistant, here to help you with any questions you have about Asharib Ali. What can I assist you with today?",
                  errorMessage:
                    "Unable to retrieve data from the server. Please try again later.",
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
                    maxChars: 100,
                    maxCharsWarningMessage:
                      "You exceeded the characters limit. Please input less than 100 characters.",
                    autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
                    sendMessageSound: true,
                    receiveMessageSound: true,
                  },
                  feedback: {
                    color: "#000000",
                  },
                  dateTimeToggle: {
                    date: true,
                    time: true,
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

export default AsharibAssistant;
