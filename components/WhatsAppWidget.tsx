"use client";
import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "919521985145";

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsOpen(false);
    setMessage("");
  };

  return (
    <div
      className="flex flex-col items-end z-[999]"
      style={{ position: "fixed", right: "20px", bottom: "20px" }}
    >
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-[#132A13] text-white p-4 rounded-t-3xl flex flex-col">
            <h3 className="font-bold text-lg">JS Interiors</h3>
            <span className="text-xs opacity-80 mt-1">
              Typically replies within an hour
            </span>
          </div>

          {/* Chat Body */}
          <div className="p-4 flex flex-col gap-3">
            <div className="bg-gray-100 p-3 rounded-xl shadow-inner text-sm text-black">
              👋 Hi there! How can we help you with your interior design today?
            </div>

            <form onSubmit={handleSendMessage} className="flex flex-col gap-2">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#132A13] resize-none"
                placeholder="Type your message..."
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ paddingLeft: "4px", paddingTop: "4px" }}
              />
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 py-2 bg-[#132A13] text-white font-semibold rounded-xl hover:bg-[#25D366] transition-colors"
              >
                Start Chat <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="ml-auto block bg-white text-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform border border-gray-200"
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
